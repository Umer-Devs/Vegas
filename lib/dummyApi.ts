
export const submitBooking = async (bookingData: any) => {
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Submitting Booking Data to Dummy API:", bookingData);

    return {
        success: true,
        message: "Your booking request has been submitted successfully. We will follow up with your quote shortly.",
        bookingId: `BK-${Math.floor(Math.random() * 1000000)}`
    };
};
