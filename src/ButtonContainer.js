import React, { useContext } from "react";
import { GlobalAppContext } from "./App";

const ButtonContainer = () => {
  const { toggle, setToggle, appname, data } = useContext(GlobalAppContext);
  const {id, name} = data;

  return (
    <>
      <h1>{id}:{name}</h1>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        On/Off
      </button>
    </>
  );
};

export default ButtonContainer;
