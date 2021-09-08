import { createActions, handleActions, Action } from "redux-actions"
import {call, takeEvery, select, put} from 'redux-saga/effects'
import { AuthState, LoginReqType } from "../../types"
import UserService from '../../services/UserService';
import TokenService from '../../services/TokenService';
import { push } from "connected-react-router";

const initAuthState: AuthState = {
  token: null,
  loading: false,
  error: null
}

const prefix = 'my-books/auth'

export const { pending, success, fail } = createActions("PENDING", "SUCCESS", "FAIL", { prefix })

const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null
    }),

    SUCCESS: (state, action) => ({
      token: action.payload,
      error: null,
      loading: false
    }),

    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  },
  initAuthState,
  { prefix }
)

export default reducer

// saga
export const {login, logout} = createActions("LOGIN", "LOGOUT", { prefix })

function* loginSaga(action: Action<LoginReqType>) {
  try{
    yield put(pending())
    const token: string = yield call(UserService.login, action.payload)
    // localstorage
    TokenService.set(token)
    yield put(success(token))
    // push
    yield put(push('/'))

  } catch(e: any){
    yield put(fail(new Error(e?.response?.data?.error || "UNKNOWN_ERROR")))
  }
} 
function* logoutSaga() {
  try{
    yield put(pending())
    const token: string = yield select((state) => state.auth.token)
    yield call(UserService.logout, token)
    TokenService.set(token)
  } catch(e: any){
  } finally {
    TokenService.remove();
    yield put(success(null))
  }
}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga)
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga)
}