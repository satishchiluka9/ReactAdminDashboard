import React, { useEffect } from 'react';
import {
    AppBar, Drawer, Divider,
    Hidden, IconButton, List, ListItem, ListItemIcon,
    ListItemText, Toolbar, Typography, Badge,
    MenuItem, Menu
} from '@material-ui/core';
import { ROUTE_URLS } from '../routes/route-uls'
import * as MasterIcons from '@material-ui/icons';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import InboxIcon from '@material-ui/icons/Inbox';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import AppLazyRouter from '@routes/AppLazyRouter';
import { useAuthContext } from '@utilities/State';
import InjectAxiosInterceptors from '@helpers/InjectAxiosInterceptors';
import { logout } from '@utilities/reducer';
import { useHistory } from 'react-router';
import useApp from '@hooks/useApp';
import AppMenu from '@components/side-nav-bar/AppMenu';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        grow: {
            flexGrow: 1,
        },
        drawer: {
            [theme.breakpoints.up('md')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('md')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
            // color: theme.mixins.toolbar,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    }),
);

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const ResponsiveDrawer: React.FC<Props> = (props: Props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const { setLoading } = useApp();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const { state, dispatch } = useAuthContext();
    const history = useHistory();

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
        // handleMobileMenuClose();
    };
    const logOut = async () => {
        handleMenuClose();
        setLoading(true);
        //dispatch({ type: ActionType.LoggedOut })
        await logout(dispatch)

        setLoading(false);
        // history.replace(RouterLinks.LOGIN)
    }
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
    );


    useEffect(() => {


        return () => {
        };
    }, [
        state,

    ]);

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <AppMenu />
            {/* <List>
                {[...ROUTE_URLS].map((val, index) => (
                    <ListItem button key={index.toString()}>
                        <ListItemIcon><MasterIcons.EmailOutlined /></ListItemIcon>
                        <ListItemText primary={val.name} />
                    </ListItem>
                ))}
            </List> */}
            <Divider />
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <InjectAxiosInterceptors />
            {

                state?.authenticated ?
                    <>
                        <AppBar position="fixed" className={classes.appBar}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography className={classes.title} variant="h6" noWrap>
                                    Material-UI
                                </Typography>
                                <div className={classes.grow} />
                                <div className={classes.sectionDesktop}>
                                    <IconButton aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={4} color="secondary">
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton aria-label="show 17 new notifications" color="inherit">
                                        <Badge badgeContent={17} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </div>
                                <div className={classes.sectionMobile}>
                                    <IconButton
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="inherit"
                                    >
                                        <MoreIcon />
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>
                        <nav className={classes.drawer} aria-label="mailbox folders">
                            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

                            <Hidden smUp implementation="css">
                                <Drawer
                                    container={container}
                                    variant="temporary"
                                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                    open={mobileOpen}
                                    onClose={handleDrawerToggle}
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    ModalProps={{
                                        keepMounted: true, // Better open performance on mobile.
                                    }}
                                >
                                    {drawer}
                                </Drawer>
                            </Hidden>
                            <Hidden smDown implementation="css">
                                <Drawer
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    variant="permanent"
                                    open
                                >
                                    {drawer}
                                </Drawer>
                            </Hidden>
                        </nav>
                    </>
                    : null
            }

            <main className={classes.content}>
                {
                    state?.authenticated ?
                        <div className={classes.toolbar} /> : null
                }

                <AppLazyRouter />
                {/* <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>


                            <Route
                                exact
                                path="/login"
                                component={React.lazy(() => import('@pages/Login'))}
                            />

                            <Route
                                exact
                                path="/dashboard"
                                component={React.lazy(() => import('@pages/Dashboard'))}

                            />
                            <Route

                                path="/not-found"
                                component={React.lazy(() => import('@pages/NotFound'))}
                            />
                            <Route

                                path="*"
                                component={React.lazy(() => import('@pages/NotFound'))}
                            />
                            <Route path="/">
                                <Redirect to="/login" />
                            </Route>


                        </Switch>
                    </Suspense>
                </BrowserRouter> */}
            </main>
            {/* {renderMobileMenu} */}
            {renderMenu}
        </div>
    );
}

export default ResponsiveDrawer;