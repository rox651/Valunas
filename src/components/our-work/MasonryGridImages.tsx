import { nailsImages } from '@/utils/constants/'
import MasonryImage from './MasonryImage'

const MasonryGridImages = () => {
  return (
    <div className=" columns-2 gap-3 space-y-3 sm:columns-3  ">
      {nailsImages.map((image, index) => (
        <MasonryImage image={image} index={index} key={`${image.name} - Image ${index}`} />
      ))}
    </div>
  )
}

export default MasonryGridImages
