import Footer from '@/componenets/Footer'
import Form from '@/componenets/Form'
import Navbar from '@/componenets/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            {/* navbar import  */}
            <Navbar />
            <main className='py-16 w-full text-center bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url("https://vegasviprides.com/wp-content/uploads/2024/10/23-Chevrolet-Suburban-Cargo-Space.webp")' }} >
                <div className='flex flex-col space-y-8 items-center mt-[16%]  md:mt-[7%]'>
                    <h1 className='text-[#B09C6D] font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight'>Contact Us</h1>
                    <p className='text-gray-300 text-base md:text-lg max-w-5xl font-light leading-relaxed'>Experience ultimate luxury with LV Elite Concierge. Our exclusive VIP service delivers personalized attention, seamless bookings, and exceptional comfort, crafting every journey to exceed your expectations</p>
                </div>
            </main>
            {/* form componenet  */}
            <Form />
            {/* footer componenet  */}
            <Footer />
        </>
    )
}

export default page