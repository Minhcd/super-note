import { useState } from 'react'
import { useAppDispatch } from '../app/hook'
import { addNote } from '../features/note/noteListSlice'

const AddNote = () => {
  const [noteText, setNoteText] = useState('')
  const characterLimit = 200
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value)
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      dispatch(
        addNote({
          text: noteText,
        })
      )

      setNoteText('')
    }
  }

  return (
    <div className="rounded-[10px] p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap bg-[#67d7cc]">
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="flex items-center justify-between">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button
          className="bg-[#e1e1e1] border-none rounded-[15px] p-[5px_10px_5px_10px] hover:cursor-pointer hover:bg-[#ededed]"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default AddNote
