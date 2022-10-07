import Image from 'next/image';
import JobCard from '../components/about/JobCard';

export default function about({ position = '' }) {
  return (
    <section className='text-slate-500 py-20'>
      <div className='mb-14'>
        <h2
          className={`text-[#42446E] font-bold text-4xl text-${position} mb-10 tracking-tight`}
        >
          About Mez
        </h2>
        <p className={`text-${position} text-xl mb-3`}>
          Hi, I am a Professional Front-end developer with more than three years
          of experience. I always focused to deliver exceptional customer
          experiences and I love learning new things and keep me up to date with
          new technology so that I can achieve more customer satisfaction by
          delivering a quality of work.
        </p>
      </div>
      <div className='mb-5'>
        <h2
          className={` text-[#42446E] font-bold text-4xl text-${position} mb-10 tracking-tight`}
        >
          Work Experience
        </h2>
        <div>
          <JobCard />
        </div>
      </div>
    </section>
  );
}
