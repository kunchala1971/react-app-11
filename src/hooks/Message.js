import React, { useContext } from "react";
import { GlobalAppContext } from "./useGlobalAppContext";

export const Message = () => {
  const { appname } = useContext(GlobalAppContext);
  return <div>{appname}</div>;
};
