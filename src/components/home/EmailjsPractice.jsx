import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';

export const EmailjsPractice = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ix25dr9', 'template_ohy6dpx', form.current, {
                publicKey: 'nzZC9f1fhink2qm3L',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='pb-20 pt-9'>
            <div className='container'>
                <p className='font-semibold font-inter text-3xl text-center pb-6'>EMAILJS</p>
                <form ref={form} onSubmit={sendEmail} className='flex items-center justify-center gap-3 flex-wrap'>
                    <label className='font-outfit font-medium md:text-xl text-base flex items-center gap-3 mb-4'>Name
                        <input type="text" name="name" placeholder='Name' className='border border-black outline-none p-2' /></label>
                    <label className='font-outfit font-medium md:text-xl text-base flex items-center gap-3 mb-4'>Email
                        <input type="email" name="user_email" placeholder='Email' className='border border-black outline-none p-2' /></label>
                    <label className='font-outfit font-medium md:text-xl text-base flex items-center gap-3 mb-4'>Message
                        <textarea name="message" placeholder='Message' rows={1} cols={25} className='border border-black outline-none p-2' /></label>
                    <input type="submit" value="Send" className='font-outfit font-medium md:text-2xl text-base bg-black text-white md:py-3 md:px-8 py-2 px-5 hover:scale-95 duration-700 text-center rounded-lg' />
                </form>
            </div>
        </div>
    );
};
export default EmailjsPractice