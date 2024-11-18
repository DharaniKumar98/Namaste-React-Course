import React, { useEffect, useState } from 'react'

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {

      return () => {
        console.log("Component will be unmounted!");
      }
    })
  return (
    <div className='user-card'>
        <h1>count : {count}</h1>
        <h1>count2 : {count2}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: India</h3>
        <h3>Contact: @GDharaniKumar4u</h3>
    </div>
  )
}

export default User;