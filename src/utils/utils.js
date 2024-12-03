export const clx = (...classNames) => {
  return classNames.filter(Boolean).join(" ");
};

function stringify(e) {
  let result = "";
  if (typeof e === "string" || typeof e === "number") {
    result += e;
  } else if (typeof e === "object") {
    if (Array.isArray(e)) {
      for (let i = 0; i < e.length; i++) {
        if (e[i]) {
          let nestedString = stringify(e[i]);
          if (result) {
            result += " ";
          }
          result += nestedString;
        }
      }
    } else {
      for (let key in e) {
        if (e[key]) {
          if (result) {
            result += " ";
          }
          result += key;
        }
      }
    }
  }
  return result;
}

export const cx = (...args) => {
  return args
    .filter((arg) => arg !== null)
    .map(stringify)
    .join(" ");
};

export const wait = (ms = 250) =>
  new Promise((resolve) => {
    const id = setTimeout(() => {
      resolve();
    }, ms);
    return () => clearTimeout(id);
  });

export const waitFn = (fn, ms = 250) =>
  new Promise((resolve) => {
    const id = setTimeout(() => {
      resolve(fn());
    }, ms);
    return () => clearTimeout(id);
  });

export const waitUntil = (fn, ms = 250) =>
  new Promise((resolve) => {
    const id = setInterval(() => {
      if (fn()) {
        clearInterval(id);
        resolve();
      }
    }, ms);
  });

export function interval(fn, ms = 1000) {
  return new Promise((resolve) => {
    const id = setInterval(() => {
      resolve(fn());
    }, ms);
    return () => clearInterval(id);
  });
}

export function intervalCount(fn, count = 5, ms = 1000) {
  return new Promise((resolve) => {
    let i = 0;
    let id;
    if (i === 0 && !id && count > 1) resolve(fn());
    id = setInterval(() => {
      resolve(fn());
      i++;
      if (i >= count) {
        clearInterval(id);
      }
    }, ms);
    return () => clearInterval(id);
  });
}

// export function debounce(fn, ms = 1000) {
//   let timer;
//   return (...args) => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, ms);

//     return () => clearTimeout(timer);
//   };
// }
export function debounce(callback, delay=1000) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

export const show = (fn, on = false) => {
  if (!on) return;
  return fn();
};

export const isObj = (obj) => {
  return typeof obj === "object" && obj !== null;
};

export const isArr = (arr) => {
  return Array.isArray(arr);
};
export const isFn = (fn) => typeof fn === "function";
export const isNull = (obj) => obj === null || obj === "";

export const toJson = (obj) => JSON.stringify(obj, null, 2);
export const toObj = (json) => JSON.parse(json);
export const toArr = (obj) => typeof obj === "object" &&  Object.values(obj);
export const toKey = (obj) => typeof obj === "object" && Object.keys(obj);

export const numFormat = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 1,
  minimumFractionDigits: 0,
  maximumFractionDigits: 4,
});

export const toNumber = (num) => numFormat.format(num);
export const toPercent = (num) => numFormat.format(num * 100);

const timeFormat = (time) => new Date(time).toLocaleTimeString("th-TH");
const dateFormat = (date) => new Date(date).toLocaleDateString("th-TH");
export const toTime = (date) => timeFormat(date);
export const toDate = (date) => dateFormat(date);
export const toDateTime = (date) => `${dateFormat(date)} ${timeFormat(date)}`;

export function restime(previous) {
  const now = performance.now();
  const seconds = Math.floor(now);
  const nanoseconds = Math.floor((now % 1) * 1e9);
  if (previous) {
    const timeRes = seconds - previous;
    return toNumber(timeRes);
  }
  return [seconds, nanoseconds];
}

export const resFn = async (fn, ...args) => {
  const start = performance.now();
  try {
    await fn(...args);
  } catch (error) {
    console.error(error);
    throw error;
  }
  const end = performance.now();
  const time = toNumber(end - start);
  return time;
};

export function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}
