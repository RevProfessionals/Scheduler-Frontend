import axios from 'axios';
import React, { useState } from 'react'

const register: React.FC<any> = () => {


  const [user,setUser] = useState({

    password: '',
    firstName: '',
    lastName: '',
    email: '',

});

const handleChange = (e:any) => {
  setUser({...user, [e.target.name]: e.target.value });
}

const registerUser = (e:any) => {
  e.preventDefault();
  axios
    .post('http://', {...user})
    .then((response) =>{
      console.log('Response', response.data );
    })
    .catch((error) => {
      console.log(error);

    })
}






  return (
    <div>register</div>
  )
}

export default register