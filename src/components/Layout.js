import React from 'react';
import Navigationbar from './Navigationbar';

export default function Layout({children}){
    return(
        <div>
            <Navigationbar/>
            {children}
        </div>
    )
}