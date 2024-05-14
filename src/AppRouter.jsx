import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar.jsx';
import {NotFound} from "./components/NotFound.jsx";
import Competitions from "./components/Competitions.jsx";
import CompetitionDetails from "./components/CompetitionDetails.jsx";
import {Home} from "./components/Home.jsx";


const AppRouter = () => {
    return (
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/competitions" element={<Competitions />} />
                <Route path="/competitiondetails/:id" element={<CompetitionDetails />} />


                <Route path="*" element={<NotFound />} />

            </Routes>
        </Router>


    );
};

export default AppRouter;
