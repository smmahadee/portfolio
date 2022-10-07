import Image from 'next/image';

export default function JobCard() {
  return (
    <article className='border-b border-slate-300 pb-5'>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-xl'>Junior Web Developer</h2>
        <span className='block text-sm font-semibold bg-green-200 py-1 px-5 rounded-full'>
          Full Time
        </span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-12'>
          <p className='flex items-center gap-1'>
            <Image
              src='/images/icons/building.svg'
              alt=''
              height={20}
              width={20}
            />
            <span>Dr. Rajkumar’s Learning App</span>
          </p>

          <p className='flex items-center gap-1'>
            <Image
              src='/images/icons/location.svg'
              alt=''
              height={20}
              width={20}
            />
            <span>Bengaluru</span>
          </p>
        </div>

        <p className='flex items-center gap-1'>
          <Image
            src='/images/icons/calender.svg'
            alt=''
            height={20}
            width={20}
          />
          <span>Sep 2021 - Dec 2021</span>
        </p>
      </div>
    </article>
  );
}
