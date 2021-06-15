import React from 'react';

const User = (props) => {
  return <div>Hi!, I am {props.name}, and {props.age} years old.</div>
}

const App = () => {
  const profiles = [
    {name : "Taro", age : 10},
    {name : "Hanako", age : 20},
    {name : "noage"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
        return <User name = {profile.name} age = {profile.age} key = {index}/>})
      }
    </div>
  )
}

User.defaultProps = {
  age: 1
}

export default App;
