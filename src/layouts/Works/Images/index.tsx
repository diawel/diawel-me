import * as styles from './index.css'
import { StrictImage } from '@/utils/microcmsResources'

export type ImagesProps = {
  images: StrictImage[]
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  if (images.length === 0) return <></>
  let imagesRatio = 0
  images.forEach((image) => {
    imagesRatio += image.width / image.height
  })

  return (
    <div className={styles.container}>
      <div
        className={styles.images}
        style={{
          aspectRatio: imagesRatio,
        }}
      >
        {images.map((image) => (
          <img
            key={image.url}
            src={image.url}
            alt={image.alt}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Images
