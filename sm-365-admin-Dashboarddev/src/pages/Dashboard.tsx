
// import { RouterLinks } from "@routes/route-uls";
import BarChart from '@components/BarChart/BarChart';
import Guage from '@components/Guage/Guage';
import LineChart from '@components/LineChart/LineChart';
import LineChartNew from '@components/LineChart/LineChartNew';
import { Box, Grid, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField'
// import { logout } from '@utilities/reducer';
// import { useAuthContext } from '@utilities/State';
// import { useHistory, useParams } from 'react-router';
// import ResponsiveDrawer from '@components/ResponsiveDrawer';

import img1 from '../assets/axis.png';
import graphimg from '../assets/graph.png';
import graphimg1 from '../assets/graph.png';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 140,
            color: '#fff',
            background: '#2b3441',
            border: '1px soild #2b3647',


        },
        selectEmpty: {
            marginTop: theme.spacing(2),
            color: '#fff',
        },
        bodycontent: {
            background: '#060d1e'
        },
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridGap: theme.spacing(3),
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(1),
        },
        divider: {
            margin: theme.spacing(2, 0),
        },
        root: {
            minWidth: 275,
            background: '#1f283a',
            color: '#fff',
            padding: 15,
        },
        root1: {
            minWidth: 80,
            background: '#1f283a',
            color: '#fff',
        },
        root3: {
            minWidth: 80,
            background: '#1f283a',
            color: '#fff',
        },
        root5: {
            minWidth: 80,
            background: '#1f283a',
            color: '#fff',
            padding: 0,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 16,
            color: '#fff',
            fontWeight: 'bolder'
        },
        pos: {
            marginBottom: 12,
            color: '#667f96',
            fontSize: 12,
        },
        image: {
            width: 50,
            height: 50,
            marginRight: 10,
        },
        img: {
            margin: 'auto',
            display: 'flex',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        headingText: {
            fontSize: 35,
            color: '#fff',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 0,
            paddingRight: 25,

        },
        Volumes: {
            color: '#1ad598',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
        },
        axisl: {
            fontWeight: 'bolder',
        },
        graphimg: {
            width: 280,
            height: 100,
            marginRight: 10,
        },
        smallvolumes: {
            fontSize: 40,
            color: '#fff',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
            paddingTop: 30,
            paddingBottom: 30,
            paddingLeft: 20,
            paddingRight: 30,
        },
        smalltext: {
            color: '#1ad598',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
        },
        title1: {
            fontSize: 10,
            color: '#fff',
            fontWeight: 'bolder'
        },
        pos1: {
            marginBottom: 6,
            color: '#667f96',
            fontSize: 8,
        },
        image1: {
            width: 23,
            height: 23,
            marginRight: 10,
        },
        img1: {
            margin: 'auto',
            display: 'flex',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        headingText1: {
            fontSize: 12,
            color: '#fff',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 5,
            paddingRight: 5,

        },
        Volumes1: {
            color: '#1ad598',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
            fontSize: 8,
        },
        axisl1: {
            fontWeight: 'bolder',
            fontSize: 7,
        },
        smallvolumes1: {
            fontSize: 8,
            color: '#fff',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
            paddingTop: 5,
            paddingBottom: 10,
            paddingLeft: 5,
            paddingRight: 10,
        },
        smalltext1: {
            color: '#1ad598',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
        },
        graphimg1: {
            width: 80,
            height: 20,
            marginRight: 10,
        },
        graphimg4: {
            width: 80,
            height: 40,
            marginRight: 10,
        },
        graphimg3: {
            width: 80,
            height: 30,
            marginRight: 10,
        },
        headingText4: {
            fontSize: 24,
            color: '#fff',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 20,
            paddingRight: 30,

        },
        headingText3: {
            fontSize: 13,
            color: '#fff',
            background: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bolder',
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 3,
            paddingRight: 4,

        },
        pos3: {
            marginBottom: 6,
            color: '#667f96',
            fontSize: 5,
        },
    }),
);


