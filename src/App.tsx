import React, { useState } from 'react';
import User,{UserInt} from './components/User'
import './App.css';

function App() {

  interface AlluserInt {
    currentUser: UserInt
    allUsers: Array<UserInt>
  }

  const [userState, setUserState] = useState<AlluserInt>({
    currentUser: {
      name: "",
      age: "",
      job: "",
      deleteUser: () => {}
    },
    allUsers: []
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value)
    setUserState({
      ...userState,
      currentUser: {
        ...userState.currentUser,
        [e.target.name]: e.target.value
      }
    })
  }
  
  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault()

    setUserState({
      currentUser: {
        name: "",
        age: "",
        job: "",
        deleteUser: () => {}
      },
      allUsers: [
        ...userState.allUsers,
        userState.currentUser
      ]
    })
  }

  const deleteHandler = (index: number): void => {
    const filterUsers = userState.allUsers.filter((user, i) => {
      return index !== i
    })
    
    setUserState({
      ...userState,
      allUsers: filterUsers
    })
  }

  const allUsers = userState.allUsers.map((user, i) => {
    return (
      // <div key={i}>
      //   <h2>{user.name}</h2>
      //   <h2>{user.age}</h2>
      //   <h2>{user.job}</h2>
      //   <button onClick={() => deleteHandler(i)}>Delete User</button>
      // </div>
      <User
        key={i}
        name={user.name}
        age={user.age}
        job={user.job}
        deleteUser={() => deleteHandler(i)}
      />
    )
  })

  return (
    <div className="container">
      <h1>React with Typescript</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="userName">Name:</label>
        <input
          id="userName"
          required
          type="text"
          name="name"
          value={userState.currentUser.name}
          onChange={onChangeHandler}
        />

        <label htmlFor="userAge">Age:</label>
        <input
          id="userAge"
          type="number"
          name="age"
          value={userState.currentUser.age}
          onChange={onChangeHandler}
        />

        <label htmlFor="userJob">Job:</label>
        <input
          id="userJob"
          type="text"
          name="job"
          value={userState.currentUser.job}
          onChange={onChangeHandler}
        />

        <button type="submit">Add user</button>
      </form>
      {allUsers}
    </div>
  );
}

export default App;
