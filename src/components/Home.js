import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContexts';

const Home = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <h3>This is home for {user?.email}</h3>
        </div>
    );
};

export default Home;