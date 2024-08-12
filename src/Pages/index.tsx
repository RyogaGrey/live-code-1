import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import WellParse from './WellParsePage';
import Useres from './Users';
import Form from './Form';

interface RouteType {
    path: string;
    element: React.ReactElement;
}

const RoutesContext = React.createContext<RouteType[]>([]);

const homeRoute: RouteType = { path: "home", element: <Home/>}
const wellParse: RouteType = { path: "wells", element: <WellParse/>}
const useresRoute: RouteType = { path: "u", element: <Useres/>}
const formRoute: RouteType = { path: 'form', element: <Form/> };
const errRoute: RouteType = {path: "*", element: homeRoute.element}

const routes: RouteType[] = [homeRoute, wellParse, errRoute, useresRoute, formRoute];

const AppR: React.FC = () => {
    return (
      <RoutesContext.Provider value={routes}>
        <BrowserRouter>
          <RoutesComponent />
        </BrowserRouter>
      </RoutesContext.Provider>
    );
  };

const RoutesComponent: React.FC = () => {
    const routes = React.useContext(RoutesContext);
    return (
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    );
  };

export default AppR;