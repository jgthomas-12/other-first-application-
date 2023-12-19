import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header"
import User from "./User"

// JSX syntax - render is a JSX method
// JSX is syntax extension for JavaScript that looks similar to HTML - easier way to create React elements
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // the JSX syntax that's being referred to is between the <h1></h1> tags
//   // this is also the way to style inline, internal styling is below and seems to be preferred
//   <div style={{ background: "purple", height: "100vh", width: "100%" }}>
//     <h1 style={{ color: "orange" }}>Hello world, fuck yeahr</h1>
//   </div>
// );

// internal styling

const firstvariable = "Expert";
const secondvariable = "Developer";

const main = {
  background: "#1d1160",
  height: "100vh",
  width: "100%"
};

const text = {
  color: "#FEBE10"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div style={main}>
      <h1 style={text}>Yo, this is kinda cool ya {firstvariable} donkey {secondvariable} </h1>
      <h1 style={text}>Yo, this is kinda cool ya {firstvariable + " " + secondvariable} donkey </h1>
      <h1 style={text}>{`This ${firstvariable} ${secondvariable} gets very confusing with his language sometimes`}</h1>
      <Header />
      <Header />
      <User name="Joker" expertise="not fluid thought process, that's for sure"/>
      <User name="Johanna" expertise="being Swedish"/>
      <User name="Conan" expertise="to crush his enemies and see them driven before him"/>
    </div>
  </>
);


// React.createElement is a JavaScript function provided by React to create virtual DOM elements
// root.render(
//   /*#__PURE__*/ React.createElement('h1', null, "Hello World Again"),
//   document.getElementById("root")
// );
