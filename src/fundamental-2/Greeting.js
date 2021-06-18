import React, {useState} from 'react';
import Button from './Button'

const Greeting = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'john'},
    {id: 2, name: 'steve'},
    {id: 3, name: 'max'},
    {id: 4, name: 'webber'},
  ])

  const onAddUser = () => {
    users.push({id: 5, name: 'alex'})
    setUsers([...users])
  }

  return (
    <>
      <h1>Greeting React</h1>
      {users.map((val, key) => {
        return (
          <h2 key={key}>Hello {val.name}</h2>
        )
      })}
      <Button onAddUser={onAddUser}>Add User</Button>
    </>
  )
}

export default Greeting