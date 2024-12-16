import React from 'react';
import blogHeader from '../Images/blog_images/Blogs-1536x864.webp';
import blogImg1
  from '../Images/blog_images/Display-Advertising-Photos-1536x1024-blog1.webp';
import blogImg2 from '../Images/blog_images/blog-2.webp';
import blogImg3
  from '../Images/blog_images/Content-marketing-icons-1536x1536blog-3.webp';
import blogImg4
  from '../Images/blog_images/SEM-Technology-Display-1536x1022blog-4.webp';
export default function Blog () {
  const blog = [
    {
      image: blogImg1,
      type: 'Blog',
      title: 'Display Advertising: A Complete Guide for Digital Marketers',
      brandName: 'Laxya',
    },
    {
      image: blogImg2,
      type: 'Blog',
      title: 'Influencer Marketing: A Comprehensive Guide for Brands and Marketers',
      brandName: 'Laxya',
    },
    {
      image: blogImg3,
      type: 'Blog',
      title: 'Content Marketing & Advertising: Understanding the Differences and Best Practicess',
      brandName: 'Laxya',
    },
    {
      image: blogImg4,
      type: 'Blog',
      title: 'Search Engine Marketing (SEM): A Comprehensive Guide for Digital Success',
      brandName: 'Laxya',
    },
  ];
  return (
    <div>
      <div className="w-full">
        <img src={blogHeader} alt="" className="w-full object-cover" />
      </div>
      <div className="px-3 pt-20 pb-6">
        <h1 className="py-3 font-medium font-roboto text-xl">Latest</h1>
        <hr className="border-2 border-black" />
        <div className="flex flex-wrap justify-center gap-4 pt-10">
          {blog.map ((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center w-[300px] h-[400px] loadingChild"
            >
              <div className="w-full h-[200px]">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 w-full text-left">
                <span className="font-medium text-slate-900">{data.type}</span>
                <h1 className="text-xl">{data.title}</h1>
                <span>{data.brandName}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="px-3 pt-20 pb-6">
        <h1 className="py-3 font-medium font-roboto text-xl">Trending</h1>
        <hr className="border-2 border-black" />
        <div className="flex flex-wrap justify-center gap-4 pt-10">
          {blog.map ((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center w-[300px] h-[400px] loadingChild"
            >
              <div className="w-full h-[200px]">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 w-full text-left">
                <span className="font-medium text-slate-900">{data.type}</span>
                <h1 className="text-xl">{data.title}</h1>
                <span>{data.brandName}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
