

import React, { Suspense } from "react";
import { Switch, Route, Redirect, RouteProps, useRouteMatch } from "react-router-dom";
// import loadable from "@loadable/component";
import useAuth from "@hooks/useAuth";
import useApp from "@hooks/useApp";

import { RouterLinks } from "@routes/route-uls";
import AddAdmin from "@pages/admin/AddAdmin";
import { AuthenticatedRoute } from "@utilities/AppRouter";


export default function AdminLazyRouter(): JSX.Element {
    let { path, url } = useRouteMatch();
    return (

        <>
            <Switch>

                <AuthenticatedRoute
                    path='admin/add'
                    importPath={() => import("@pages/admin/AddAdmin")}
                />
            </Switch>
        </>
    );
}
