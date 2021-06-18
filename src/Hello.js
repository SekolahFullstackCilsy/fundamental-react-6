import React from 'react';

// function Hello() {
//   return (
//     <h1>Hello Component 1</h1>
//   )
// }

// const Hello = () => {
//   return (
//     <h1>Hello Component 2</h1>
//   )
// }

export default function Hello(props) {
  const { data } = props
  // console.log(props)
  return (
    <div style={{
      width: '200px',
      height: '200px',
      background: 'red',
      margin: '5px'
    }}>
      <h2>Hello {data.name}, Age {data.age}</h2>
    </div>
  )
}

// export default Hello