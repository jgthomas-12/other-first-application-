import React from "react";

const text = {
  color: "orange"
};

const text1 = {
  color: "yellow"
};

function User(props) {
  return (
    <>
      <h1 style={ text} >This people is a { props.name }</h1>
      <p style={ text1 }>Their expertise is { props.expertise }</p>
    </>
  )

}

export default User;