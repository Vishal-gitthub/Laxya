import {Ghost, HomeIcon, ArrowLeft} from 'lucide-react';

export function NotFound () {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 p-4 min-h-screen">
      <div className="w-full max-w-2xl text-center">
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center opacity-10">
            <Ghost className="w-96 h-96 text-gray-900" />
          </div>

          <div className="relative">
            <h1 className="font-bold text-gray-900 text-9xl tracking-widest">
              404
            </h1>
            <div className="-bottom-2 absolute w-full">
              <div className="bg-yellow rounded-full w-full h-2" />
            </div>
          </div>
        </div>

        <h2 className="mt-8 font-semibold text-gray-800 text-3xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Oops! The page you're looking for seems to have vanished into thin air.
        </p>

        <div className="flex sm:flex-row flex-col justify-center gap-4 mt-12">
          <button
            onClick={() => window.history.back ()}
            className="inline-flex items-center bg-white hover:bg-gray-50 px-6 py-3 border-2 border-gray-200 hover:border-gray-300 rounded-lg text-gray-700 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = '/')}
            className="inline-flex items-center bg-yellow hover:bg-yellow px-6 py-3 rounded-lg text-white transition-colors duration-200"
          >
            <HomeIcon className="mr-2 w-5 h-5" />
            Return Home
          </button>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          Lost? Try searching our site or checking the navigation menu above.
        </div>
      </div>
    </div>
  );
}
