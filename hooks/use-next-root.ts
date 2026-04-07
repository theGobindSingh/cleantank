import React, { useRef } from "react";

const useNextRoot = () => {
  const nextRootRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    nextRootRef.current = document.querySelector<HTMLDivElement>("#__next");
  }, []);

  return nextRootRef;
};

export default useNextRoot;
