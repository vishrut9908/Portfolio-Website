import React from 'react';

const Skill = () => {
  return (
    <section className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/javascript-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Javascript
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/typescript.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Typescript
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='React Js'>
          <img src='./images/icons/react-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          React
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/Next.js.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Next.js
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/express_js.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Express.js
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/redux.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Redux
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='MongoDB'>
          <img src='./images/icons/MySQL.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          MySQL
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='HTML 5'>
          <img src='./images/icons/html5-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          HTML 5
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/Tailwind_CSS.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Tailwind CSS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/spring.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Spring Boot
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/PHP.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          PHP
        </div>
      </div>
    </section>
  );
};

export default Skill;
