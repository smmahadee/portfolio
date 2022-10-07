import Image from 'next/image';
import ProjectCard from '../projects/ProjectCard';

export default function Projects({ position = 'center' }) {
  return (
    <section className='pt-20 pb-32 text-slate-500'>
      <h2 className={`font-bold text-5xl text-${position} mb-2 tracking-tight`}>
        Projects
      </h2>
      <p className={`text-${position} text-xl mb-24`}>
        Things I’ve built so far
      </p>

      <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-16 relative'>
        <ProjectCard positon='left'/>
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
