import React from "react";
import store from "../store";
import _ from "lodash";

import Sidebar from "../components/SideBar";
import Main from "../components/Main";
import "../styles.css";

export default function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}
