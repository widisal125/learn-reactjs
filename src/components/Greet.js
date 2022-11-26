import React from 'react';

function Greet (props) {
  console.log(props);
  return (
    <>
    <h1>Hello {props.name}, role is {props.role}</h1>
    {props.children}
    </>
  );
}

export default Greet;