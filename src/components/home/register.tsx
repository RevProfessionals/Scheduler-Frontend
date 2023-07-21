import axios from 'axios';
import React, { useState } from 'react'

const register: React.FC<any> = () => {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username,setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  

const handleRegister = (e:any) => {
  
  const userData = {
    firstName,
    lastName,
    email,
    username,
    password,
  };

  axios
  .post("PLACE HOLDER, userData)
  .then((response: { data: any; }) => {
    console.log('Response', response.data);
  }) 
  .catch((error: any) => {
    console.log(error);
  })
}



  return (
    <div>
        <h1>User Registration</h1>
        <div>
          <label>First Name</label>
        </div>




















    </div>
  )
}

export default register