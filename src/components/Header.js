import { useContext } from "react";
import { ThemeContext } from "../App";
import { LogoIcon, MoonIcon, SunIcon, PrometheusIcon } from "./assets/icons";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
            <img src={require('data:image/png;base64,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')} />
            <span>Prometheus</span>
          </div>
          <button onClick={() => setIsDark(!isDark)} className="icon">{isDark ? <MoonIcon /> : <SunIcon />}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
