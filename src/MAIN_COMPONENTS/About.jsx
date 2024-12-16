import React from 'react';
import aboutHeader from '../Images/AboutUs-images/AboutUsHeader.jpg';

import TeamSlider from './About-page-components/TeamSlider';
export default function About() {

      return (
            <div className="bg-white h-auto">
                  {/* Header Image  */}
                  <div className="w-full h-full max-md:h-[55%]">
                        <img src={aboutHeader} className="w-full object-cover" alt="" />
                  </div>

                  {/* About Us Content  */}
                  <section>
                        <div className="px-[120px] max-sm:px-[10px] max-md:px-[45px] py-[30px] pt-[100px] font-normal font-roboto text-[#C0C0C7] text-lg">
                              <p>

                                    Welcome to Laxya Productions, a well-known production house based in Ghitorni, Delhi, famous for its creativity since 1995. With a history of over 27 years, we've become a leading name in advertising and fashion, consistently delivering impressive content that goes beyond expectations.
                              </p>
                              <br />
                              <br />

                              Over the years we have worked with clients like Samsung, Mountain Dew, Eicher, Suzuki, Adidas, BBC, Voltas, Reebok, Yamaha, and many more brands that you see in your day to day life to bring their vision to reality. At Laxya Productions, our team is a mix of dedicated professionals, each focused on achieving excellence. Fueled by creativity and a drive for perfection, we turn ideas into reality with a touch of magic. Over the years we have worked with clients like Samsung, Mountain Dew, Eicher, Suzuki, Adidas, BBC, Voltas, Reebok, Yamaha, and many more brands that you see in your day to day life to bring their vision to reality. We've partnered with top agencies like Ogilvy, and respected brands like Honda, Samsung, Yamaha etc. in achieving many successes and satisfied clients. From corporate videos to film productions, we've mastered various visual, digital, and print media formats, solidifying our reputation as one of Delhi's best production houses. Come explore our world and join us on a journey of creativity and quality.

                        </div>

                        <div className="m-auto mb-16 w-[85%] max-sm:w-full">
                              <div className="flex max-md:flex-col justify-center items-stretch">
                                    {/* First Container */}
                                    <div className="flex-1 bg-yellow p-[60px] w-2/4 max-md:w-full text-[#2E2E2E]">
                                          <h1 className="my-[30px] font-black font-roboto text-2xl max-sm:text-[19px]">
                                                Nurturing Client Satisfaction
                                          </h1>
                                          <p className="my-[30px] font-medium font-roboto text-[18px] max-sm:text-base">
                                                Our focus on keeping clients happy is at the heart of what we do. We build strong partnerships that last by working smoothly and staying dedicated, making sure every project benefits both sides.
                                          </p>
                                    </div>

                                    {/* Second Container */}
                                    <div className="flex-1 bg-[#222222] p-[60px] w-2/4 max-md:w-full text-white">
                                          <h1 className="my-[30px] font-black font-roboto text-2xl max-sm:text-[19px]">
                                                Journey of Growth & Excellence
                                          </h1>
                                          <p className="my-[30px] font-normal font-roboto text-[18px] max-sm:text-base">
                                                With over 27 years of experience, we've faced challenges all over the place, making us leaders in the production industry. Each year, we learn more & build relationships that show why we're one of the best production houses in Delhi.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* Our Team */}
                  <TeamSlider />
                  <section className='px-[100.5px] max-sm:px-8 py-[150px] font-roboto text-center'>
                        <h1 className='font-black text-[#2e2e2e] text-[50px]'>Step into the Laxya Experience</h1>
                        <p className='py-[30px] text-[#c0c0c7] text-[18px]'>Embark on an Amazing Creative Journey with Laxya Productions, the Best Production House in Delhi NCR area. See your dreams come true with great skill and style as we mix expertise, passion, and strong commitment to make exciting stories that really stick.
                              Join us in exploring new ideas and breaking limits as we work together to achieve great things. Contact Laxya Productions today and take your ideas to new levels of success.</p>
                        <div className="flex max-sm:flex-col justify-center items-center max-sm:gap-2 w-full font-roboto">
                              <input type="text" className="border-[#c0c0c7] bg-transparent px-6 border border-r-0 max-md:border-r max-md:w-full h-[62px] text-[18px] outline-none" placeholder="Phone No." />
                              <button className="flex-shrink-0 bg-yellow px-2 w-[300px] max-sm:w-full h-[62px] font-bold text-[18px] outline-none">Get Started</button>
                        </div>
                  </section>
            </div>
      );
}
