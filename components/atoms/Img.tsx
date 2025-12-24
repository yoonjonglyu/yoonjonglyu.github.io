import { type FC, useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { isUndefined } from 'isa-util';

export interface ImgProps extends ImageProps {
  noImage?: string;
}

const Img: FC<ImgProps> = (props) => {
  const { noImage, src, alt, onError, ...Iprops } = props;
  const [iSrc, setISrc] = useState(src);

  const handleError = (e) => {
    setISrc(noImage);
    if (!isUndefined(onError)) onError(e);
  };

  return <Image src={iSrc} alt={alt} {...Iprops} onError={handleError} />;
};

export default Img;
