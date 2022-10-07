export default function GradientText({ children }) {
  return (
    <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold'>
      {children}
    </p>
  );
}
