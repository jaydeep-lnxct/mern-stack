import React from 'react'

import { FormGroup, FormControl, Input, FormLabel, styled, Button } from '@mui/material';
import { useState } from 'react';
import addUser from '../../service/api';



const container = styled(FormGroup)`
width:50%;
margin: auto;
display: flex;
`

const AddUser = () => {


  const defauultUserDetails = {
    userName: '',
    email: '',
    password: ''
  };

  const [userDetails,setUserDetails] = useState(defauultUserDetails);
  const onChangeValue = (event) => {
    console.log(event.target.value)
    setUserDetails({...userDetails, [event.target.name]:event.target.value});
  };


  const addUserHander = () => {
    addUser(userDetails);
  };

    return (

        <FormGroup style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto' }}>
            <FormControl>
                <FormLabel>UserName</FormLabel>
                <Input onChange={(e) => onChangeValue(e)} name="userName" />
            </FormControl>

            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={(e) => onChangeValue(e)} name="email" />
            </FormControl>

            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input onChange={(e) => onChangeValue(e)} name="password" />
            </FormControl>
            <Button variant="contained" onClick={()=> addUserHander()}>Contained</Button>
        </FormGroup>
    )
}

export default AddUser