import React, { useContext } from "react";
import { GlobalAppContext } from "./hooks/useGlobalAppContext";
import { Message } from "./hooks/Message";

const ButtonContainer = () => {
  const { toggle, setToggle, appname, data } = useContext(GlobalAppContext);
  const { id, name } = data;

  return (
    <>
      <h1>
        {id}:{name}
      </h1>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        On/Off
      </button>
      <Message/>
    </>
  );
};

export default ButtonContainer;
