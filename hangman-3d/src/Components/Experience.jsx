import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Experience() {

    return (
        <div>
            {/* <Navbar /> */}
            
            <Suspense fallback={<p>Loading...</p>}>
                <div className='children'>
                    <Outlet />
                </div>
            </Suspense>

        </div >
    );
}

export default Experience;