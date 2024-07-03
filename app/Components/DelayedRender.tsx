"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";
const DelayedRender = ({ children }: { children: React.ReactNode }) => {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChildren(true);
    }, 2000); // Delay of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return showChildren ? <>{children}</> : <Loading />;
};

export default DelayedRender;
