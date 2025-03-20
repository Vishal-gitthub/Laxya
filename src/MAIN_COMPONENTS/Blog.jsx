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
      redirection: 'https://laxya.net/blog/display-advertising/',
    },
    {
      image: blogImg2,
      type: 'Blog',
      title: 'Influencer Marketing: A Comprehensive Guide for Brands and Marketers',
      brandName: 'Laxya',
      redirection: 'https://laxya.net/blog/influencer-marketing/',
    },
    {
      image: blogImg3,
      type: 'Blog',
      title: 'Content Marketing & Advertising: Understanding the Differences and Best Practicess',
      brandName: 'Laxya',
      redirection: 'https://laxya.net/blog/content-marketing-advertising/',
    },
    {
      image: blogImg4,
      type: 'Blog',
      title: 'Search Engine Marketing (SEM): A Comprehensive Guide for Digital Success',
      brandName: 'Laxya',
      redirection: 'https://laxya.net/blog/search-engine-marketing-sem/',
    },
  ];
  return (
    <div className="bg-white mt-40 px-[90px] max-sm:px-4">
      <div className="text-center">
        <h1 className="px-20 max-md:px-3 py-5 font-yeseva text-[7.6vw] max-sm:text-[32px] max-md:text-[60px] leading-none tracking-wide">
          <span className="pr-1 text-stroke text-transparent">
           Our
          </span>
          <span className="text-yellow">blogs</span>
        </h1>
        <p className="text-[#c0c0c7] text-2xl">
          Explore Laxya Productions' Latest Blogs, News, and Creative Insights
        </p>
      </div>
      <div className="px-3 pt-20 pb-6">
        <h1 className="py-3 font-roboto font-medium text-xl">Latest</h1>
        <hr className="border-2 border-black" />
        <div className="flex flex-wrap justify-center gap-4 pt-10">
          {blog.map ((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center w-[300px] h-[400px] loadingChild"
            >
              <a href={data.redirection}>
                <div className="w-full h-[200px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-5 w-full text-left">
                  <span className="font-medium text-slate-900">
                    {data.type}
                  </span>
                  <h1 className="font-bold text-xl">{data.title}</h1>
                  <span>{data.brandName}</span>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
      <div className="px-3 pt-10 pb-6">
        <h1 className="py-3 font-roboto font-medium text-xl">Trending</h1>
        <hr className="border-2 border-black" />
        <div className="flex flex-wrap justify-center gap-4 pt-10">
          {blog.map ((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center w-[300px] h-[400px] loadingChild"
            >
              <a href={data.redirection}>
                <div className="w-full h-[200px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-5 w-full text-left">
                  <span className="font-medium text-slate-900">
                    {data.type}
                  </span>
                  <h1 className="font-bold text-xl">{data.title}</h1>
                  <span>{data.brandName}</span>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
