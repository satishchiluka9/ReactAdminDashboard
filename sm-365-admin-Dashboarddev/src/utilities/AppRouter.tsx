import React from "react";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";
import loadable from "@loadable/component";
import useAuth from "@hooks/useAuth";
import useApp from "@hooks/useApp";

export type AsyncRouteProps = RouteProps & { importPath: () => Promise<any> };

export function AsyncRoute({ importPath, ...props }: AsyncRouteProps) {
  return <Route {...props} component={loadable(importPath)} />;
}

export function AuthenticatedRoute(props: AsyncRouteProps) {
  const { state } = useAuth();

  if (!state.authenticated) return <Redirect to="/login" />;

  return <AsyncRoute {...props} />;
}

export default function AppRouter(): JSX.Element {
  return (
    <>

    </>
  );
}
