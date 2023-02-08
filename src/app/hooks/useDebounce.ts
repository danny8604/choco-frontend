import { useEffect, useState } from "react";

type Timer = ReturnType<typeof setTimeout>;

export const useDebounce = <T>(value: T | undefined, delay?: number) => {
  const [debounceValue, setDebounce] = useState<T>();

  useEffect(() => {
    const timer: Timer = setTimeout(() => setDebounce(value), delay || 250);

    return () => {
      return clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};
