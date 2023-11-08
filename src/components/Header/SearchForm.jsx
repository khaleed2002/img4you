import { AiOutlineSearch } from 'react-icons/ai'
import useGlobalContext from '../../customHooks/useGlobalContext'
import { useEffect, useState } from 'react'

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext()
  const [insideSearchTerm, setInsideSearchTerm] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.elements.search.value)
  }

  useEffect(() => {
    setInsideSearchTerm(searchTerm)
  }, [searchTerm])

  return (
    <form onSubmit={handleFormSubmit} className="search-form">
      <input
        type="text"
        name="search"
        id="search"
        className="search-input"
        autoFocus
        value={insideSearchTerm}
        onChange={(e) => setInsideSearchTerm(e.target.value)}
      />
      <button type="submit" className="search-btn">
        <AiOutlineSearch />
      </button>
    </form>
  )
}
export default SearchForm
