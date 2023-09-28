import NextImage from 'next/image';

export type MdxImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  alt: string;
};

export function MdxImage({ src, alt }: MdxImageProps) {
  let widthFromSrc, heightFromSrc;
  const url = new URL(src, 'https://maxleiter.com');
  const widthParam = url.searchParams.get('w') ?? url.searchParams.get('width');
  const heightParam =
    url.searchParams.get('h') ?? url.searchParams.get('height');
  if (widthParam !== null) {
    widthFromSrc = parseInt(widthParam);
  }
  if (heightParam !== null) {
    heightFromSrc = parseInt(heightParam);
  }

  const imageProps = {
    src,
    alt,
    // tweak these to your liking
    height: heightFromSrc ?? 450,
    width: widthFromSrc ?? 550,
  };

  return <NextImage {...imageProps} />;
}
