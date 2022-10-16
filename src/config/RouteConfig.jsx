import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Begin from '../pages/begin/Begin';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/SignUp';

const RouteConfig = () => {
    return (
        <Routes>
            <Route path='/' element={<Begin />} />
            <Route path='/dangky' element={<SignUp/>} />
            <Route path='/dangnhap' element={<Login />} />
        </Routes>
    )
}

export default RouteConfig;