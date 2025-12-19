import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}
export default function Image({ src, alt, className, onClick }: ImageProps) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      wrapperClassName={className}
      onClick={onClick}
      effect="blur"
    />
  );
}
