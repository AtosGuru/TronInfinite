import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer/Footer';
// import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Testimonial from './views/Testimonial/Testimonial';
import Referral from './views/Referral/Referral';
import ReferralAbout from './views/Referral/ReferralAbout';
import DepoWith from './views/DepoWith/DepoWith';
import Deposit from './views/DepoWith/Deposit';
import Mining from './views/Mining/Mining';

import Profit from './views/profit/Profit';
import Recharge from './views/Recharge';
import Transfer from './views/Transfer';
import Withdraw from './views/Withdraw';
import User from './views/User';
import Privacy from './views/Privacy/Privacy';
import About from './views/About/About';
import Alert from './components/layout/alert';
import Calculation from './views/profit/Calculation';
import { LOGOUT } from './actions/types';
import PrivateRoute from './components/routing/PrivateRoute';
import UsdtTransfer from './views/UsdtTransfer';
import MyTeam from './views/team/MyTeam';
import AddAccount from './views/team/AddAccount';
import InviteFriend from './views/team/InviteFriend';
import TeamFund from './views/team/TeamFund';
import Team from './views/Team';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import OnlinePayment from './views/onlinePayment';
import Wallet from './views/Wallet';

import { LanguageProvider } from './components/container/Language';
import './App.css';
import CreateWallet from './views/CreateWallet';

// Admin import
import UserManagement from './views/Admin/UserManagement.js';
import ShowUser from './views/Admin/ShowUser';
import AdminRecord from './views/Admin/AdminRecord';
import AdminTeam from './views/Admin/AdminTeam';
import AdminWallet from './views/Admin/AdminWallet';
import AdminBalance from './views/Admin/AdminBalance';
import Notification from './views/Admin/Notification';
import Landing from './components/layout/Landing/Landing';
import ContactUs from './views/ContactUs/ContactUs';
import Package from './views/Package/Package';
import PayPackage from './views/Package/PayPackage';
import IncentiveWithdraw from './views/Mining/IncentiveWithdraw';

function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <>
      {/* bg-[rgb(255,153,9)] */}
      <Provider store={store}>
        <div
          className="area bg-gradient-to-r bg-orange- via-orange-700 to-orange-800 "
          style={{
            position: 'absolute'
          }}
        >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Router>
          <LanguageProvider>
            <Navbar />
            <Alert />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/withdraw" element={<PrivateRoute component={Withdraw}/>} />
              <Route path="/deposit" element={<PrivateRoute component={Deposit}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/referral" element={<PrivateRoute component={Referral}/>} />
              <Route path="/referral-about" element={<PrivateRoute component={ReferralAbout}/>} />
              <Route path="/depo-with" element={<PrivateRoute component={DepoWith}/>} />
              <Route path="/mining" element={<PrivateRoute component={Mining}/>} />
              <Route path="/package" element={<PrivateRoute component={Package}/>} />
              <Route path="/pay-package" element={<PrivateRoute component={PayPackage}/>} />
              <Route path="/incentive-withdraw" element={<PrivateRoute component={IncentiveWithdraw}/>} />
            
            
            
            
            
            
            
            
            

              {/* User part Router */}
              <Route
                path="/transfer"
                element={<PrivateRoute component={Transfer} />}
              />
              <Route
                path="/online"
                element={<PrivateRoute component={OnlinePayment} />}
              />
              <Route
                path="/usdtTransfer"
                element={<PrivateRoute component={UsdtTransfer} />}
              />
              <Route
                path="/recharge"
                element={<PrivateRoute component={Recharge} />}
              />
              <Route path="/user" element={<PrivateRoute component={User} />} />
              <Route
                path="/wallet"
                element={<PrivateRoute component={Wallet} />}
              />
              <Route
                path="/calculation"
                element={<PrivateRoute component={Calculation} />}
              />

              <Route
                path="/myTeam"
                element={<PrivateRoute component={MyTeam} />}
              />

              <Route
                path="/addAccount"
                element={<PrivateRoute component={AddAccount} />}
              />

              <Route path="/inviteFriend" element={<InviteFriend />} />

              <Route
                path="/createWallet"
                element={<PrivateRoute component={CreateWallet} />}
              />

              <Route
                path="/teamFund"
                element={<PrivateRoute component={TeamFund} />}
              />

              <Route path="/team" element={<PrivateRoute component={Team} />} />
              {/* Admin part Router */}

              <Route
                path={'/userManagement'}
                element={<PrivateRoute component={UserManagement} />}
              />
              <Route
                path="/showUser/:_id"
                element={<PrivateRoute component={ShowUser} />}
              />
              <Route
                path="/showUser/:_id/balance"
                element={<PrivateRoute component={AdminBalance} />}
              />
              <Route
                path="/showUser/:_id/wallet"
                element={<PrivateRoute component={AdminWallet} />}
              />
              <Route
                path="/showUser/:_id/record"
                element={<PrivateRoute component={AdminRecord} />}
              />
              <Route
                path="/showUser/:_id/team"
                element={<PrivateRoute component={AdminTeam} />}
              />
              <Route
                path="/notification"
                element={<PrivateRoute component={Notification} />}
              />
              <Route path="/profit" element={<Profit />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              {/* <Route path="/staking/:symbol" element={<Staking />} />
              <Route path="/withdraw/:id" element={<Withdraw />} /> */}
            </Routes>
            <Footer />
          </LanguageProvider>
        </Router>
      </Provider>
    </>
  );
}
export default App;
