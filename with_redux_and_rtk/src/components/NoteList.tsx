import Note from './Note'
import AddNote from './AddNote'
import { selectAllNotes } from '../features/note/noteListSlice'
import { useAppSelector } from '../app/hook'

interface Note {
  id: string
  text: string
  date: string
}

const NoteList = () => {
  const notes = useAppSelector(selectAllNotes)

  return (
    <div className="grid gap-4 grid-cols-fill-250">
      {notes.map((note: Note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>
  )
}

export default NoteList
