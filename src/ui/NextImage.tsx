import { chakra, ChakraProps } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';

type NextImageProps = ChakraProps & {
  alt: string;
} & (
    | { width: string | number; height: string | number }
    | { layout: 'fill'; width?: string | number; height?: string | number }
  ) &
  ImageProps;

// enum IMAGE_LOADING_OPTION {
//   LOADING="loading",
//   COMPLETE="complete",
// }

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
  src,
  height,
  alt,
  width,
  ...rest
}: NextImageProps) {
  // const [status, setStatus] = React.useState(
  //   IMAGE_LOADING_OPTION.LOADING
  // );
  // const handleLoadingComplete = () => setStatus(IMAGE_LOADING_OPTION.COMPLETE);

  return (
    <chakra.figure width={width}>
      <Image
        alt={alt}
        height={height}
        // onLoadingComplete={handleLoadingComplete}
        src={src}
        width={width}
        {...rest}
      />
    </chakra.figure>
  );
}
