export const useLocalStorage = (
  storageKey: LocalStorageKeys
): [
  string | null, //
  (arg: string) => void,
  () => void
] => {
  const value = localStorage.getItem(storageKey);
  const setValue = (newValue: string) =>
    localStorage.setItem(storageKey, newValue);
  const removeValue = () => localStorage.removeItem(storageKey);

  return [value, setValue, removeValue];
};

export type LocalStorageKeys = "roomId" | "userId" | "username";
