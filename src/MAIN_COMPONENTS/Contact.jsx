import React from 'react';
import ContactHeader from '../Images/Contact_image/Lets Connect.jpg';
export default function Contact () {
  return (
    <div className="bg-white font-roboto">
      <div className="w-full">
        <img src={ContactHeader} className="w-full object-cover" alt="" />
      </div>
      <div className="bg-[#f1f1f1] px-24 max-sm:px-6 max-md:px-12 py-16">
        <div className="flex justify-between items-center gap-[60px] bg-white shadow-xl max-sm:px-[25px] max-md:px-[50px] py-[90px] pl-[100px] rounded-[25px]">
          <div>

            <div>
              <h1 className="font-black font-roboto text-[#222222] text-4xl">
                Contact Us
              </h1>
              <p className="py-5 text-[#c0c0c7] text-[18px]">
                Feel free to contact us anytime. We will get back to you as soon as we can!
              </p>
            </div>
            <div>
              <div className="flex max-md:flex-col gap-[27px] w-full">
                <input
                  type="text"
                  className="px-5 border w-full h-[62px] text-[#c0c0c7] outline-0"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="px-5 border w-full h-[62px] text-[#c0c0c7] outline-0"
                  placeholder="Phone"
                />
              </div>

              <br />
              <div>
                <input
                  type="text"
                  className="px-5 border w-full h-[62px] text-[#c0c0c7] outline-0"
                  placeholder="Email"
                />
                <br />
                <br />
                <textarea
                  name="message"
                  id="message"
                  className="px-5 pt-2 border w-full h-[100px] text-[#c0c0c7] outline-none resize-none"
                  placeholder="Message"
                />
                <br />
                <br />

                <button className="flex-shrink-0 bg-yellow px-2 w-full max-sm:w-full h-[62px] font-bold text-[18px] text-white outline-none">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="block max-md:hidden bg-[#222222] p-[40px] rounded-l-3xl w-[340px] h-[340px]">
            <h1 className="pb-[30px] font-bold text-[30px] text-white">
              Contact Info
            </h1>
            <div className="flex items-center gap-3 my-[30px] text-[#c0c0c7]">
              <i className="fa-headset fas"> </i>
              <span className="text-sm">+91 9810004008</span>
            </div>
            <div className="flex items-center gap-3 mb-[30px] text-[#c0c0c7]">
              <i className="fa-envelope-open-text fas"> </i>
              <span className="text-sm">info@laxya.net</span>
            </div>
            <div className="flex items-center gap-3 mb-[30px] text-[#c0c0c7]">
              <i className="fa-map-marked-alt fas"> </i>
              <span className="text-sm">
                Plot No. 1, Khasra No – 620-620, Zero Road, CBR Chowk, Ghitorni, New Delhi -110030
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* google map embed  */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4368.09866655091!2d77.13163281464985!3d28.490571142132655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1ee09641bef%3A0x77de0cc8f025a2d!2sLAXYA%20PRODUCTIONS%20PVT.%20LTD.%20%26%20STUDIOS!5e0!3m2!1sen!2sin!4v1734344223881!5m2!1sen!2sin"
          width="100%"
          height={400}
          style={{border: 0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
