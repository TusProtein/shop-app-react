import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
// import Navbar from './components/Header/Header';
import { routes } from './routes';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route, index) => {
                        const Layout = route.isShowHeader
                            ? DefaultComponent
                            : Fragment;
                        const Page = route.page;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
