import { MdDeleteForever } from 'react-icons/md'
import { useAppDispatch } from '../app/hook'
import { deleteNote } from '../features/note/noteListSlice'

interface Props {
  id: string
  text: string
  date: string
}

const Note = ({ id, text, date }: Props) => {
  const dispatch = useAppDispatch()
  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote({ id }))
  }

  return (
    <div className="rounded-[10px] p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap bg-[#fef68a]">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="cursor-pointer"
          size="21px"
        />
      </div>
    </div>
  )
}

export default Note
