"use client";
import { useEffect, useState } from "react";
import Loading from "../loading";

type DelayProps = {
  children: React.ReactNode;
};

const DelayedRender = ({ children }: DelayProps) => {
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
