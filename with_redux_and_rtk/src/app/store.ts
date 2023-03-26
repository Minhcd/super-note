import { configureStore } from '@reduxjs/toolkit'
import noteListReducer from '../features/note/noteListSlice'

export const store = configureStore({
  reducer: {
    noteList: noteListReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
