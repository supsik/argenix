import styles from './CustomImage.module.scss';
import Image  from 'next/image';

interface Props {
  imageSrc: string,
};

export default function CustomImage({imageSrc}: Props) {
  return <div className={`image-wr ${styles.imageWr}`}>
    <Image
      width={1920}
      height={1080}
      src={imageSrc}
      alt={imageSrc}
    />
  </div>
}