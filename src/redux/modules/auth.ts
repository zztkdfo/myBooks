import { createActions, handleActions } from "redux-actions"

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

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
export function* authSaga() {
  
}