import { configureStore } from '@reduxjs/toolkit'
import useReducer  from './user/userSlice'


export const store = configureStore({
  reducer: {
    user: useReducer
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch