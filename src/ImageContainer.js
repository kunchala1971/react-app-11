import React, { useContext } from "react";
import { GlobalAppContext } from "./App";
import ButtonContainer from './ButtonContainer'
const ImageContainer = () => {
  const { toggle, appname } = useContext(GlobalAppContext);
  return (
    <>
      <h1>{appname}</h1>
      {toggle && <img src="logo192.png" alt="logo" />}
      <ButtonContainer />
    </>
  );
};

export default ImageContainer;
