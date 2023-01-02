import { useState } from "react";

export type LocalStorageKeys = "roomId" | "userId" | "username";

export const useLocalStorage = (
  storageKey: LocalStorageKeys
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

// export const useStorage = (
//   storageKey: LocalStorageKeys,
//   type: "local" | "session" = "local"
// ): [
//   string | null, //
//   (arg: string) => void,
//   () => void
// ] => {
//   const storage = { local: localStorage, session: sessionStorage };
//   const value = storage[type].getItem(storageKey);
//   const [state, setState] = useState<string | null>(value);

//   const setValue = (newValue: string) => {
//     storage[type].setItem(storageKey, newValue);
//     setState(newValue);
//   };
//   const removeValue = () => {
//     storage[type].removeItem(storageKey);
//     setState(null);
//   };

//   return [state, setValue, removeValue];
// };
