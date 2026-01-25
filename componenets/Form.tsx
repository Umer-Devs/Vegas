"use client";
import { luxury_suv_hero, logo } from '@/public'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { toast } from 'react-hot-toast'

import api from '@/lib/api'

const Form = () => {
    const [formData, setFormData] = React.useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: ''
    })
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { placeholder, value } = e.target
        const fieldMap: Record<string, string> = {
            "First Name": "first_name",
            "Last Name": "last_name",
            "Phone*": "phone",
            "Email*": "email"
        }
        const fieldName = fieldMap[placeholder]
        if (fieldName) {
            setFormData(prev => ({ ...prev, [fieldName]: value }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const response = await api.post('/contact', formData)
            if (response.data.status) {
                toast.success("Request submitted successfully!")
                setFormData({ first_name: '', last_name: '', phone: '', email: '' })
            } else {
                toast.error(response.data.message || "Submission failed")
            }
        } catch (error) {
            console.error("Submission error:", error)
            toast.error("Network error. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="relative bg-black text-white min-h-screen py-12 px-4 md:px-0 overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-fixed bg-center bg-no-repeat bg-cover grayscale opacity-15 pointer-events-none"
                style={{ backgroundImage: `url(${logo.src})` }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto overflow-hidden rounded-lg shadow-2xl border border-white/10"
            >
                <div className="relative h-[300px] md:h-[400px] w-full">
                    <Image
                        src={luxury_suv_hero}
                        alt="Luxury SUV"
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center pt-20 px-8 md:px-12">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-[#B09C6D] text-2xl md:text-3xl font-serif italic mb-1 tracking-wider"
                        >
                            LV ELITE CONCIERGE
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-3xl md:text-5xl font-bold mb-2 tracking-tight uppercase"
                        >
                            Signature Rides
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-gray-300 text-sm md:text-base mb-6 font-light"
                        >
                            Luxury Perfected
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <Link href="/book">
                                <button className="border border-white text-white px-6 py-2 text-xs md:text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                                    BOOK PRIVATELY WITH US
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <div className="bg-black p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { placeholder: "First Name", type: "text", value: formData.first_name },
                                { placeholder: "Last Name", type: "text", value: formData.last_name },
                                { placeholder: "Phone*", type: "tel", required: true, value: formData.phone },
                                { placeholder: "Email*", type: "email", required: true, value: formData.email },
                            ].map((field, idx) => (
                                <motion.div
                                    key={field.placeholder}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                >
                                    <input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        value={field.value}
                                        onChange={handleInputChange}
                                        className="w-full bg-white text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B09C6D] placeholder:text-gray-400 transition-all duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="flex items-start gap-4 text-xs md:text-sm text-gray-500 font-medium"
                        >
                            <input
                                type="checkbox"
                                id="consent"
                                className="mt-1 w-5 h-5 accent-[#B09C6D] cursor-pointer"
                                defaultChecked
                            />
                            <label htmlFor="consent" className="leading-relaxed">
                                I Consent to Receive SMS Notifications, Alerts & Occasional Marketing
                                Communication from company. Message frequency varies. Message & data
                                rates may apply. Text RIDE to <a href="tel:+17028009093"><span className="text-[#B09C6D] font-bold underline cursor-pointer">+1 702-800-9093</span></a> for assistance. You can reply
                                STOP to unsubscribe at any time.
                            </label>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-[#D1B06B] hover:bg-[#B09C6D] text-white font-bold py-4 rounded-md transition-colors duration-300 shadow-lg text-lg tracking-wide transform hover:scale-[1.01] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? "Processing..." : "Submit Request"}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </section>
    )
}

export default Form
