import { useEffect } from 'react'
import useGlobalContext from '../../customHooks/useGlobalContext'
import { useQuery } from '@tanstack/react-query'
import customFetch from '../../axios/customFetch'
import ImageComponent from './ImageComponent'

const ImagesContainer = () => {
  const { searchTerm } = useGlobalContext()

  useEffect(() => {
    return
  }, [])
  const url = `/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
  }&query=${searchTerm}&per_page=100`
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: () => customFetch(url),
  })

  if (response.isLoading) {
    return (
      <main className="images-container">
        <div className="loading"></div>
      </main>
    )
  }
  if (response.isError) {
    return (
      <main className="images-container">
        <div className="error">There is an error...</div>
      </main>
    )
  }
  if (response.data.data.results.length < 1) {
    return (
      <main className="images-container">Sorry, There are no Results...</main>
    )
  }

  const data = response.data.data.results
  return (
    <main className="images-container" id="images-container">
      {data.map((img) => {
        return <ImageComponent image={img} key={img.id}/>
      })}
    </main>
  )
}
export default ImagesContainer
