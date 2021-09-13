import React from 'react'
import AddContainer from '../containers/AddContainer'
import useToken from '../hooks/useToken'
import { Redirect } from 'react-router'

export default function Add() {
  const token = useToken()

  if (token === null) {
    return <Redirect to="/signin" />
  }
  return <AddContainer />
}
