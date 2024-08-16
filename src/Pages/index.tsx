import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import WellParse from './WellParsePage';
import Useres from './Users';
import Form from './Form';

import RegistrationForm from '../Components/Forms/RegistrationForm';
import LoginForm from '../Components/Forms/LoginForm';
import WelcomePage from './WelcomePage';
import SurveyForm from '../Components/Forms/SurveyForm';
import RecoveryForm from '../Components/Forms/RecoveryForm';

interface RouteType {
    path: string;
    element: React.ReactElement;
}

const RoutesContext = React.createContext<RouteType[]>([]);

const appRoutes: RouteType[] = [
  { path: 'home', element: <Home /> },
  { path: "wells", element: <WellParse/>},
  { path: "u", element: <Useres/>},
  { path: 'form', element: <Form/> },
  { path: 'registration', element: <RegistrationForm /> },
  { path: 'login', element: <LoginForm /> },
  { path: 'welcome', element: <WelcomePage /> },
  { path: 'survey', element: <SurveyForm /> },
  { path: 'recovery', element: <RecoveryForm /> },
];

const AppR: React.FC = () => {
    return (
      <RoutesContext.Provider value={appRoutes}>
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