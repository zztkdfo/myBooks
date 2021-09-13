import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookReqType, RootState } from '../types'
import { goBack } from 'connected-react-router'
import Add from '../components/Add'
import { logout as logoutSagaStart } from '../redux/modules/auth'
import { addBook as addBookSagaStart } from '../redux/modules/books'

export default function AddContainer() {
  const dispatch = useDispatch()

  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  )

  const logout = useCallback(() => {
    dispatch(logoutSagaStart())
  }, [dispatch])

  const back = useCallback(() => {
    dispatch(goBack())
  }, [dispatch])

  const add = useCallback(
    (book: BookReqType) => {
      dispatch(addBookSagaStart(book))
    },
    [dispatch]
  )

  return <Add loading={loading} back={back} logout={logout} add={add} />
}
