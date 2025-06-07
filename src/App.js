import React, { createContext, useState } from "react";
import ImageContainer from "./ImageContainer";
export const GlobalAppContext = createContext();
const App = () => {
  const [toggle, setToggle] = useState(true);
  const store = {
    data:{
      id:1,
      name:"Srinivasarao"
    },
    toggle,
    setToggle,
    appname: "Global App Context",
  };
  return (
    <>
      <GlobalAppContext.Provider value={store}>
        <ImageContainer />
      </GlobalAppContext.Provider>
    </>
  );
};

export default App;
