import React, { useContext } from "react";
import { GlobalAppContext } from "./hooks/useGlobalAppContext";
import ButtonContainer from './ButtonContainer'
const ImageContainer = () => {
  const { toggle, appname } = useContext(GlobalAppContext);
  return (
    <>
      <h1>{appname}</h1>
      {toggle && <img src="assets/logo192.png" alt="logo" />}
      <ButtonContainer />
    </>
  );
};

export default ImageContainer;
