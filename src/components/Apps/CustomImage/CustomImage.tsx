import { useState } from 'react';
import Loader       from '@/components/Loader/Loader';
import styles       from './CustomImage.module.scss';
import Image        from 'next/image';

interface Props {
  data: string,
};

export default function CustomImage({ data: imageSrc }: Props) {
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