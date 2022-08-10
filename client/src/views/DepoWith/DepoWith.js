import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../components/languages/Text/Text';

const DepoWith = () => {
  return (
    <>
      <div className="container grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-2 relative p-4 w-1/2 m-auto">
        {/* USDT Transfer */}
        <div className="max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center w-2/3 ">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                Deposit
              </h5>
            </a>
            <p className="mb-3 font-normal text-white font-mono">
              Deposit tron for mining
            </p>
            <Link to={'/deposit'}>
              <button
                href="#"
                className=" inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
              >
                Deposit
                <svg
                  aria-hidden="t rue"
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

        {/* Online Payment   */}
        {/* <div className="text-center text-white shadow-2xl  m-auto w-2/3"> */}
        <div className="max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center w-2/3">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                Withdrawal
              </h5>
            </a>
            <p className="mb-3 font-normal text-white font-mono">
              Withdraw rewards of mining
            </p>
            <Link to={'/withdraw'}>
              <button
                href="#"
                className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded-tl-2xl  rounded    hover:border hover:border-[#1b65a7]    rounded-br-2xl    bg-transparent border border-white  "
              >
                Withdrawal
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
      {/* </div> */}

      {/* Modal part */}
    </>
  );
};

export default DepoWith;
