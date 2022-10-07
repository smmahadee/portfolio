import Image from 'next/image';
import { TECKSTACK } from '../../data/techstack';

export default function TeckStack({position = 'center'}) {
  return (
    <section className='text-slate-500'>
      <h2  className={`font-bold text-5xl text-${position} mb-2 tracking-tight`}>
        My Tech Stack
      </h2>
      <p className={`text-${position} text-xl mb-24`}>
        Technologies I’ve been working with recently
      </p>

      <div className='grid grid-cols-6 gap-12 gap-y-20 mb-24'>
        {TECKSTACK.map((tech, i) => (
          <div className={`text-${position}`} key={i}>
            <Image src={tech.img} alt='' width={70} height={70} />
            <p className='text-sm font-bold'>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
