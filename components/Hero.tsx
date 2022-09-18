import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-zigzag ">
            Medium
          </span>{' '}
          is a place to Write, Read and Connect
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          ratione, delectus corporis eius modi esse?{' '}
        </h2>
      </div>
      <div className="hidden md:inline-flex m-10">
        <Image
          src="https://cdn.freebiesupply.com/images/large/2x/medium-icon-white-on-black.png"
          alt="Logo"
          width="320px"
          height="240px"
        />
      </div>
    </div>
  );
};

export default Hero;
