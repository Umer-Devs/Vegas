/**
 * Dummy API service for simulating backend interactions.
 */

export const submitBooking = async (bookingData: any) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Submitting Booking Data to Dummy API:", bookingData);

    // Simulate successful response
    return {
        success: true,
        message: "Your booking request has been submitted successfully. We will follow up with your quote shortly.",
        bookingId: `BK-${Math.floor(Math.random() * 1000000)}`
    };
};
