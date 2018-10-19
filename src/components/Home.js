import React from 'react';
import WelcomePage from './WelcomePage';

const Home = () => {
    const welcomeMessage = { 
        welcome: "Hi",
        name: "I'm Brady",
        site: "This is my new site",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }

    return (
        <div>
            <WelcomePage message={welcomeMessage} />
        </div>
    );
};

export default Home;