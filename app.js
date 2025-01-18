import React from "react";
import ReactDOM from "react-dom/client"; 
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", { id: "heading" }, "hello Harshit")
    )
);

const root = ReactDOM.createRoot(document.getElementById("Root")); // ✅ Required in React 19
root.render(parent);


