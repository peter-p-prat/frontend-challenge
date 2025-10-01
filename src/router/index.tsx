import React from "react";
import {Route, Routes} from "react-router-dom";

import {Chat, Explore, Insights, Iris} from "pages";

import RedirectRouter from "./redirectRouter";
import {ROUTES} from "./routes";

const MainRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="*" Component={RedirectRouter} />
            <Route path={ROUTES.iris} Component={Iris} />
            <Route path={ROUTES.chat} Component={Chat} />
            <Route path={ROUTES.insights} Component={Insights} />
            <Route path={ROUTES.explore} Component={Explore} />
        </Routes>
    );
};

export default MainRouter;
