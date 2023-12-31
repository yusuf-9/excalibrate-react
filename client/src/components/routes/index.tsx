import React from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';


import Welcome from "@/pages/welcome";
import Room from '@/pages/room';

import { ROUTES as ROUTE_NAMES } from '@/constants';

const Routes: React.FC = () => {
    return (
        <Router>
            <RouterRoutes>
                <Route path={ROUTE_NAMES.welcome} element={<Welcome />} />
                <Route path={ROUTE_NAMES.board} element={<Room />} />
            </RouterRoutes>
        </Router>
    );
};

export default Routes;
