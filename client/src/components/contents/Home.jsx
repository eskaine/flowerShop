import React from 'react';

function Home() {
    console.log('home token', localStorage.getItem('token'));
    return (
        <div>
            Home
        </div>
    )
};

export default Home;
