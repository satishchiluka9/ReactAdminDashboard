
// import { RouterLinks } from "@routes/route-uls";
import { Button } from '@material-ui/core';
import AdminLazyRouter from '@routes/AdminLazyRouter';
import { RouterLinks } from '@routes/route-uls';
import { AsyncRoute } from '@utilities/AppRouter';
import { Link, Link as RouterLink, LinkProps as RouterLinkProps, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { logout } from '@utilities/reducer';
// import { useAuthContext } from '@utilities/State';
// import { useHistory, useParams } from 'react-router';
// import ResponsiveDrawer from '@components/ResponsiveDrawer';


const Admins: React.FC = () => {
    // const history = useHistory();
    // const { name } = useParams<{ name: string; }>();
    // const { meterId } = useParams<{ meterId: string; }>();
    // const { state, dispatch } = useAuthContext();


    let { path, url } = useRouteMatch();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                component={RouterLink} to={RouterLinks.admin.ADD}
            >
                Add Admin
            </Button>
            <h2>Topics</h2>
            <h4>path: {path} url : {url}</h4>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
                <li>
                    <Link to={`${url}/new`}>New Component</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <DefaultTopic />
                </Route>
                <Route path={`${path}/new`}>
                    <DefaultTopicNew />
                </Route>
                <Route exact path={`${path}/:topicId`}>
                    <Topic />
                </Route>
                <AsyncRoute
                    path="*"
                    importPath={() => import("@pages/NotFound")}
                />
            </Switch>

            <AdminLazyRouter />
        </div>
    );
};
function DefaultTopicNew() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { path, url } = useRouteMatch();


    return (
        <div>
            <h3>New.</h3>

        </div>
    );
}

function DefaultTopic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { path, url } = useRouteMatch();


    return (
        <div>
            <h3>Default : Please select a topic.</h3>
            <h5>path: {path} url : {url}</h5>
        </div>
    );
}
function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.

    const { topicId } = useParams<{ topicId: string; }>();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}


export default Admins;
