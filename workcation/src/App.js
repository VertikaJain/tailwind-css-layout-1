import React from 'react';
import { ReactComponent as ReactLogo } from './logo.svg';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="flex justify-between items-center bg-gray-900 px-4 py-3 ">
        {/* <ReactLogo /> */}
        <h3 className="text-white text-base uppercase">Workcation</h3>
        <svg className="fill-current text-gray-500 h-6 w-6" viewBox="0 0 100 80">
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </header>
      <section className="flex bg-gray-800 px-4 py-3 justify-between items-center">
        <div className="relative">
          <div className="absolute flex items-center inset-y-0 ml-3 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg>
          </div>
          <input
            className="rounded-lg text-gray-100 bg-gray-900 pl-10 pr-4 py-2 focus:outline-none focus:bg-gray-100 focus:text-gray-800"
            placeholder="Search by keywords"
          ></input>
        </div>
        {/* <div className="bg-gray-900 flex items-center rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-gray-500 ml-2" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg>
          <input
            className=" text-gray-100 bg-gray-900 mx-4 py-2"
            placeholder="Search by keywords"
          ></input>
        </div> */}
        <button onClick={() => { }} className="hover:bg-gray-600 focus:outline-none bg-gray-700 px-4 py-2 rounded-lg inline-flex">
          <svg className="fill-current text-gray-500 h-6 w-6" viewBox="0 0 100 80">
            <rect width="100" height="15"></rect>
            <rect y="30" width="75" height="15" x="10"></rect>
            <rect y="60" width="40" height="15" x="30"></rect>
          </svg>
          <span className="ml-1 text-white font-medium">Filters</span>
        </button>
      </section>
      <main className="px-4 py-6">
        <h3 className="text-gray-900 text-xl">Los Angeles</h3>
        <p className="text-gray-600 ">live like the staers ...... fsdnfjsgarjshtj  nrwjgg </p>
        <div>
          <div className="">
            <div>
              <img className="rounded-lg shadow-md mt-6 h-64" src="/rhema-kallianpur-unsplash.jpg" alt=""></img>
            </div>
            <div class="px-4 relative -mt-16">
              <div className="px-4 py-4 shadow-lg bg-white rounded-lg ">
                <div className="flex space-x-2">
                  <span className="uppercase bg-teal-200 text-teal-800 rounded-full font-semibold text-xs px-2 py-1 leading-none tracking-wide inline-block">plus</span>
                  <p className="uppercase text-xs font-semibold text-gray-600 tracking-wide">3 beds &bull; 2 baths </p>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mt-1">Modern hotel in city center</h4>
                <div>
                  <span className="text-gray-900">$1,400</span><span className="text-gray-600 text-sm pl-1">/wk</span>
                </div>
                <div className="text-gray-600 text-sm flex items-center mt-2">
                  <svg className="h-4 w-4 fill-current text-teal-500" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" ><path class="st0" d="M384.3,456c-2.7,0-5.7-1.1-8.8-3.2l-112.3-77.1c-3.6-2.4-10.8-2.5-14.4,0l-112.3,77.1c-6.5,4.5-12.9,4-16.3-0.4
	c-2.3-3-2.7-7.1-1.2-12.2l33.9-120.3c1.3-4.8-0.6-12.3-4-15.8l-87.4-89.2c-6.1-6.2-5-11.9-4.2-14c0.8-2.1,3.5-7.2,12.2-8L185.1,182
	c4.9-0.5,11.1-5,13-9.5l46.4-107.5c3.5-8.2,9.1-9.1,11.4-9.1c2.2,0,7.8,0.9,11.4,9.1l46.5,107.5c1.9,4.5,8.1,9,13,9.5l115.6,10.8
	c8.7,0.8,11.5,5.9,12.2,8c0.8,2.1,1.9,7.8-4.2,14l-87.4,89.2c-3.5,3.5-5.4,11-4,15.8L393,440.2c1.4,5,1,9.1-1.2,12.1
	C390,454.7,387.3,456,384.3,456z M256,360.4c5.5,0,10.7,1.5,14.7,4.2l108.1,74.2l-32.5-115.4c-2.6-9.3,0.6-21.9,7.3-28.8l86.9-88.7
	l-114.9-10.8c-9.6-0.9-20.2-8.6-24-17.5L256,72.2l-45.6,105.6c-3.9,9-14.2,16.5-24,17.4L71.5,206.1l86.9,88.6
	c6.7,6.9,10,19.5,7.4,28.8l-32.5,115.4l108.1-74.2C245.3,361.9,250.5,360.4,256,360.4z"/>
                  </svg>
                  <svg className="h-4 w-4 fill-current text-teal-500" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" ><path class="st0" d="M384.3,456c-2.7,0-5.7-1.1-8.8-3.2l-112.3-77.1c-3.6-2.4-10.8-2.5-14.4,0l-112.3,77.1c-6.5,4.5-12.9,4-16.3-0.4
	c-2.3-3-2.7-7.1-1.2-12.2l33.9-120.3c1.3-4.8-0.6-12.3-4-15.8l-87.4-89.2c-6.1-6.2-5-11.9-4.2-14c0.8-2.1,3.5-7.2,12.2-8L185.1,182
	c4.9-0.5,11.1-5,13-9.5l46.4-107.5c3.5-8.2,9.1-9.1,11.4-9.1c2.2,0,7.8,0.9,11.4,9.1l46.5,107.5c1.9,4.5,8.1,9,13,9.5l115.6,10.8
	c8.7,0.8,11.5,5.9,12.2,8c0.8,2.1,1.9,7.8-4.2,14l-87.4,89.2c-3.5,3.5-5.4,11-4,15.8L393,440.2c1.4,5,1,9.1-1.2,12.1
	C390,454.7,387.3,456,384.3,456z M256,360.4c5.5,0,10.7,1.5,14.7,4.2l108.1,74.2l-32.5-115.4c-2.6-9.3,0.6-21.9,7.3-28.8l86.9-88.7
	l-114.9-10.8c-9.6-0.9-20.2-8.6-24-17.5L256,72.2l-45.6,105.6c-3.9,9-14.2,16.5-24,17.4L71.5,206.1l86.9,88.6
	c6.7,6.9,10,19.5,7.4,28.8l-32.5,115.4l108.1-74.2C245.3,361.9,250.5,360.4,256,360.4z"/>
                  </svg>
                  <svg className="h-4 w-4 fill-current text-teal-500" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" ><path class="st0" d="M384.3,456c-2.7,0-5.7-1.1-8.8-3.2l-112.3-77.1c-3.6-2.4-10.8-2.5-14.4,0l-112.3,77.1c-6.5,4.5-12.9,4-16.3-0.4
	c-2.3-3-2.7-7.1-1.2-12.2l33.9-120.3c1.3-4.8-0.6-12.3-4-15.8l-87.4-89.2c-6.1-6.2-5-11.9-4.2-14c0.8-2.1,3.5-7.2,12.2-8L185.1,182
	c4.9-0.5,11.1-5,13-9.5l46.4-107.5c3.5-8.2,9.1-9.1,11.4-9.1c2.2,0,7.8,0.9,11.4,9.1l46.5,107.5c1.9,4.5,8.1,9,13,9.5l115.6,10.8
	c8.7,0.8,11.5,5.9,12.2,8c0.8,2.1,1.9,7.8-4.2,14l-87.4,89.2c-3.5,3.5-5.4,11-4,15.8L393,440.2c1.4,5,1,9.1-1.2,12.1
	C390,454.7,387.3,456,384.3,456z M256,360.4c5.5,0,10.7,1.5,14.7,4.2l108.1,74.2l-32.5-115.4c-2.6-9.3,0.6-21.9,7.3-28.8l86.9-88.7
	l-114.9-10.8c-9.6-0.9-20.2-8.6-24-17.5L256,72.2l-45.6,105.6c-3.9,9-14.2,16.5-24,17.4L71.5,206.1l86.9,88.6
	c6.7,6.9,10,19.5,7.4,28.8l-32.5,115.4l108.1-74.2C245.3,361.9,250.5,360.4,256,360.4z"/>
                  </svg>
                  <svg className="h-4 w-4 fill-current text-teal-500" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" ><path class="st0" d="M384.3,456c-2.7,0-5.7-1.1-8.8-3.2l-112.3-77.1c-3.6-2.4-10.8-2.5-14.4,0l-112.3,77.1c-6.5,4.5-12.9,4-16.3-0.4
	c-2.3-3-2.7-7.1-1.2-12.2l33.9-120.3c1.3-4.8-0.6-12.3-4-15.8l-87.4-89.2c-6.1-6.2-5-11.9-4.2-14c0.8-2.1,3.5-7.2,12.2-8L185.1,182
	c4.9-0.5,11.1-5,13-9.5l46.4-107.5c3.5-8.2,9.1-9.1,11.4-9.1c2.2,0,7.8,0.9,11.4,9.1l46.5,107.5c1.9,4.5,8.1,9,13,9.5l115.6,10.8
	c8.7,0.8,11.5,5.9,12.2,8c0.8,2.1,1.9,7.8-4.2,14l-87.4,89.2c-3.5,3.5-5.4,11-4,15.8L393,440.2c1.4,5,1,9.1-1.2,12.1
	C390,454.7,387.3,456,384.3,456z M256,360.4c5.5,0,10.7,1.5,14.7,4.2l108.1,74.2l-32.5-115.4c-2.6-9.3,0.6-21.9,7.3-28.8l86.9-88.7
	l-114.9-10.8c-9.6-0.9-20.2-8.6-24-17.5L256,72.2l-45.6,105.6c-3.9,9-14.2,16.5-24,17.4L71.5,206.1l86.9,88.6
	c6.7,6.9,10,19.5,7.4,28.8l-32.5,115.4l108.1-74.2C245.3,361.9,250.5,360.4,256,360.4z"/>
                  </svg>
                  <svg className="h-4 w-4 fill-current text-teal-500" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" ><path class="st0" d="M384.3,456c-2.7,0-5.7-1.1-8.8-3.2l-112.3-77.1c-3.6-2.4-10.8-2.5-14.4,0l-112.3,77.1c-6.5,4.5-12.9,4-16.3-0.4
	c-2.3-3-2.7-7.1-1.2-12.2l33.9-120.3c1.3-4.8-0.6-12.3-4-15.8l-87.4-89.2c-6.1-6.2-5-11.9-4.2-14c0.8-2.1,3.5-7.2,12.2-8L185.1,182
	c4.9-0.5,11.1-5,13-9.5l46.4-107.5c3.5-8.2,9.1-9.1,11.4-9.1c2.2,0,7.8,0.9,11.4,9.1l46.5,107.5c1.9,4.5,8.1,9,13,9.5l115.6,10.8
	c8.7,0.8,11.5,5.9,12.2,8c0.8,2.1,1.9,7.8-4.2,14l-87.4,89.2c-3.5,3.5-5.4,11-4,15.8L393,440.2c1.4,5,1,9.1-1.2,12.1
	C390,454.7,387.3,456,384.3,456z M256,360.4c5.5,0,10.7,1.5,14.7,4.2l108.1,74.2l-32.5-115.4c-2.6-9.3,0.6-21.9,7.3-28.8l86.9-88.7
	l-114.9-10.8c-9.6-0.9-20.2-8.6-24-17.5L256,72.2l-45.6,105.6c-3.9,9-14.2,16.5-24,17.4L71.5,206.1l86.9,88.6
	c6.7,6.9,10,19.5,7.4,28.8l-32.5,115.4l108.1-74.2C245.3,361.9,250.5,360.4,256,360.4z"/>
                  </svg>
                  <span className="ml-2">34 reviews</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
