import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

import AppMenuItem from './AppMenuItem'
import { RouterLinks } from '@routes/route-uls'

const appMenuItems = [
    {
        name: 'Dashboard',
        link: '/',
        Icon: IconDashboard,
    },
    {
        name: 'Orders',
        link: '/orders',
        Icon: IconShoppingCart,
    },
    {
        name: 'Customers',
        link: '/customers',
        Icon: IconPeople,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
    },
    
    {
        name: 'Admin',
        Icon: IconLibraryBooks,
        items: [
            {
                name: 'Add ',
                link: `${RouterLinks.ADMINS}`,
            },
            {
                name: 'Level 2',
                items: [
                    {
                        name: 'Level 3',
                    },
                    {
                        name: 'Level 3',
                    },
                ],
            },
        ],
    },
]

const AppMenu: React.FC = () => {
    const classes = useStyles()

    return (
        <List component="nav" className={classes.appMenu} disablePadding>
            {/* <AppMenuItem {...appMenuItems[0]} /> */}
            {appMenuItems.map((item, index) => (
                <AppMenuItem {...item} key={index} />
            ))}
        </List>
    )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
    createStyles({
        appMenu: {
            width: '100%',
            background: '#182138',
            border: 'none',
        },
        navList: {
            width: drawerWidth,
        },
        menuItem: {
            width: drawerWidth,
        },
        menuItemIcon: {
            color: '#809fb8',
        },
    }),
)

export default AppMenu
