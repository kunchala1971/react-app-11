import React, { createContext, useState } from "react";
import ImageContainer from "./ImageContainer";
import { GlobalAppContext } from "./hooks/useGlobalAppContext";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const store = {
    data:{
      id:1,
      name:"Srinivasarao"
    },
    toggle,
    setToggle,
    appname: "TELUGU IT TUTORIALS",
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
