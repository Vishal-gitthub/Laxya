import React, {useState} from 'react';
import TalentHeader from '../Images/TalentRegistration/Talent Header.jpeg';
import axios from 'axios';

export default function TalentRegistration () {
  const [isSending, setIsSending] = useState (false);
  const [status, setStatus] = useState ('');

  const [formData, setFormData] = useState ({
    name: '',
    phone: '',
    email: '',
    role: '',
    message: '',
    resume: null,
  });
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData ({...formData, [name]: value});
  };

  const handleFileChange = e => {
    setFormData ({...formData, resume: e.target.files[0]});
  };
  const handleSubmit = async e => {
    e.preventDefault ();
    // console.log(formData);
    setIsSending (true);

    const formDataToSend = new FormData ();
    formDataToSend.append ('name', formData.name);
    formDataToSend.append ('phone', formData.phone);
    formDataToSend.append ('email', formData.email);
    formDataToSend.append ('role', formData.role);
    formDataToSend.append ('message', formData.message);
    formDataToSend.append ('resume', formData.resume);
    // console.log("Form submitted");
    try {
      const response = await axios.post (
        'https://www.laxya.net/send_email.php',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setStatus (response.data.message);
      setIsSending (false);
      setFormData ({
        name: '',
        phone: '',
        email: '',
        role: '',
        message: '',
        resume: null,
      });
    } catch (err) {
      setStatus ('Failed to send Form Details Try Again');
      console.log (err);
      setIsSending (false);

      setFormData ({
        name: '',
        phone: '',
        email: '',
        role: '',
        message: '',
        resume: null,
      });
    }
  };

  return (
    <div className="mt-40 overflow-x-hidden">
      <div className="px-0 max-sm:px-6 max-md:px-12 py-16">
        <div className="mb-10">
          {/* <h1 className="font-yeseva text-[7.6vw] max-sm:text-[32px] max-md:text-[60px] text-center leading-none tracking-wide">
            <span className="pr-1 text-stroke text-transparent">
              Talent
            </span>
            <span className="text-yellow">
              registration{' '}
            </span>
          </h1> */}
          <h1 className="text-[142px] text-black max-sm:text-[40px] max-md:text-[100px] text-center">
            Talent Registration
          </h1>
          <p className="pt-4 pl-20 max-sm:pl-2 text-[#c0c0c7] text-4xl text-center">
            Welcome to talent registration
          </p>
        </div>
        <div className="flex justify-center items-center gap-[60px] bg-white shadow-xl m-auto px-16 max-sm:px-[25px] max-md:px-[50px] py-[50px] max-sm:py-[30px] rounded-[25px] max-w-7xl">
          <div>
            <h1 className="font-black text-[#222222] max-sm:text-2xl text-4xl">
              Elevate Your Talent Today
            </h1>
            <p className="py-5 text-[#c0c0c7] text-[18px]">
              Feel free to contact us anytime. We will get back to you as soon
              as we can!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex md:flex-row flex-col gap-[27px] w-full">
                <input
                  type="text"
                  name="name"
                  className="px-5 border outline-0 w-full h-[62px] text-[#c0c0c7]"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  className="px-5 border outline-0 w-full h-[62px] text-[#c0c0c7]"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 12345-67890"
                  required
                />
              </div>

              <div className="mt-4">
                <input
                  type="email"
                  name="email"
                  className="px-5 border outline-0 w-full h-[62px] text-[#c0c0c7]"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. johndoe@example.com"
                  required
                />
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  name="role"
                  className="px-5 border outline-0 w-full h-[62px] text-[#c0c0c7]"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Model"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-[#c0c0c7]">
                  Profile (JPG, PNG, PDF)
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    onChange={handleFileChange}
                    className="pt-2 border-b w-full"
                    required
                  />
                </label>
              </div>

              <div className="mt-4">
                <textarea
                  name="message"
                  id="message"
                  className="px-5 pt-2 border outline-none w-full h-[100px] text-[#c0c0c7] resize-none"
                  placeholder="Cover Letter"
                  onChange={handleChange}
                  value={formData.message}
                />
              </div>

              <button
                type="submit"
                className="bg-yellow mt-6 outline-none w-full h-[62px] font-bold text-[18px] text-white"
              >
                {isSending ? 'Sending' : 'Send'}
              </button>
              {status && status}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
