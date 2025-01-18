const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", { id: "heading" }, "hii guys")
    )
);

const root = ReactDOM.createRoot(document.getElementById("Root"));  // ✅ Correct
console.log(parent);
root.render(parent);
