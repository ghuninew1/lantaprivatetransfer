import { toJson, toObj } from "#utils/utils";
import { useCallback, useEffect, useState, useMemo, useRef } from "react";

export function useSocket({ url = "", params = {}, retryInterval = 1000, retry = 10, autoConnect = true,extensions="permessage-deflate; client_max_window_bits" }) {
    const socketRef = useRef(null);
    const [isConnected, setIsConnected] = useState(false);
    const [msData, setMsData] = useState([]);
    const retriesRef = useRef(0);
    const [open, setOpen] = useState(false);

    if (url && Object.keys(params).length) {
        const searchParams = new URLSearchParams(params);
        url = `${url}?${searchParams}`;
    }

    useEffect(() => {
        if (!open) return;

        const socketCurrent = new WebSocket(url);
        socketCurrent.SecWebSocketExtensions=extensions;
        socketRef.current = socketCurrent;

        const onOpen = () => {
            setIsConnected(true);
            setOpen(true);
        };

        const onClose = () => {
            setIsConnected(false);
            setOpen(false);
        };

        const onMessage = (event) => {
            if (!event.data) return;
            
            if (typeof event.data === "string" || event.data instanceof ArrayBuffer) {
                const data = toObj(event.data);
                setMsData(data);
            } else {
                setMsData(event.data);
            }
        };

        socketCurrent.addEventListener("open", onOpen);
        socketCurrent.addEventListener("close", onClose);
        socketCurrent.addEventListener("message", onMessage);

        return () => {
            if (socketCurrent.readyState !== WebSocket.CLOSED && socketRef.current === socketCurrent) {
                socketCurrent.close();
                socketRef.current = null;
            }
            socketCurrent.removeEventListener("open", onOpen);
            socketCurrent.removeEventListener("close", onClose);
            socketCurrent.removeEventListener("message", onMessage);
        };
    }, [extensions, open, url]);

    useEffect(() => {
        if (!autoConnect) return;
        const retries = retriesRef.current;
        const intervalRef = setInterval(
            () => {
                if (!open) setOpen(true);
                retriesRef.current = retries + 1;
                if (retriesRef.current > retry) {
                    clearInterval(intervalRef);
                    setOpen(false);
                    retriesRef.current = 0;
                }
            },
            retries === 0 ? 500 : retryInterval * (retries)
        );
        return () => {
            clearInterval(intervalRef);
        };
    }, [open, retryInterval, retry, autoConnect]);

    const connect = useCallback(() => {
        if (socketRef.current?.readyState === WebSocket.OPEN) return;
        setOpen(true);
    }, []);

    const send = useCallback(({ ...data }) => {
        if (socketRef.current?.readyState !== WebSocket.OPEN) return;
        socketRef.current.send(toJson(data));
    }, []);

    const close = useCallback(() => {
        if (socketRef.current?.readyState !== WebSocket.OPEN) return;
        socketRef.current.close();
    }, []);

    return useMemo(
        () => ({
            isConnected,
            msData,
            connect,
            close,
            send,
        }),
        [isConnected, msData, connect, close, send]
    );
}

export default useSocket;
