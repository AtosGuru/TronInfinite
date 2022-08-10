import React from 'react';
import { Text } from '../../components/languages/Text/Text' 

function ContactUs(props) {
    return (
        <>
           <div className="p-5 relative w-1/2 text-center justify-center m-auto">
                <h1 className="text-white text-5xl text-center font-mono ">Contact Us</h1>
                {/* <p class="  text-xl text-center text-white mt-5"><Text tid={'ABOUT'} /></p> */}
                <br/>
                <br/>
                <br/>
                <p class="  text-xl text-center text-white mt-5">
                    <b>Official website: </b>https://trxinfinite.com
                </p>
                <p class="  text-xl text-center text-white mt-5">
                    <b>Company: </b> Sunbird Software, Inc.
                </p>
                <p class="  text-xl text-center text-white mt-5">
                    <b>Address: </b> 30 Knightbridge Road, Suite 620, Piscataway, NJ 08854
                </p>
                <p class="  text-xl text-center text-white mt-5">
                    <b>Email: </b> troninfinite123@gmail.com
                    info@trxinfinite.com
                </p>
                
            </div>
        </>
    );
}

export default ContactUs;
