import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'> Hello. I’m Vishrut Goti </h1>
        <p className='tracking-wide leading-relaxed'>
          With a passion for innovation and a diverse skill set spanning across software development, web development, and AI/ML engineering, I bring a unique blend of creativity and technical expertise to the table. My journey in technology has been driven by a relentless pursuit of excellence, coupled with a commitment to staying abreast of the latest advancements in the field. Whether it's crafting elegant web solutions, architecting robust software systems, or delving into the realms of artificial intelligence and machine learning, I am dedicated to delivering impactful results that exceed expectations.{' '}
        </p>
      </div>
    </section>
  );
};

export default Hero;
