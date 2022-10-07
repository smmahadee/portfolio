import Image from 'next/image';
import GradientText from '../../utils/gradientText';

export default function Hero() {
  return (
    <section className=' py-36 grid grid-cols-2 '>
      <div className='flex flex-col justify-center'>
        <h1 className='capitalize font-bold text-6xl bg-gradient-to-r from-slate-500 to-yellow-100 text-transparent bg-clip-text -mt-3'>
          creative
        </h1>
        <h1 className='-mt-3 font-roboto capitalize font-[700] text-7xl  bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text'>
          Developer.
        </h1>

        <p className='mt-5 text-slate-500 text-lg'>
          Hard-working web developer with a flair for creating elegant solutions
          in the least amount of time. Developed an ecommerce webapp, customer
          web portal, documentary launch website, and donations webapp for a
          local charity.
        </p>
        <div className='flex gap-5 mt-14'>
          <div class='relative group'>
            <div class='absolute -inset-[2px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-md blur-sm opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
            <div class='relative px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-md leading-none flex items-top justify-start space-x-6'>
              <div class='space-y-2'>
                <p class='text-slate-500 font-bold'>Resume</p>
              </div>
            </div>
          </div>
          <div class='relative group'>
            <div class='absolute -inset-[2px] bg-gradient-to-r from-green-400 via-blue-400 to-purple-400  rounded-md blur-sm opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
            <div class='relative px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-md leading-none flex items-top justify-start space-x-6'>
              <div class='space-y-2'>
                <p class='text-slate-500 font-bold'>About Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <div className='inline-flex justify-center items-center rounded-full text-center p-1.5  bg-gradient-to-br from-slate-500 to-yellow-100'>
          <Image
            className='rounded-full border'
            src='/images/me.jpg'
            alt=''
            width={350}
            height={350}
            layout='fixed'
          />
        </div>
      </div>
    </section>
  );
}
