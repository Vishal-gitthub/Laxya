import React from 'react'
import logo from "../Images/Logos/laxya-white.png"

export default function Footer() {
      return (
            <div className='place-items-center grid-cols-1 bg-black py-[30px]'>
                  <div className='flex flex-col justify-center items-center max-w-[513px] font-roboto text-center'>
                        <div className='max-w-52'>
                              <img src={logo} alt="laxya" />
                        </div>
                        <p className="py-7 text-[#C0C0C7] text-[15px]">
                              You'll find Laxya Productions situated in Ghitorni, Delhi NCR. With decades of experience in the film and still production industry, we excel at making your shoots effortless.
                        </p>
                        <p className='bg-[#c0c0c75b] w-[90%] h-[1px]'></p>
                        <p className='pt-[20px] pb-[10px] text-[#8b9199] text-[15px]'>
                              Plot No. 1, Khasra No – 620-620, Zero Road, CBR Chowk, Ghitorni, New Delhi -110030
                        </p>
                        <div className='flex justify-center items-center gap-4 pt-[30px] pb-[10px] text-[15px]'>
                              <span className='text-[#8b9199]'>+91 9810004008 </span>
                              <span className='text-[#8b919996]'>|</span>
                              <span className='text-[#8b9199]'> info@laxya.net</span>
                        </div>
                        <div className='flex justify-center items-center gap-4 mt-[30px]'>
                              <a href='#' className='border-[#c0c0c75b] hover:border-yellow border w-[38px] h-[38px] group'>
                                    <i className="group-hover:text-yellow pt-[10px] text-white fa-brands fa-facebook-f"></i>
                              </a>
                              <a href='#' className='border-[#c0c0c75b] hover:border-yellow border w-[38px] h-[38px] group'>
                                    <i className="group-hover:text-yellow pt-[10px] text-white fa-brands fa-linkedin-in"></i>
                              </a>
                              <a href='#' className='border-[#c0c0c75b] hover:border-yellow border w-[38px] h-[38px] group'>
                                    <i className="group-hover:text-yellow pt-[10px] text-white fa-brands fa-instagram"></i>
                              </a>
                              <a href='#' className='border-[#c0c0c75b] hover:border-yellow border w-[38px] h-[38px] group'>
                                    <i className="group-hover:text-yellow pt-[10px] text-white fa-brands fa-youtube"></i>
                              </a>
                        </div>
                  </div>

            </div>
      )
}
