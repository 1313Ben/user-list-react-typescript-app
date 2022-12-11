import React, {useState} from 'react';
import './App.css';

function App() {

  interface UserInt {
    name: string,
    age: string,
    job: string
  }

  interface AlluserInt {
    currentUser: UserInt
    allUsers: Array<UserInt>
  }

  const [userState, setUserState] = useState<AlluserInt>({
    currentUser: {
      name: "",
      age: "",
      job:""
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
        job: ""
      },
      allUsers: [
        ...userState.allUsers,
        userState.currentUser
      ]
    })
  }

  const allUsers = userState.allUsers.map((user, i) => {
    return (
      <div key={i}>
        <h2>{user.name}</h2>
        <h2>{user.age}</h2>
        <h2>{ user.job}</h2>
      </div>
    )
  })

  return (
    <div className="container">
      <h1>React with Typescript</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="userName">Name:</label>
        <input
          id="userName"
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
