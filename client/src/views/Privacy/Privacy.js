import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../components/languages/Text/Text' 

function Privacy(props) {
    return (
        <>
           <div className="p-5 relative">
                <h1 className="text-white text-5xl text-center font-mono "><Text tid={"privacyPolicy"} /></h1>
                
            </div>
        </>
    );
}

export default Privacy;
