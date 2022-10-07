import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAVLINKS } from '../../../data/navLink';
import GradientText from '../../../utils/gradientText';

export default function Footer() {
  const router = useRouter();
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
            <span>Phone:</span>{' '}
            <Link href='tel: +8801825332455'>+8801825332455</Link>
          </p>
          <p>
            <span>Email:</span>{' '}
            <Link href='mailto:smmahadee0@gmail.com'>smmahadee0@gmail.com</Link>
          </p>
          <div className='flex gap-5'>
            <Link href='https://github.com/smmahadee'>
              <a className='flex items-center'>
                <Image
                  src='/images/icons/githubIcon.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </a>
            </Link>
            <Link href='https://twitter.com/SmMahadee'>
              <a className='flex items-center'>
                <Image
                  src='/images/icons/twitterIcon.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </a>
            </Link>
            <Link href='https://www.linkedin.com/in/mehediask/'>
              <a className='flex items-center'>
                <Image
                  src='/images/icons/linkedinIcon.svg'
                  alt=''
                  width={20}
                  height={20}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-between font-semibold py-4'>
      <nav className=''>
        <ul className='flex justify-between gap-12 text-slate-500 '>
          {NAVLINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.path}>
                <a
                  className={`hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-clip-text hover:text-transparent ${
                    router.pathname === link.path
                      ? 'bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'
                      : ''
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
        <span className='flex items-center gap-1 text-slate-500'>
          Developed by <GradientText>SM MAHADEE</GradientText>
        </span>
      </div>
    </footer>
  );
}
