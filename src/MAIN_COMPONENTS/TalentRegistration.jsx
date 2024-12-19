import React from 'react';
import TalentHeader from '../Images/TalentRegistration/Talent Header.jpeg';

export default function TalentRegistration () {
  const handleSubmit = e => {
    e.preventDefault ();
    console.log ('Form submitted');
  };

  return (
    <div className="bg-white font-roboto">
      <div className="w-full">
        <img
          src={TalentHeader}
          className="w-full object-cover"
          alt="Contact Header"
        />
      </div>
      <div className="bg-[#f1f1f1] px-24 max-sm:px-6 max-md:px-12 py-16">
        <div className="flex justify-center items-center gap-[60px] bg-white shadow-xl px-16 max-sm:px-[25px] max-md:px-[50px] py-[90px] max-sm:py-[30px] rounded-[25px]">
          <div>
            <h1 className="font-black text-[#222222] text-4xl max-sm:text-2xl">
              Talent Registration
            </h1>
            <p className="py-5 text-[#c0c0c7] text-[18px]">
              Feel free to contact us anytime. We will get back to you as soon as we can!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex md:flex-row flex-col gap-[27px] w-full">
                <input
                  type="text"
                  className="px-5 border w-full h-[62px] text-[#c0c0c7] outline-0"
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  className="px-5 border w-full h-[62px] text-[#c0c0c7] outline-0"
                  placeholder="Phone"
                  required
                />
              </div>

              <div className="mt-4">
                <input
                  type="email"
                  className="px-5 border w-full h-[62px] text-[#c0c0c7] outline-0"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  className="px-5 border w-full h-[62px] text-[#c0c0c7] outline-0"
                  placeholder="Designation"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block font-roboto text-[#c0c0c7]">
                  Profile (JPG, PNG, PDF)
                  <input
                    type="file"
                    name="File"
                    id="file"
                    className="pt-2 border-b w-full"
                    required
                  />
                </label>
              </div>

              <div className="mt-4">
                <textarea
                  name="message"
                  id="message"
                  className="px-5 pt-2 border w-full h-[100px] text-[#c0c0c7] outline-none resize-none"
                  placeholder="Cover Letter"
                />
              </div>

              <button
                type="submit"
                className="bg-yellow mt-6 w-full h-[62px] font-bold text-[18px] text-white outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
