import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="mx-auto relative overflow-hidden p-8 rounded-lg bg-surface">
      <h2 className="text-center font-bold text-4xl text-primary mb-10">
        Contact Me
      </h2>
      <div className=" flex flex-wrap justify-center gap-10 ">
        <div className="">
          <img src="../assets/Messages-rafiki.svg" alt="Illustration of a person sending a message" className="w-96 h-auto max-h-80"/> {/* Adjusted h-25 to h-auto max-h-80 */}
        </div>
        <div className="w-96">
          <form method="post" action="#">
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-primary"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="mt-1 p-2 w-full border-2 rounded-md "
                type="text"
                id="name"
                name="name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-primary"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="mt-1 p-2 w-full border-2 rounded-md "
                name="email"
                id="email"
                type="email"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-primary"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="mt-1 p-2 w-full border-2 rounded-md "
                rows="3"
                name="message"
                id="message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-primary text-text-light px-4 py-2 font-bold rounded-md hover:brightness-110 transition-all duration-200"
                type="submit"
              >
                Leave a Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
