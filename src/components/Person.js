import React from 'react'

function Person({person}) {
  return (
    <div>
      <p>I am {person.name}. I am {person.age} years old.</p>
    </div>
  )
}

export default Person
