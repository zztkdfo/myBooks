import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../types'
import { Redirect } from 'react-router';
import { logout } from '../redux/modules/auth';

export default function Home() {
  const token = useSelector<RootState, string | null>((state)=>state.auth.token)
  const dispatch = useDispatch()
  if(token === null){
    return <Redirect to="/signin" />
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={click}>LOGOUT</button>
    </div>
  )
  
  function click() {
    dispatch(logout())
  }
}