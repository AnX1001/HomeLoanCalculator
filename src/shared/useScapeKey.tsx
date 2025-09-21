import { useEffect } from "react";

function useEscapeKey(callback: () => void, isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [callback, isOpen]);
}

export default useEscapeKey;
