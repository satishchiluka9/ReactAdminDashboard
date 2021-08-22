// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import NotFound from '../pages/NotFound';

// const Login = lazy(() => import('../pages/Login'));
// const Settings = lazy(() => import('../pages/Settings'));

// const AppRouter = () => (
//     <Router>
//         <Suspense fallback={<div>Loading...</div>}>
//             <Switch>
//                 {/* <Route exact path="/" component={Login} /> */}

//                 <Route path="/login" component={Login} />
//                 <Route path="/settings" component={Settings} />
//                 <Route path="/" exact={true}>
//                     <Redirect to="/login" />
//                 </Route>

//                 <Route path="*">
//                     <NotFound />
//                 </Route>
//             </Switch>
//         </Suspense>
//     </Router>
// );

// export default AppRouter;

import React, { Suspense } from "react";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";
// import loadable from "@loadable/component";
import useAuth from "@hooks/useAuth";
import useApp from "@hooks/useApp";
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterLinks } from "@routes/route-uls";
import AdminLazyRouter from "./AdminLazyRouter";
import { AsyncRoute, AuthenticatedRoute } from "@utilities/AppRouter";

export default function AppLazyRouter(): JSX.Element {
    return (

        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {/* <AsyncRoute
                        exact
                        path="/login"
                        importPath={() => import("@pages/Login")}
                    /> */}
                    <Route
                        exact
                        path={RouterLinks.LOGIN}
                        component={React.lazy(() => import('@pages/Login'))}
                    />

                    <AuthenticatedRoute
                        exact
                        path="/dashboard"
                        importPath={() => import("@pages/Dashboard")}
                    />

                    {/* Admin Routes starts */}
                    <AuthenticatedRoute
                        exact
                        path={RouterLinks.ADMINS}
                        importPath={() => import("@pages/admin/Admins")}
                    />


                    {/* Admin Routes finish */}
                    <AsyncRoute

                        path="/not-found"
                        importPath={() => import("@pages/NotFound")}
                    />

                    <Route path="/" exact>
                        <Redirect to="/login" />
                    </Route>
                    <AsyncRoute

                        path="*"
                        importPath={() => import("@pages/NotFound")}
                    />

                </Switch>
            </Suspense>

        </>
    );
}
