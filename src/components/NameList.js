import React from 'react'
import Person from './Person';

function NameList() {
  const people = [
    {name: 'Shan', age: 36},
    {name: 'Kamal', age: 29},
    {name: 'Saman', age: 40}
  ];
  return (
    <div>
      {people.map( (person, index) => <Person key={index} person={person} />)}
    </div>
  )
}

export default NameList
