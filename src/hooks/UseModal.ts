import { useState } from "react";

export const useModal = () => {
  const [isVisible, setIsShowing] = useState<boolean>(false);

  function toggle() {
    setIsShowing(!isVisible);
  }

  return {
    isVisible,
    toggle,
  };
};
