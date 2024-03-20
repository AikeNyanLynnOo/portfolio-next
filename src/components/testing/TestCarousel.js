// import { Carousel } from "@material-tailwind/react";
import { Carousel } from 'flowbite-react';
import Image from "next/image";

export const CarouselDefault = () => {
  return (
    <div>
    <Carousel>
        
      <Image
        width={100}
        height={100}
        src="/images/projects/enable_cms/products.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
        width={100}
        height={100}
        src="/images/projects/enable_cms/products.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image
        width={100}
        height={100}
        src="/images/projects/enable_cms/products.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>

    </div>
  );
};
