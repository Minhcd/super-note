import { MdSearch } from 'react-icons/md'
import { useAppDispatch } from '../app/hook'
import { searchNotes } from '../features/note/noteListSlice'

const Search = () => {
  const dispatch = useAppDispatch()
  const handleSearchText = (value: string) => {
    dispatch(searchNotes({ text: value }))
  }

  return (
    <div className="flex items-center rounded-[10px] p-[5px] mb-[24px] bg-slate-200">
      <MdSearch className="search-icons" size="21px" />
      <input
        onChange={(event) => handleSearchText(event.target.value)}
        type="text"
        placeholder="Type to search..."
        className="bg-slate-200 w-full border-none focus:outline-none"
      />
    </div>
  )
}

export default Search
