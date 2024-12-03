import { useCallback, useEffect, useSyncExternalStore } from "react";

function dispatchStorageEvent(key = "", newValue = "") {
  const event = new StorageEvent("storage", { key, newValue });
  return window.dispatchEvent(event);
}

const setLocalStorageItem = (key = "", value = "") => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeLocalStorageItem = (key = "") => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const getLocalStorageItem = (key = "") => window.localStorage.getItem(key);

const useLocalStorageSubscribe = (callback = () => {}) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getLocalStorageServerSnapshot = () => {  
  // throw Error("useLocalStorage is a client-only hook");
  return getLocalStorageItem();
};

export function useLocalStorage(key = "", initialValue = "") {
  const getSnapshot = () => getLocalStorageItem(key);

  const store = useSyncExternalStore(useLocalStorageSubscribe, getSnapshot,
    getLocalStorageServerSnapshot
  );

  const setState = useCallback(
    (v) => {
      const nextState = typeof v === "function" ? v(JSON.parse(store)) : v;

      if (nextState == null) {
        removeLocalStorageItem(key);
      } else {
        setLocalStorageItem(key, nextState);
      }
    },
    [key, store]
  );

  useEffect(() => {
    if (getLocalStorageItem(key) === null && typeof initialValue !== "undefined") {
      setLocalStorageItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? JSON.parse(store) : initialValue, setState];
}

export default useLocalStorage