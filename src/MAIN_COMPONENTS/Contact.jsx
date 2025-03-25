import {useEffect, useState} from 'react';
import ContactHeader from '../Images/Contact_image/Lets Connect.jpg';
import axios from 'axios';
export default function Contact () {
  const [status, setStatus] = useState ('');
  const [sending, isSending] = useState (false);
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect (
    () => {
      if (status) {
        const timer = setTimeout (() => {
          setStatus (null);
        }, 3000);
        return () => {
          clearTimeout (timer);
        };
      }
    },
    [status]
  );

  const inputHandle = e => {
    setFormData ({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    isSending (true);
    const formDataToSend = new FormData ();

    formDataToSend.append ('name', formData.name);
    formDataToSend.append ('email', formData.email);
    formDataToSend.append ('phone', formData.phone);
    formDataToSend.append ('message', formData.message);

    try {
      const pushData = await axios.post (
        'https://www.laxya.net/contact_us.php',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setStatus (pushData.data.message);
      isSending (false);
      setFormData ({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      console.error ('Error sending message:', err);
      isSending (false);
      setStatus ('Error sending message. Please try again later.');
      setFormData ({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  console.log (formData);
  return (
    <div className="bg-white mt-40">
      <div className="px-24 max-sm:px-6 max-md:px-12 py-11">
        <div className="text-center">
          {/* <h1 className="px-20 max-md:px-3 py-5 font-yeseva text-[7.6vw] max-sm:text-[32px] max-md:text-[60px] leading-none tracking-wide">
            <span className="pr-1 text-stroke text-transparent">Contact</span>
            <span className="text-yellow">us</span>
          </h1> */}
          <h1 className="text-[142px] text-black max-sm:text-[40px] max-md:text-[100px]">
            Contact us
          </h1>
        </div>
        <div className="flex justify-between items-center gap-[60px] bg-white shadow-xl max-sm:px-[25px] max-md:px-[50px] py-[90px] pl-[100px] rounded-[25px]">
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className="font-black text-[#222222] text-4xl">
                We’re Just a Message Away
              </h1>
              <p className="py-5 text-[#c0c0c7] text-[18px]">
                Feel free to contact us anytime. We will get back to you as soon
                as we can!
              </p>
            </div>
            <div>
              <div className="flex max-md:flex-col gap-[27px] w-full">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={inputHandle}
                  value={formData.name}
                  className="px-5 border outline-0 w-full h-[62px] text-black"
                  placeholder="Name"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={inputHandle}
                  value={formData.phone}
                  className="px-5 border outline-0 w-full h-[62px] text-black"
                  placeholder="Phone"
                  required
                />
              </div>

              <br />
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={inputHandle}
                  value={formData.email}
                  className="px-5 border outline-0 w-full h-[62px] text-black"
                  placeholder="Email"
                  required
                />
                <br />
                <br />
                <textarea
                  name="message"
                  id="message"
                  onChange={inputHandle}
                  value={formData.message}
                  className="px-5 pt-2 border outline-none w-full h-[100px] text-[#c0c0c7] resize-none"
                  placeholder="Message"
                  required
                />
                <br />
                <br />
                {status &&
                  <p
                    className={
                      status.includes ('Error')
                        ? 'text-red-500'
                        : 'text-green-500'
                    }
                  >
                    {status}
                  </p>}
                <button
                  type="submit"
                  disabled={sending}
                  className={`flex-shrink-0 bg-yellow px-2 w-full max-sm:w-full h-[62px] font-bold text-[18px] text-white outline-none ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {sending ? 'Sending Details...' : 'Send'}
                </button>
              </div>
            </div>
          </form>
          <div className="max-md:hidden block bg-[#222222] p-[40px] rounded-l-3xl w-[340px] h-[340px]">
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
                Plot No. 1, Khasra No – 620-620, Zero Road, CBR Chowk, Ghitorni,
                New Delhi -110030
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
