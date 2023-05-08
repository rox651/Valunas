import Image, { StaticImageData } from 'next/image'

interface imageNail {
  name: string
  src: StaticImageData
}

const MasonryImage = ({ image, index }: { image: imageNail; index: number }) => {
  return (
    <Image
      className="break-inside-avoid object-cover"
      placeholder="blur"
      src={image.src}
      alt={image.name}
      title={image.name}
      width={700}
      height={900}
      loading="lazy"
    />
  )
}

export default MasonryImage
