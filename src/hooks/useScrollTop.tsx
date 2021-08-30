// useScrollTop.ts
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

/*
 * Registers a history listener on mount which
 * scrolls to the top of the page on route change
 */
export const useScrollTop = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return unlisten;
  }, [history]);
};
