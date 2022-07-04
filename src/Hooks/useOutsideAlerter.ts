import { useEffect, useState } from "react";

function useOutsideAlerter(ref: any, setEvent: any) {
  const [outside, setOutside] = useState(true);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setEvent(false);
        setOutside(true);
      } else {
        setOutside(false);
      }
    }
    document.addEventListener("mouseover", handleClickOutside);
    return () => {
      document.removeEventListener("mouseover", handleClickOutside);
    };
  }, [ref]);
  return outside;
}

export { useOutsideAlerter };
