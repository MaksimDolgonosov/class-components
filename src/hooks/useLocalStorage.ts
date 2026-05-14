import { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';

const useLocalStorage = (
  key: string,
  initialValue: string
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ?? initialValue;
  });

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setValue(item);
    }
  }, [key]);

  const setStoredValue = useCallback<Dispatch<SetStateAction<string>>>(
    (action) => {
      setValue((prev) => {
        const next =
          typeof action === 'function'
            ? (action as (prev: string) => string)(prev)
            : action;
        localStorage.setItem(key, next);
        return next;
      });
    },
    [key]
  );

  return [value, setStoredValue];
};

export default useLocalStorage;
