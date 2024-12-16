import React from 'react'
import logo from "../Images/Logos/laxya-white.png"

export default function Footer() {
      return (
            <div className='py-[60px] bg-black grid-cols-1 place-items-center '>
                  <div className='max-w-[513px] flex flex-col items-center justify-center text-center  font-roboto'>
                        <div className=' max-w-52'>
                              <img src={logo} alt="laxya" />
                        </div>
                        <p className="py-7 text-[15px]  text-[#C0C0C7]">
                              You'll find Laxya Productions situated in Ghitorni, Delhi NCR. With decades of experience in the film and still production industry, we excel at making your shoots effortless.
                        </p>
                        <p className='w-[90%] h-[1px] bg-[#c0c0c75b] '></p>
                        <p className='pt-[20px] pb-[10px] text-[15px] text-[#8b9199]'>
                              Plot No. 1, Khasra No – 620-620, Zero Road, CBR Chowk, Ghitorni, New Delhi -110030
                        </p>
                        <div className='flex justify-center items-center text-[15px] gap-4 pt-[30px] pb-[10px]'>
                              <span className='text-[#8b9199]'>+91 9810004008 </span>
                              <span className='text-[#8b919996]'>|</span>
                              <span className='text-[#8b9199]'> info@laxya.net</span>
                        </div>
                        <div className='flex justify-center items-center gap-4 mt-[30px]'>
                              <a href='#' className='w-[38px] h-[38px] border-[#c0c0c75b] border group hover:border-yellow '>
                                    <i className="fa-brands pt-[10px] fa-facebook-f group-hover:text-yellow text-white "></i>
                              </a>
                              <a href='#' className='w-[38px] h-[38px] border-[#c0c0c75b] border group hover:border-yellow '>
                                    <i className="fa-brands pt-[10px] fa-linkedin-in group-hover:text-yellow  text-white"></i>
                              </a>
                              <a href='#' className='w-[38px] h-[38px] border-[#c0c0c75b] border group hover:border-yellow '>
                                    <i className="fa-brands pt-[10px] fa-instagram group-hover:text-yellow  text-white"></i>
                              </a>
                              <a href='#' className='w-[38px] h-[38px] border-[#c0c0c75b] border group hover:border-yellow '>
                                    <i className="fa-brands pt-[10px] fa-youtube group-hover:text-yellow  text-white"></i>
                              </a>
                        </div>
                  </div>

            </div>
      )
}
