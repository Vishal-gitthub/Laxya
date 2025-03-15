import React from 'react';
import logo from '../Images/Logos/laxya-white.png';

export default function Footer () {
  return (
    <div className="place-items-center grid-cols-1 bg-black mt-5 py-[30px]">
      <div className="flex flex-col justify-center items-center max-w-[513px] font-roboto text-center">
        <div className="max-w-52">
          <img src={logo} alt="laxya" />
        </div>
        <p className="py-7 text-[#C0C0C7] text-[15px]">
          You'll find Laxya Productions situated in Ghitorni, Delhi NCR. With decades of experience in the film and still production industry, we excel at making your shoots effortless.
        </p>
        <p className="bg-[#c0c0c75b] w-[90%] h-[1px]" />
        <p className="pt-[20px] pb-[10px] text-[#8b9199] text-[15px]">
          Plot No. 1, Khasra No – 620-620, Zero Road, CBR Chowk, Ghitorni, New Delhi -110030
        </p>
        <div className="flex justify-center items-center gap-4 pt-[30px] pb-[10px] text-[15px]">
          <span className="text-[#8b9199]">
            <a href="tel:+919810004008">+91 9810004008</a>
          </span>
          <span className="text-[#8b919996]"> | </span>
          <span className="text-[#8b9199]">
            <a href="mailto:info@laxya.net?subject=Hello&body=I want to connect.">
              info@laxya.net
            </a>
          </span>
        </div>
        <div className="flex justify-center items-center gap-4 mt-[30px]">
          <a
            href="https://www.facebook.com/laxyaproductions/"
            className="group border border-[#c0c0c75b] hover:border-yellow w-[38px] h-[38px]"
            target="_blank"
          >
            <i className="group-hover:text-yellow pt-[10px] text-white fa-brands fa-facebook-f" />
          </a>
          <a
            href="https://in.linkedin.com/company/laxyaproductions"
            className="group border border-[#c0c0c75b] hover:border-yellow w-[38px] h-[38px]"
          >
            <i className="group-hover:text-yellow pt-[10px] text-white fa-brands fa-linkedin-in" />
          </a>
          <a
            href="https://www.instagram.com/laxya_productions/"
            className="group border border-[#c0c0c75b] hover:border-yellow w-[38px] h-[38px]"
          >
            <i className="group-hover:text-yellow pt-[10px] text-white fa-brands fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/@laxyaproductions"
            className="group border border-[#c0c0c75b] hover:border-yellow w-[38px] h-[38px]"
          >
            <i className="group-hover:text-yellow pt-[10px] text-white fa-brands fa-youtube" />
          </a>
        </div>
      </div>

    </div>
  );
}
