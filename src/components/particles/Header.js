import React from "react";

import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";
import { ReactComponent as LogoFigures } from "../../assets/logo/Logo_Figures.svg";

const Header = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <header className="header">
      <div className="logo_container" onClick={refreshPage}>
        <LogoFigures />
        <Logo />
      </div>
    </header>
  );
};

export default Header;
