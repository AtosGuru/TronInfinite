import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../components/languages/Text/Text';

function Package(props) {
  return (
    <>
      <div className="p-5 relative">
        <h1 className="text-white text-5xl text-center font-mono ">Package</h1>
        <p class="  text-xl text-center text-white mt-5">
          Select pacakge plan for daily rewards.
        </p>
        <br />
        <div className="container grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-3 relative p-4 w-1/2" style={{'minHeight': "500px"}}>
          <div className="transition: 300ms hover:p-5 max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center ">
            <a href="#">
              <img
                className="rounded-t-lg m-auto p-2 w-full"
                src="img/package/basic.png"
                alt=""
                style={{ height: '205px' }}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                  Basic Miner
                </h5>
                <p className="text-base md:text-base text-center">
                  300 TRX / Month
                </p>
              </a>
              <br />
              <div className="flex grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-2">
                <div>
                  <button
                    href="#"
                    className="w-5/6 m-auto justify-center inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
                  >
                    Select
                  </button>
                </div>
                <Link to={'/pay-package'}>
                  <button
                    href="#"
                    className="w-5/6 m-auto justify-center inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
                  >
                    Pay
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="transition: 300ms  hover:p-5  max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center ">
            <a href="#">
              <img
                className="rounded-t-lg m-auto p-2 w-full"
                src="img/package/advanced.png"
                alt=""
                style={{ height: '205px' }}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                  Advanced Miner
                </h5>
                <p className="text-base md:text-base text-center">
                  600 TRX / Month
                </p>
              </a>
              <br />
              <div className="flex grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-2">
                <div>
                  <button
                    href="#"
                    className="w-5/6 m-auto justify-center inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
                  >
                    Select
                  </button>
                </div>
                <Link to={'/pay-package'}>
                  <button
                    href="#"
                    className="w-5/6 m-auto justify-center inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
                  >
                    Pay
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="transition: 300ms  hover:p-5 max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center ">
            <a href="#">
              <img
                className="rounded-t-lg m-auto p-2 w-full"
                src="img/package/pro.png"
                alt=""
                style={{ height: '205px' }}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                  Pro Miner
                </h5>
                <p className="text-base md:text-base text-center">
                  900 TRX / Month
                </p>
              </a>
              <br />
              <div className="flex grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-2">
                <div>
                  <button
                    href="#"
                    className="active-btn w-5/6 m-auto justify-center inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
                  >
                    Selected
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Link to={'/pay-package'}>
                  <button
                    href="#"
                    className="w-5/6 m-auto justify-center inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
                  >
                    Pay
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
