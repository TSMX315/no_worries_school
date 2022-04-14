import { createContext, useReducer } from 'react'

export const SignInContext = createContext({});

export const UPDATE_SIGN = "UPDATE_SIGN";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SIGN:
      return action.isSign
    default:
      return state
  }
}

export const SignIn = props => {
  const [isSign, dispatch] = useReducer(reducer, false)
  return (
    <SignInContext.Provider value={{ isSign, dispatch }} >
      {props.children}
    </SignInContext.Provider>
  )
}