import React, {useState} from 'react';

const Form = () => {
  const [persons, setPersons] = useState([
    {id: 1, name: 'john', age: 23},
    {id: 2, name: 'steve', age: 24},
    {id: 3, name: 'max', age: 22},
    {id: 4, name: 'webber', age: 21},
  ])

  const [person, setPerson] = useState({
    name: '',
    age: ''
  })

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

  const onChangeInput = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }

  const addPerson = () => {
    setPersons([...persons, person])
  }

  return (
    <>
      <div>
        {persons.map((val, key) => {
          return (
            <h4 key={key}>Name: {val.name}, Age: {val.age}</h4>
          )
        })}
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={onChangeInput}
          value={person.name}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          onChange={onChangeInput}
          value={person.age}
        />
      </div>
      <button onClick={addPerson}>Add Person</button>
    </>
  )
}

export default Form