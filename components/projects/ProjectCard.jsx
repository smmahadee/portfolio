import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({positon}) {
  return (
    <div className={`max-w-xs ${positon ? '' : 'mx-auto'}`}>
      <Image
        className='rounded-t-xl'
        src='/images/windows.jpg'
        alt=''
        width={1600}
        height={1200}
        layout='responsive'
      />
      <div className='p-4 bg-white rounded-b-xl'>
        <h4 className='font-medium text-2xl text-center mb-4'>
          Project Tile goes here
        </h4>
        <p className='text-justify font-light text-lg text-[#666] leading-6 mb-3'>
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </p>
        <div className='flex gap-1 mb-5 text-sm '>
          <h6 className='break-normal font-semibold text-slate-500'>
            Tech stack :
          </h6>
          <div className='flex flex-wrap gap-1 font-light text-[#42446E]'>
            <span>HTML</span>
            <span>Javascript</span>
            <span>SASS</span>
            <span>React</span>
          </div>
        </div>
        <div className='flex justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <Image
              src='/images/icons/attachmenticon.svg'
              alt=''
              height={16}
              width={16}
            />
            <Link href=''>
              <a className='text-sm font-semibold underline underline-offset-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-clip-text hover:text-transparent'>
                Live Preview
              </a>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <Image
              src='/images/icons/github.svg'
              alt=''
              height={16}
              width={16}
            />
            <Link href=''>
              <a className='text-sm font-semibold underline underline-offset-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-clip-text hover:text-transparent'>
                View Code
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
