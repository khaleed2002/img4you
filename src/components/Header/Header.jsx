import HeaderBackground from './HeaderBackground'
import SearchForm from './SearchForm'
import SearchSuggestions from './SearchSuggestions'
const Header = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  //   pauseOnHover: true,
  // }
  // const imgCategoriesUrl = [
  //   'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1522509585149-c9cd39d1ff08?auto=format&fit=crop&q=80&w=1497&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1606787364410-947e10173148?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // ]
  // return (
  //   <div className="silder-container">
  //     <Slider {...settings}>
  //       {imgCategoriesUrl.map((url) => {
  //         return <img src={url} alt="" />
  //       })}
  //     </Slider>
  //   </div>
  // )

  return (
    <header>
      <HeaderBackground />
      <div className="header-content">
        <h1>IMG4YOU : Get The Most Common JPG Images</h1>
        <SearchForm />
        <SearchSuggestions />
      </div>
    </header>
  )
}
export default Header