const Dashboard: React.FC = () => {
    // const history = useHistory();
    // const { name } = useParams<{ name: string; }>();
    // const { meterId } = useParams<{ meterId: string; }>();
    // const { state, dispatch } = useAuthContext();
    const classes = useStyles();


    return (
        <div className={classes.bodycontent}>
            <FormControl className={classes.formControl}>
                {/* <InputLabel htmlFor="uncontrolled-native">Select Devices</InputLabel> */}
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'Select Devices',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>one</option>
                    <option value={20}>Two </option>
                    <option value={30}>Select Devices</option>
                </NativeSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                {/* <InputLabel htmlFor="uncontrolled-native">Select Devices</InputLabel> */}
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'Select Devices',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>one</option>
                    <option value={20}>Two </option>
                    <option value={30}>Filters</option>
                </NativeSelect>
            </FormControl>



            <Box px={3} py={2}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textPrimary">
                                    WF-308
                                </Typography>
                                <Typography className={classes.pos} color="textPrimary">
                                    WF-308 :1   Vibration :Vibration(X)
                                </Typography>
                                <Grid item>
                                </Grid>

                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={img1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.axisl}>
                                            X-Axis
                                        </Typography>
                                        <Typography className={classes.pos}>
                                            WF-308 :1   Vibration :Vibration(X)
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <Paper className={classes.headingText}>
                                            -120mG
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.headingText}>

                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.Volumes}>
                                            +16.24 %
                                        </Paper>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <ButtonBase className={classes.graphimg}>
                                        <img className={classes.img} alt="complex" src={graphimg} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item></Grid>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={2} >
                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText1}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg1}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>

                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText1}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg1}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>


                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText1}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg1}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>

                    </Grid>

                    <Grid item xs={3}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textPrimary">
                                    WF-308
                                </Typography>
                                <Typography className={classes.pos} color="textPrimary">
                                    WF-308 :1   Vibration :Vibration(X)
                                </Typography>
                                <Grid item>
                                </Grid>

                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={img1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.axisl}>
                                            X-Axis
                                        </Typography>
                                        <Typography className={classes.pos}>
                                            WF-308 :1   Vibration :Vibration(X)
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <Paper className={classes.headingText}>
                                            -120mG
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.headingText}>

                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.Volumes}>
                                            +16.24 %
                                        </Paper>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <ButtonBase className={classes.graphimg}>
                                        <img className={classes.img} alt="complex" src={graphimg} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item></Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText1}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg1}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>
                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText1}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg1}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>
                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText1}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg1}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText1}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg1}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>
                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText1}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg1}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>
                    </Grid>

                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        {/* <Paper className={classes.paper}>
                            <LineChartNew />
                        </Paper> */}

                        <Box display="flex" p={0}>
                            <Box p={0} mb={1} flexGrow={1} >
                            <Card className={classes.root5}>
                            <CardContent>
                                <Typography className={classes.title} color="textPrimary">
                                    WF-308
                                </Typography>
                                <Typography className={classes.pos} color="textPrimary">
                                    WF-308 :1   Vibration :Vibration(X)
                                </Typography>
                                <Grid item>
                                </Grid>

                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={img1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.axisl}>
                                            X-Axis
                                        </Typography>
                                        <Typography className={classes.pos}>
                                            WF-308 :1   Vibration :Vibration(X)
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <Paper className={classes.headingText}>
                                            -120mG
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.headingText}>

                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.Volumes}>
                                            +16.24 %
                                        </Paper>
                                    </Grid>
                                </Grid>

                                {/* <Grid item>
                                    <ButtonBase className={classes.graphimg}>
                                        <img className={classes.img} alt="complex" src={graphimg} />
                                    </ButtonBase>
                                </Grid> */}
                                <Grid item></Grid>

                            </CardContent>
                        </Card>
                            </Box>
                           

                        </Box>
                        <Box display="flex" flexDirection="row" p={0} m={0} >
                            <Box p={0} mr={1}>
                                <Card className={classes.root3}>
                                    <CardContent>

                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <ButtonBase className={classes.image1}>
                                                    <img className={classes.img} alt="complex" src={img1} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.axisl1}>
                                                    X-Axis
                                                </Typography>
                                                <Typography className={classes.pos3}>
                                                    WF-308 :1   Vibration :Vibration(X)
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <Paper className={classes.headingText3}>
                                                    -120mG
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.headingText}>

                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.Volumes1}>
                                                    +16.24 %
                                                </Paper>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <ButtonBase className={classes.graphimg3}>
                                                <img className={classes.img} alt="complex" src={graphimg1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item></Grid>

                                    </CardContent>
                                </Card>

                            </Box>

                            <Box p={0} mr={1}>
                                <Card className={classes.root1}>
                                    <CardContent>

                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <ButtonBase className={classes.image1}>
                                                    <img className={classes.img} alt="complex" src={img1} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.axisl1}>
                                                    X-Axis
                                                </Typography>
                                                <Typography className={classes.pos3}>
                                                    WF-308 :1   Vibration :Vibration(X)
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <Paper className={classes.headingText3}>
                                                    -120mG
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.headingText}>

                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.Volumes1}>
                                                    +16.24 %
                                                </Paper>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <ButtonBase className={classes.graphimg3}>
                                                <img className={classes.img} alt="complex" src={graphimg1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item></Grid>

                                    </CardContent>
                                </Card>

                            </Box>
                            <Box p={0} mr={1}>
                                <Card className={classes.root1}>
                                    <CardContent>

                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <ButtonBase className={classes.image1}>
                                                    <img className={classes.img} alt="complex" src={img1} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.axisl1}>
                                                    X-Axis
                                                </Typography>
                                                <Typography className={classes.pos3}>
                                                    WF-308 :1   Vibration :Vibration(X)
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <Paper className={classes.headingText3}>
                                                    -120mG
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.headingText}>

                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.Volumes1}>
                                                    +16.24 %
                                                </Paper>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <ButtonBase className={classes.graphimg3}>
                                                <img className={classes.img} alt="complex" src={graphimg1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item></Grid>

                                    </CardContent>
                                </Card>

                            </Box>
                            <Box p={0} mr={0}>
                                <Card className={classes.root1}>
                                    <CardContent>

                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <ButtonBase className={classes.image1}>
                                                    <img className={classes.img} alt="complex" src={img1} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.axisl1}>
                                                    X-Axis
                                                </Typography>
                                                <Typography className={classes.pos3}>
                                                    WF-308 :1   Vibration :Vibration(X)
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container direction="row" alignItems="center">
                                            <Grid item>
                                                <Paper className={classes.headingText3}>
                                                    -120mG
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.headingText}>

                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.Volumes1}>
                                                    +16.24 %
                                                </Paper>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <ButtonBase className={classes.graphimg3}>
                                                <img className={classes.img} alt="complex" src={graphimg1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item></Grid>

                                    </CardContent>
                                </Card>

                            </Box>
                        </Box>


                    </Grid>

                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textPrimary">
                                    WF-308
                                </Typography>
                                <Typography className={classes.pos} color="textPrimary">
                                    WF-308 :1   Vibration :Vibration(X)
                                </Typography>
                                <Grid item>
                                </Grid>

                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={img1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.axisl}>
                                            X-Axis
                                        </Typography>
                                        <Typography className={classes.pos}>
                                            WF-308 :1   Vibration :Vibration(X)
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <Paper className={classes.headingText}>
                                            -120mG
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.headingText}>

                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.Volumes}>
                                            +16.24 %
                                        </Paper>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <ButtonBase className={classes.graphimg}>
                                        <img className={classes.img} alt="complex" src={graphimg} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item></Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText4}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg4}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>

                        <Box display="flex" flexDirection="column" p={0} mb={1}>
                            <Card className={classes.root1}>
                                <CardContent>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <ButtonBase className={classes.image1}>
                                                <img className={classes.img} alt="complex" src={img1} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.axisl1}>
                                                X-Axis
                                            </Typography>
                                            <Typography className={classes.pos1}>
                                                WF-308 :1   Vibration :Vibration(X)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                            <Paper className={classes.headingText4}>
                                                -120mG
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.headingText}>

                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className={classes.Volumes1}>
                                                +16.24 %
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <ButtonBase className={classes.graphimg4}>
                                            <img className={classes.img} alt="complex" src={graphimg1} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item></Grid>

                                </CardContent>
                            </Card>

                        </Box>

                    </Grid>

                </Grid>

                {/* <Grid item xs={12} sm={6}>
                    <LineChart />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LineChartNew />
                </Grid>
                 */}

            </Box>

        </div >
        // <ResponsiveDrawer />
    );
};

export default Dashboard;
