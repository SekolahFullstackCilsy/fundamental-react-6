import React, {useState} from 'react';
import Hello from './Hello'

const BelajarState = () => {
  const [greeting, setGreeting] = useState('Hello')
  const [users, setUsers] = useState([
    {name: 'John', age: 23},
    {name: 'Daniel', age: 21},
    {name: 'Steven', age: 20},
  ])
  const [nama, setNama] = useState('')

  const ubahNama = () => {
    setGreeting(nama)
  }
  return (
    <>
      <h1>Belajar State</h1>
      <h3>ini State : {greeting}</h3>
      <div>
        <label htmlFor="name">Nama</label>
        <input
          id="name"
          type="text"
          onChange={e => setNama(e.target.value)}
          value={nama}
        />
      </div>
      <br />
      <button onClick={ubahNama}>Ubah nama</button>
      <br />
      <div style={{ display: 'flex'}}>
        {users.map((val, key) => {
          return (
            <Hello key={key} data={val} />
            )
        })}
      </div>
    </>
  )
}

export default BelajarState