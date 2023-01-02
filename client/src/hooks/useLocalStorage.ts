import { useState } from "react";

export type StorageKeys = "roomId" | "userId" | "username";

export const useLocalStorage = (
  storageKey: StorageKeys
): [
  string | null, //
  (arg: string) => void,
  () => void
] => {
  const value = localStorage.getItem(storageKey);
  const [state, setState] = useState<string | null>(value);

  const setValue = (newValue: string) => {
    localStorage.setItem(storageKey, newValue);
    setState(newValue);
  };
  const removeValue = () => {
    localStorage.removeItem(storageKey);
    setState(null);
  };

  return [state, setValue, removeValue];
};

export const useSessionStorage = (
  storageKey: StorageKeys
): [
  string | null, //
  (arg: string) => void,
  () => void
] => {
  const value = sessionStorage.getItem(storageKey);
  const [state, setState] = useState<string | null>(value);

  const setValue = (newValue: string) => {
    sessionStorage.setItem(storageKey, newValue);
    setState(newValue);
  };
  const removeValue = () => {
    sessionStorage.removeItem(storageKey);
    setState(null);
  };

  return [state, setValue, removeValue];
};
