import { nailsImages } from '@/utils/constants/'
import Image from 'next/image'
const MasonryGridImages = () => {
  return (
    <div className=" columns-2 gap-3 space-y-3 sm:columns-3  ">
      {nailsImages.map((image) => (
        <Image
          className="break-inside-avoid object-cover"
          placeholder="blur"
          src={image.src}
          key={image.name}
          alt={image.name}
          title={image.name}
          width={700}
          height={900}
          loading="lazy"
          layout="responsive"
        />
      ))}
    </div>
  )
}

export default MasonryGridImages
