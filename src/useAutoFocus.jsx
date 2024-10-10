import { useEffect } from "react";

export function useAutoFocus(inputRef) {
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return inputRef;
}
