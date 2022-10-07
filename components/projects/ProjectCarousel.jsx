import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function ProjectCarousel({ thumb }) {
  return (
    <div className='h-60'>
      <Carousel indicators={false} slide={false}>
        {thumb.map((img, i) => (
          <img
            key={i}
            className='h-full w-full'
            src={img}
            alt='...'
          />
        ))}
      </Carousel>
    </div>
  );
}
