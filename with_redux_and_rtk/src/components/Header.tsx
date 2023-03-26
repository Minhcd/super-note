interface Props {
  handleToggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ handleToggleDarkMode }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="dark:text-white mt-5 mb-5">Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="bg-[#e1e1e1] border-none rounded-[15px] p-[5px_10px_5px_10px] hover:cursor-pointer hover:bg-[#ededed]"
      >
        Toggle Mode
      </button>
    </div>
  )
}

export default Header
