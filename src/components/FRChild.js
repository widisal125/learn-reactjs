import React, { Component } from 'react'

const FRChild = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  )
});

export default FRChild