import Footer from '@/componenets/Footer'
import Navbar from '@/componenets/Navbar'
import ServiceFeatures from '@/componenets/ServiceFeatures'
import OurServices from '@/componenets/OurServices'
import GetAQuote from '@/componenets/GetAQuote'
import React from 'react'
import { serviceImagePage1 } from '@/public'

const page = () => {
    return (
        <>
            <Navbar />
            <main className='pt-28 pb-12 bg-black min-h-screen'>
                <section className='py-16 w-full text-center bg-no-repeat bg-cover bg-center mb-12' style={{ backgroundImage: `url(${serviceImagePage1.src})` }} >
                    <div className='flex flex-col space-y-8 items-center mt-[5%]'>
                        <h1 className='text-[#B09C6D] font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight'>Services</h1>
                        <p className='text-gray-300 text-base md:text-lg max-w-5xl font-light leading-relaxed px-6'>
                            LV Elite Concierge offers premium VIP concierge services designed to deliver personalized attention,
                            seamless bookings, and exceptional comfort. From luxury transportation to tailored travel
                            arrangements, our team ensures every detail is handled with precision—creating a refined,
                            stress-free experience that exceeds expectations at every step.
                        </p>
                    </div>
                </section>

                <ServiceFeatures />
                <OurServices />
                <GetAQuote />
            </main>

            <Footer />
        </>
    )
}

export default page;