import React, { useState } from 'react';
// import './Landing.scss';
import { Link } from 'react-router-dom';
// import StakingProviders from '../components/section/Providers';

function Landing(props) {
  return (
    <div className="title-container text-white text-4xl mt-20 text-center">
      <div className="title-mask">
        <h1 className="title-content md : text-6xl">
          Welcome to <b>Tron Infinite</b>
          <br />
          {/* <span className="title-highlight md : text-xl">The <b>Tron Infinite</b> is designed as a burn strategy to help the Tron community<br/> reduce the numerous supply of Tron on its Blockchain, everyone who has access to Tron coin globally will be privileged <br/> to experience a rapid Tron growth as a result of this mining farm</span>  */}
        </h1>
      </div>
      <div className="flex m-auto w-full justify-center mt-8">
        <img src={'img/landing/machine_1.jpg'} className="p-2 border-2"></img>
        <img src={'img/landing/machine_2.jpg'} className="p-2 border-2"></img>
        <img src={'img/landing/machine_3.jpg'} className="p-2 border-2"></img>
        <img src={'img/landing/machine_4.jpg'} className="p-2 border-2"></img>
      </div>

      <Link to={'/Login'}>
        <button className=" block  w-3/4 text-center mx-auto cursor-pointer pt-10 btn-text">
          <div className="b mx-auto h-16 w-64 flex justify-center items-center">
            <div className="i h-16 w-64 bg-gradient-to-br from-red-400 to-blue-400 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
            <p className="text-center text-white text-2xl  z-10 pointer-events-none font-mono ">
              Get Started
            </p>
          </div>
        </button> 
      </Link>
    </div>
  );
}

export default Landing;
