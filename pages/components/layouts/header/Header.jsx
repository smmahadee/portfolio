import Image from 'next/image';
import Link from 'next/link';
import { NAVLINKS } from '../../../data/navLink';
import GradientText from '../../../utils/gradientText';

export default function Header() {
  const span = <span>DEV</span>;
  return (
    <header className='container max-w-6xl mx-auto flex items-center justify-between gap-2 py-6 font-semibold'>
      <div>
        <Image
          className='rounded-full'
          src='/images/me.jpg'
          alt=''
          height={50}
          width={50}
        />
      </div>
      <nav className=''>
        <ul className='flex justify-between gap-12 text-slate-500 '>
          {NAVLINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.path}>
                <a className='hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-clip-text hover:text-transparent'>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex gap-5'>
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
    </header>
  );
}
