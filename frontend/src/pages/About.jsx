import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione architecto distinctio voluptatibus ab mollitia ipsum, dignissimos corrupti fuga accusamus, ad temporibus unde impedit. Consectetur consequatur rerum numquam cumque reiciendis? Et.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, qui deleniti adipisci reiciendis totam voluptas similique accusamus omnis facere maxime quidem est, tenetur, natus quaerat harum laboriosam velit. Iusto, atque!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam eos, laborum, molestiae esse enim voluptas consequatur expedita ducimus maiores eius totam amet ab natus voluptates magnam alias possimus suscipit?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quantity Assurance:</b>
          <p className='text-gray-600'>WE Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et voluptates quibusdam non, nisi animi autem dignissimos eius illo nostrum placeat numquam accusamus mollitia velit modi, tempore vero asperiores esse.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>WE Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et voluptates quibusdam non, nisi animi autem dignissimos eius illo nostrum placeat numquam accusamus mollitia velit modi, tempore vero asperiores esse.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>WE Our team dedicated to Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et voluptates quibusdam non, nisi animi autem dignissimos eius illo nostrum placeat numquam accusamus mollitia velit modi, tempore vero asperiores esse.</p>
        </div>

      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About;
