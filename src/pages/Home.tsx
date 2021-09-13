import useToken from '../hooks/useToken'
import { Redirect } from 'react-router'
import ListContainer from '../containers/ListContainer'

export default function Home() {
  const token = useToken()
  if (token === null) {
    return <Redirect to="/signin" />
  }

  return <ListContainer />
}
