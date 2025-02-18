import React from "react";

const Test = () => {
  return (
    <div className="flex max-sm:flex-col justify-center gap-10 bg-white w-full h-full">
      <div className="inline-block bg-white shadow-xl my-5 px-5 py-3 border rounded-lg min-w-min">
        <div className="w-80 max-sm:w-48 h-80">
          <img
            src="https://picsum.photos/id/237/400/400"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="inline-block">
          <h1 className="max-sm:text-sm max-md:text-base max-lg:text-xl max-xl:text-2xl text-3xl">
            Lorem, ipsum.
          </h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <div>
            <span>230₹</span> <button>add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
