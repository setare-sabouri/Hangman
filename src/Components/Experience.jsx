import React, { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';

function Experience() {

    return (
        <div>            
            <Suspense fallback={<p>Loading...</p>}>
                <div className='children'>
                    <Outlet />
                </div>
            </Suspense>

        </div >
    );
}

export default Experience;