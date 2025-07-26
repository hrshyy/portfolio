import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,   // Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Template ID
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY    // Public Key
      )
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          alert("Your message has been sent successfully!");
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Check console for details.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-yellow-50 to-yellow-100 text-gray-900 body-font py-24 px-6"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Feel free to get in touch by filling out the form below.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
            {/* Name */}
            <div className="p-2 w-1/2">
              <label htmlFor="user_name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white text-base outline-none text-gray-700 py-1 px-3"
              />
            </div>
            
            {/* Email */}
            <div className="p-2 w-1/2">
              <label htmlFor="user_email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                title="Enter valid email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white text-base outline-none text-gray-700 py-1 px-3"
              />
            </div>

            {/* Phone */}
            <div className="p-2 w-full">
              <label htmlFor="user_phone" className="leading-7 text-sm text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                name="user_phone"
                required
                pattern="[0-9]{10}"
                maxLength="10"
                title="Enter a valid 10-digit phone number"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white text-base outline-none text-gray-700 py-1 px-3"
              />
            </div>

            {/* Message */}
            <div className="p-2 w-full">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-600 rounded text-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
