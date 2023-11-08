import { AiOutlineSearch } from 'react-icons/ai'
import { v4 as uuid } from 'uuid'
import useGlobalContext from '../../customHooks/useGlobalContext'

const SearchSuggestions = () => {
  const suggestions = ['cat', 'pizza', 'book', 'art', 'egypt']

  const {setSearchTerm} = useGlobalContext()

  return (
    <div className="suggestions">
      {suggestions.map((text) => {
        return (
          <button className="suggestions-btn" key={uuid()} onClick={()=>{setSearchTerm(text)}}>
            <AiOutlineSearch />
            <span>{text}</span>
          </button>
        )
      })}
    </div>
  )
}
export default SearchSuggestions
