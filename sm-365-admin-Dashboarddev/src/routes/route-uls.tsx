
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';


export const RouterLinks = {
    LOGIN: '/login',
    DASHBOARD: '/dashboard',
    FORGOT_PASSWORD: '/forgot-password',
    ADMINS: '/admin',
    admin: {
        ADD: '/add'
    }
}

export const ROUTE_URLS: RouteUrls[] = [
    {
        icon: `${AccountCircle.name}`,
        name: 'Dashboard',
        urlPath: RouterLinks.DASHBOARD,
        access: true,
    },
    {
        icon: `${AccountCircle.name}`,
        name: 'Admins',
        urlPath: RouterLinks.ADMINS,
        access: true,
        childrens: [
            {
                icon: `${SearchIcon.name}`,
                name: 'Add Admins',
                urlPath: `${RouterLinks.ADMINS}`,
                access: true,
            }
        ]
    }
]



export interface RouteUrls {
    // icon?: string | OverridableComponent<SvgIconTypeMap>;
    icon: string;
    name: string;
    urlPath?: string;
    access: boolean
    childrens?: RouteUrls[]
}