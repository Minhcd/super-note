import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface Note {
  id: string
  text: string
  date: string
}

interface NoteState {
  data: Note[]
  searchText: string
  status: string
  error: any
}

const noteListState: NoteState = {
  data: JSON.parse(localStorage.getItem('react-notes-app-data')!),
  searchText: '',
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

const updateLocalStorage = (data: Note[]) => {
  localStorage.setItem('react-notes-app-data', JSON.stringify(data))
}

const noteListSlice = createSlice({
  name: 'noteList',
  initialState: noteListState,
  reducers: {
    addNote: (state, action) => {
      state.data = [
        {
          id: nanoid(),
          text: action.payload.text,
          date: new Date().toISOString(),
        },
        ...state.data,
      ]
      updateLocalStorage(state.data)
    },
    deleteNote: (state, action) => {
      state.data = state.data.filter((note) => note.id !== action.payload.id)
      updateLocalStorage(state.data)
    },
    searchNotes: (state, action) => {
      state.searchText = action.payload.text
    },
  },
})

export const selectAllNotes = (state: RootState) => {
  const {
    noteList: { data, searchText },
  } = state

  return data.filter((note) => note.text.toLowerCase().includes(searchText))
}

export const { addNote, deleteNote, searchNotes } = noteListSlice.actions

export default noteListSlice.reducer
