import { Image } from '@heroui/image';

const CustomImage = ({ src, alt, width, height, fallbackSrc }) => {
  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
        fallbackSrc={fallbackSrc}
        isBlurred={false}
        isZoomed={true}
        removeWrapper={false}
        disableSkeleton={false}
        classNames={{
          img: "object-cover w-full h-full transition-transform duration-500 transform hover:scale-105",
          wrapper: "block relative",
          zoomedWrapper: "inset-0 z-10",
          blurredImg: "inset-0 z-0 blur-sm opacity-75"
        }}
        onLoad={(event) => console.log('Image loaded')}
        onError={() => console.error('Image failed to load')}
      />
    </div>
  );
};

export default CustomImage;



