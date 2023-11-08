import { FiDownload } from 'react-icons/fi'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { saveAs } from 'file-saver'

const ImageComponent = ({ image }) => {
  if (!(image.urls.regular || image.links.download)) {
    return
  }
  const handleDownload = () => {
    saveAs(image.urls.regular, `${image.description}.jpg`)
  }
  return (
    <div>
      <LazyLoadImage
        src={image.urls.regular}
        alt={image.alt_description}
        loading="lazy"
        effect="blur"
      />
      <button onClick={handleDownload} className="download-btn btn" target="_blank">
        <FiDownload />
      </button>
    </div>
  )
}
export default ImageComponent
