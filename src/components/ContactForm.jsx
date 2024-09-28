import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast'; // Importing Toaster and toast
import { FiSend } from 'react-icons/fi';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState({}); // State variable is named `error`
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let error = {}; // Changed to `error`
        if (!formData.name) error.name = "Name is required";
        if (!formData.email) {
            error.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            error.email = "Email is not valid";
        }
        if (!formData.message) error.message = "Message is required";
        return error; // Return the `error` object
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(); // Call `validate` and store errors in `validationErrors`
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
        } else {
            setError({});
            setIsSending(true);

            emailjs.send(
                "service_mci9yof",
                "template_22lw59s",
                formData,
                "mkCv8D6SRQT_ptUE5"
            )
                .then((response) => {
                    toast.success("Message sent successfully");
                    setFormData({ name: "", email: "", message: "" });
                })
                .catch((error) => {
                    console.log("FAILED...", error);
                    toast.error("Failed to send message. Please try again later.");
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <div className='p-4 lg:w-3/4' id='contact'>
            <Toaster /> {/* Toaster component to show notifications */}
            <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter '>
                Let's Connect
            </h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4 flex space-x-4'>
                    <div className='lg:w-1/2'>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            value={formData.name}
                            placeholder='name'
                            onChange={handleChange}
                            className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                        />
                        {error.name && ( // Use `error` instead of `errors`
                            <p className='text-sm text-rose-800'>{error.name}</p>
                        )}
                    </div>
                    <div className='lg:w-1/2'>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            value={formData.email}
                            placeholder='email'
                            onChange={handleChange}
                            className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                        />
                        {error.email && ( // Use `error` instead of `errors`
                            <p className='text-sm text-rose-800'>{error.email}</p>
                        )}
                    </div>
                </div>

                <div className='mb-4'>
                    <textarea
                        type="text"
                        id='message' // Corrected the `id` and `name` attributes
                        name='message'
                        value={formData.message} // Corrected value attribute
                        placeholder='message' // Corrected placeholder
                        onChange={handleChange}
                        className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                        rows="6"
                    />
                    {error.message && ( // Use `error` instead of `errors`
                        <p className='text-sm text-rose-800'>{error.message}</p>
                    )}
                </div>
                <button type="submit" className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                    disabled={isSending}
                >
                    <div className='flex items-center justify-center gap-2'>
                        {isSending ? "Sending..." : "Send"}
                        <FiSend />
                    </div>
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
