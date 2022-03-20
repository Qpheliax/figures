import React from "react";
import Header from "./particles/Header";
import Main from "./Main";
import Footer from "./particles/Footer";
import Filter from "./particles/Filter";
import Doodle from "./particles/Doodle";
import "../styles/main.scss";

import { array } from "./array/Array";

class App extends React.Component {
  render() {
    const figures = array;
    return (
      <>
        <Header />
        <Main figures={figures} click={this.increment} />
        <Footer />
        <Filter />
        <Doodle />
      </>
    );
  }
}

export default App;
