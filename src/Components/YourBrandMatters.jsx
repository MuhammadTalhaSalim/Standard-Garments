
import React from 'react'
import { Link } from 'react-router-dom';

function YourBrandMatters() {
   
  const customClipStyleDesktop = {
    clipPath: 'polygon(0px 1%, 97% 0px, 87% 100%, 0% 100%)',
    backgroundColor: '#2a314b',
    color: 'white',
    padding: '20px',
    maxWidth: '700px', 
    height: '600px',
    width:'70%'
  };

  const customClipStyleMobile = {
    backgroundColor: '#2a314b',
    color: 'white',
    padding: '20px',
    width: '100%',
    minHeight: '400px'
  };

  return (
    <div className='mb-20'>
      <h1 className='text-2xl md:text-4xl font-bold bg-yellow-400 text-white text-center mx-4 md:m-20 p-3 md:p-5'>
        Your Brand Matters
      </h1> 
    
      {/* Mobile Layout */}
      <div className='md:hidden px-4 mt-8'>
        <div className='customClip rounded-lg mb-8' style={customClipStyleMobile}>
          <p className='text-white text-2xl text-center mb-6 pt-8'>
            Your Brand <br />Matters.
          </p>
          <hr className="border-t border-white my-5 mx-8" />
          
          <div className="text-center">
            <Link to="/#CustomUniforms">
              <button className='bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-all duration-300'>
                Browse custom uniforms
              </button>
            </Link>
           
          </div>
        </div>
        
        <div className='textContainer'>
          <p className='text-black text-base text-justify mb-4'>
            At Standard Garments, we understand that your brand is your identity.
          </p>
          <p className='text-black text-base text-justify mb-4'>
            That's why we are committed to helping you build a strong brand presence through our high-quality uniforms and teamwear. Our uniforms are not just clothing; they are a reflection of your brand's values, professionalism, and attention to detail. With our custom designs, durable materials, and perfect fitting, we ensure that your team looks sharp and feels confident, making a positive impact on your customers.
          </p>
          <p className='text-black text-base text-justify mb-4'>
            Whether you're in the hospitality, healthcare, or corporate sector, we have the expertise to create uniforms that align with your brand's vision and mission. In today's competitive market, establishing a strong brand identity is crucial for success. Your brand is more than just a logo; it's the perception that customers have of your business, and we help you communicate that through professional, high-quality uniforms that represent your company's excellence.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className='TwoContainer mt-25 hidden md:flex'>
        <div className='customClip' style={customClipStyleDesktop}>
          <p className='text-white text-3xl lg:text-5xl text-center mt-16 lg:mt-25'>
            Your Brand <br />Matters.
          </p>
          <hr className="border-t border-white my-5 mx-12 lg:mx-20" />
          <div className="text-center">
            <button className='bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-all duration-300'>
              Browse custom uniforms
            </button>
          </div>
        </div>
        
        <div className='textContainer flex flex-col justify-center items-center w-2/5 px-4'>
          <p className='text-black text-lg xl:text-xl text-justify mb-4'>
            At Standard Garments, we understand that your brand is your identity.
          </p>
          <p className='text-black text-lg xl:text-xl text-justify mb-4'>
            That's why we are committed to helping you build a strong brand presence through our high-quality uniforms and teamwear. Our uniforms are not just clothing; they are a reflection of your brand's values, professionalism, and attention to detail. With our custom designs, durable materials, and perfect fitting, we ensure that your team looks sharp and feels confident, making a positive impact on your customers.
          </p>
          <p className='text-black text-lg xl:text-xl text-justify mb-4'>
            Whether you're in the hospitality, healthcare, or corporate sector, we have the expertise to create uniforms that align with your brand's vision and mission. In today's competitive market, establishing a strong brand identity is crucial for success. Your brand is more than just a logo; it's the perception that customers have of your business, and we help you communicate that through professional, high-quality uniforms that represent your company's excellence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default YourBrandMatters