import { type FC, useState, useEffect, type SyntheticEvent } from 'react';
import Image, { type ImageProps } from 'next/image';
import { isUndefined } from 'isa-util';

export interface ImgProps extends ImageProps {
  noImage?: string;
}

const Img: FC<ImgProps> = (props) => {
  const { noImage, src, alt, onError, ...Iprops } = props;
  const [iSrc, setISrc] = useState(src);

  useEffect(() => {
    setISrc(src);
  }, [src]);

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (noImage) {
      setISrc(noImage);
    }
    if (!isUndefined(onError)) onError(e);
  };

  return <Image src={iSrc} alt={alt} {...Iprops} onError={handleError} />;
};

export default Img;
