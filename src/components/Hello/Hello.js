import React from "react";

export default function Hello(props) {
  return props.name ? <h1>Hello {props.name}!</h1> : <h1>Hello stranger!</h1>
}