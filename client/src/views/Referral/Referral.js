import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../components/languages/Text/Text';
import './Referral.css';

const Referral = () => {
  const [link, setLink] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    return () => {
      setLink('http://localhost:3000/signup/kw348ndnk');
    };
  }, [link]);

  function copyText() {
    navigator.clipboard.writeText(link);
    if (link) {
      setShow(!show);
    }
  }

  return (
    <>
      <h1 className="text-white text-5xl text-center font-mono mt-4">
        Referral
      </h1>
      <br />
      <div className="container grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-1 relative p-4 w-1/2">
        <div className="max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center ">
          <a href="#">
            <img
              className="rounded-t-lg m-auto p-2"
              src="img/referral/slide-new-1.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                Invitation Link
              </h5>
              <p className="text-base md:text-base text-center">{link}</p>
              {show && (
                <p className="text-white text-center text-xl font-mono">
                  Copied!
                </p>
              )}
            </a>
            <br />
            <div className="flex grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-2">
              <div>
                <button
                  onClick={copyText}
                  href="#"
                  className="w-5/6 m-auto justify-center inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
                >
                  Copy
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
              <Link to={'/referral-about'}>
                <button
                  href="#"
                  className="w-5/6 m-auto justify-center inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
                >
                  Learn More
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

      {/* Modal part */}
    </>
  );
};

export default Referral;
