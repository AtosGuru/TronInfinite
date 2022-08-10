import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { sendNotification } from '../actions/notification';
import { Text } from '../components/languages/Text/Text';
import { Link } from 'react-router-dom';

function Withdraw({ sendNotification }) {
  const [formData, setFormData] = useState({
    account: '',
    amount: '',
    password: '',
    method: ''
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formData.method = 'withdraw';
    console.log(formData);
    sendNotification(formData);
  };

  return (
    <>
      <div className="p-5 relative m-auto w-1/2 text-center ">
        <h1 className="text-white text-3xl text-left font-mono mt-10 text-center">
          <Text tid={'withdraw'} />
        </h1>
        <div className="m-auto text-center py-10">
          <div className="">
            <form
              onSubmit={onSubmit}
              className="max-w-[500px] w-5/6  text-white text-xl text-center m-auto"
            >
              <div>
                <p className="font-mono text-xl">
                  <Text tid={'walletaddress'} />
                </p>
                <input
                  type={'text'}
                  name={'account'}
                  onChange={onChange}
                  placeholder="0x..................."
                  className="py-4 px-5 w-full  bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-xl">
                  <Text tid={'amount'} />
                </p>
                <input
                  type={'number'}
                  placeholder="500"
                  name={'amount'}
                  onChange={onChange}
                  className="py-4 px-5 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl"
                />
              </div>

              <div className="mt-5">
                <p className="font-mono text-xl">
                  <Text tid={'securePassword'} />
                </p>
                <input
                  type={'password'}
                  name={'password'}
                  onChange={onChange}
                  placeholder="Secure Password"
                  className="py-4 px-5 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl"
                />
              </div>

              <button
                type="submit"
                className="rounded-bl-3xl rounded-tr-3xl mt-5 inline-flex justify-center items-center gap-5 text-white text-xl  bg-transparent border border-white  w-full hover:border-[#1b65a7] hover:text-2xl  rounded-lg  px-6 py-3.5 text-center"
              >
                <b>
                  <Text tid={'confirm'} />{' '}
                </b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <h1 className="text-white text-2xl text-left mt-10">
                <Text tid={'precaution'} />
              </h1>
              <ul className="list-disc p-5">
                <li className="text-white text-md text-left">
                  Min withdraw amount is 10$.
                </li>
                <li className="text-white text-md text-left">
                  <Text tid={'precaution3'} />
                </li>
              </ul>
              <br />
              <br />
              <Link to={'/depo-with'}>
                <button
                  href="#"
                  className="float-right inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded-tl-2xl  rounded    hover:border hover:border-[#1b65a7]    rounded-br-2xl    bg-transparent border border-white  "
                >
                  Back
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { sendNotification })(Withdraw);
