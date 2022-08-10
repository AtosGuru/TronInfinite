import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text } from '../../components/languages/Text/Text';
import RECAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';

const Mining = () => {
  const [show, setShow] = useState(false);

  function showChaptcha() {
    setShow(true);
  }

  return (
    <>
      <div className="p-5 relative  md:w-1/2 text-center m-auto">
        <h1 className="text-white text-5xl text-center font-mono ">Mining</h1>
        <p className=" text-xl text-center text-white mt-5">
          You can get 5% rewards of you deposited amount after solving puzzle
          for mining.
        </p>
        <br />
        <br />
        <div className="container grid grid-cols-1 gap-2 m-auto md:grid md:grid-cols-3 relative p-4  m-auto">
          {/* USDT Transfer */}
          <div className="max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center w-4/5 ">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                  Active Mine
                </h5>
              </a>
              <p className="mb-3 text-md text-white font-mono">244.32 TRX</p>
            </div>
          </div>

          {/* Online Payment   */}
          <div className="max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center w-4/5">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                  Current Asset
                </h5>
              </a>
              <p className="mb-3 font-normal text-white font-mono">1200 TRX</p>
            </div>
          </div>

          <Link to={'/incentive-withdraw'}>
            <div className="hover:border-[#1b65a7] max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center w-4/5 ">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                    Your Points
                  </h5>
                </a>
                <p className="mb-3 text-md text-white font-mono">$1,200</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="m-auto text-center py-10">
          <div className="">
            <form className="max-w-[500px] w-5/6  text-white text-xl text-center m-auto">
              <div className="mt-5">
                <p className="font-mono text-xl">Enter Amount For Mining</p>
                <input
                  type={'number'}
                  placeholder="500"
                  name={'amount'}
                  className="py-4 px-5 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl"
                />
              </div>
              {show && (
                <div className="mt-5 text-center justify-center">
                  <RECAPTCHA
                    sitekey="6LcCJ18hAAAAAJWyKLIsXIvJC-pKEePiFMOCDBuK"
                    theme="dark"
                    size="450"
                  />
                </div>
              )}

              <button
                type="button"
                className="rounded-bl-3xl rounded-tr-3xl mt-5 inline-flex justify-center items-center gap-5 text-white text-xl  bg-transparent border border-white  w-full hover:border-[#1b65a7] hover:text-2xl  rounded-lg  px-6 py-3.5 text-center"
              >
                <b onClick={showChaptcha}>Mine Now</b>
              </button>
              <br />
              <br />
              <ul className="list-disc p-5">
                <li className="text-white text-2xl text-left">
                  Successful Transaction: 3
                </li>
                <li className="text-white text-2xl text-left">
                  Income From Transaction: 132 TRX
                </li>
                <li className="text-white text-2xl text-left">
                  Transaction Amount: 8332 TRX
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg  color-white w-4/5 m-auto">
          <table class="w-full text-sm text-left text-gray-500 text-gray-400 color-white">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6 text-white">
                  Time
                </th>
                <th scope="col" className="py-3 px-6 text-white">
                  Transaction Amount
                </th>
                <th scope="col" className="py-3 px-6 text-white">
                  Profit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-white whitespace-nowrap text-white"
                >
                  2022-08-08 12:02
                </th>

                <td class="py-4 px-6"> 2945.4 TRX</td>
                <td class="py-4 px-6">2999 TRX</td>
              </tr>
              <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-white whitespace-nowrap text-white"
                >
                  2022-08-08 12:02
                </th>

                <td class="py-4 px-6">2945.4 TRX</td>
                <td class="py-4 px-6">2945.4 TRX</td>
              </tr>
              <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-white whitespace-nowrap text-white"
                >
                  2022-08-08 12:02
                </th>

                <td class="py-4 px-6">2945.4 TRX</td>
                <td class="py-4 px-6">2945.4 TRX</td>
              </tr>
              <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-white whitespace-nowrap text-white"
                >
                  2022-08-08 12:02
                </th>

                <td class="py-4 px-6">2945.4 TRX</td>
                <td class="py-4 px-6">2945.4 TRX</td>
              </tr>
              <tr class="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-white whitespace-nowrap text-white"
                >
                  2022-08-08 12:02
                </th>

                <td class="py-4 px-6"> 2945.4 TRX</td>
                <td class="py-4 px-6">2945.4 TRX</td>
              </tr>
              <tr class="bg-white bg-gray-800 hover:bg-gray-50 hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-white whitespace-nowrap text-white"
                >
                  2022-08-08 12:02
                </th>

                <td class="py-4 px-6">2945.4 TRX</td>
                <td class="py-4 px-6">99 TRX</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Mining;
