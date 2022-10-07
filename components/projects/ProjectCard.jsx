import Image from 'next/image';
import Link from 'next/link';
import ProjectCarousel from './ProjectCarousel';

export default function ProjectCard({ positon, project }) {
  console.log(project)
  return (
    <div className={`max-w-xs ${positon ? '' : 'mx-auto'}`}>
      {/* <Image
        className='rounded-t-xl'
        src='/images/windows.jpg'
        alt=''
        width={1600}
        height={1200}
        layout='responsive'
      /> */}
      <ProjectCarousel thumb={project.thumb} />

      {/* ////////////////////////////////////////// */}
      <div className='p-4 bg-white rounded-b-xl'>
        <h4 className='font-medium text-2xl text-center mb-4'>
         {project.title}
        </h4>
        <p className='text-justify font-light text-lg text-[#666] leading-6 mb-3'>
          {project.description}
        </p>
        <div className='flex gap-1 mb-5 text-sm '>
          <h6 className='basis-24 break-normal font-semibold text-slate-500'>
            Tech stack :
          </h6>
          <div className='flex flex-wrap gap-1 font-light text-[#42446E]'>
            {project.techstack.map((stack, i) => <span className='text-[12px] font-bold' key={i}>{stack}</span>)}
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
            <Link href={project.website}>
              <a className='text-sm font-semibold underline underline-offset-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-clip-text hover:text-transparent'>
                Live Website
              </a>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <Image
              src='/images/icons/details.svg'
              alt=''
              height={16}
              width={16}
            />
            <Link href={`/project/${project.slug}`}>
              <a className='text-sm font-semibold underline underline-offset-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-clip-text hover:text-transparent'>
                Go Details
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
