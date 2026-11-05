import { useState } from 'react';
import styles from './CustomImage.module.scss';
import Image  from 'next/image';
import Loader from '@/components/Loader/Loader';

interface Props {
  imageSrc: string,
};

export default function CustomImage({imageSrc}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  return <div className={`image-wr ${styles.imageWr}`}>
    {isLoading && <Loader />}
    <Image
      width={1920}
      height={1080}
      src={imageSrc}
      alt={imageSrc}
      onLoad={() => setIsLoading(false)}
    />
  </div>
}