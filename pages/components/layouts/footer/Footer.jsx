import Image from 'next/image';
import Link from 'next/link';
import GradientText from '../../../utils/gradientText';

export default function Footer() {
  return (
    <footer className='max-w-6xl mx-auto mb-5'> 
      <div className=' flex justify-between border-b border-slate-400 pb-5 mb-5'>
        <Image
          className='rounded-full'
          src='/images/me.jpg'
          alt=''
          height={50}
          width={50}
        />
        <div className='flex gap-16 items-center font-semibold text-slate-500'>
          <p>
            <span>Phone:</span> <Link href='tel: +8801825332455'>+8801825332455</Link> 
          </p>
          <p>
            <span>Email:</span> <Link href='mailto:smmahadee0@gmail.com'>smmahadee0@gmail.com</Link> 
          </p>
          <div className='flex gap-3'>
            <Image
              src='/images/icons/githubIcon.svg'
              alt=''
              width={20}
              height={20}
            />
            <Image
              src='/images/icons/twitterIcon.svg'
              alt=''
              width={20}
              height={20}
            />
            <Image
              src='/images/icons/linkedinIcon.svg'
              alt=''
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between font-semibold py-4'>
        <nav className=''>
          <ul className='flex justify-between gap-10 text-slate-500'>
            <li>Home</li>
            <li>About</li>
            <li>TechStack</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <span className='flex items-center gap-1 text-slate-500'>
          Developed by <GradientText>SM MAHADEE</GradientText>
        </span>
      </div>
    </footer>
  );
}
