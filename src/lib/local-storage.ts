import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  // getting stored value
  const saved = localStorage.getItem(key);
  const value = saved === null ? defaultValue : JSON.parse(saved) as T;
  return value ?? defaultValue;
}

export function useLocalStorage<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue<T>(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
