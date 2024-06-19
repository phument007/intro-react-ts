import { CSSProperties } from "react";
import "./style.css";
const Css = () => {
    let styleCss:CSSProperties = {
        backgroundColor : "blue",
        color: 'white',
    }
    return (
        <>
          <h1 style={{ backgroundColor: "red" }}>Hello Css</h1>
          <h1 style={styleCss}>Internal Style Css</h1>
          <h1 id="external-css">External Style Css</h1>
        </>
    );
}

export default Css