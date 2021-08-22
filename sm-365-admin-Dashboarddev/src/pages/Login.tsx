import React, { Fragment, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
    Container
} from '@material-ui/core';
import { useAuthContext } from '@utilities/State';
import useApp from '@hooks/useApp';
import { LoginRequest } from '@interfaces/login';
import { ActionType } from '@utilities/actions';
import { post } from '@helpers/axiosInstance';
import { User } from '@utilities/iAuth';
import { ErrorResponse, HttpUrls } from '@utilities/apis';
import { AlertMsgTypes } from '@components/custom-sneck-bar';
import { useHistory } from 'react-router';
import { RouterLinks } from "@routes/route-uls";

const Login = () => {
    const { state, dispatch } = useAuthContext();
    const { setLoading, setAlertMessage } = useApp();
    const history = useHistory();

    const validationSchema = Yup.object().shape({
        emailId: Yup.string()
            .default('superadmin@vendor1.com.my')
            .required('Email Id is required')
            .email('Email Id is invalid'),
        password: Yup.string()
            .default('password@123')
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),

        rememberMe: Yup.bool()
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        if (state?.authenticated) {
            history?.replace(RouterLinks.DASHBOARD)
        }

        return () => {
        };
    }, [history, state]);

    const onSubmit = async (loginData: LoginRequest) => {
        // console.log(JSON.stringify(data, null, 2));
        setLoading(true);

        // dispatch({ type: ActionType.LoginProgress, payload: { time: Math.floor(Math.random() * 100), status: true } })

        //dispatch({ type: ActionType.LoginProgress, payload: true })
        dispatch({ type: ActionType.LoginProgress, payload: { time: Math.floor(Math.random() * 100), status: true } })

        await post(history, HttpUrls.LOGIN, loginData)
            .then(res => {
                dispatch({ type: ActionType.LoggedIn, payload: {} as User })
                setLoading(false);
            })
            .catch((error) => {
                const res = error.data as ErrorResponse;
                setAlertMessage({ msgType: AlertMsgTypes.Error, msgs: [res.ErrorMessage] })
                setLoading(false);
                // setMessage("Auth failure! Please create an account");
                // setIserror(true)
            })

    };

    return (
        <Container maxWidth="sm">
            <form autoComplete="off">
                <Fragment>

                    <Paper>
                        <Box px={3} py={2}>
                            <Typography variant="h6" align="center">
                                Admin Login Env: {process.env.REACT_APP_ENV} {process.env.REACT_APP_IS_LOCAL}
                            </Typography>

                            <Grid container spacing={1}>

                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        id="emailId"
                                        label="Email Id"
                                        fullWidth
                                        margin="dense"
                                        {...register('emailId')}
                                        defaultValue="superadmin@vendor1.com.my"
                                        error={errors.emailId ? true : false}
                                    />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.emailId?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        id="password"
                                        label="Password"
                                        type="password"
                                        fullWidth
                                        margin="dense"
                                        {...register('password')}
                                        error={errors.password ? true : false}
                                        defaultValue="password@123"
                                    />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.password?.message}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Controller
                                                control={control}
                                                name="rememberMe"
                                                defaultValue="false"
                                                // inputRef={register()}
                                                render={({ field: { onChange } }) => (
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={e => onChange(e.target.checked)}
                                                    />
                                                )}
                                            />
                                        }
                                        label={
                                            <Typography color={errors.rememberMe ? 'error' : 'inherit'}>
                                                Remember Me
                                            </Typography>
                                        }
                                    />
                                    <br />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.rememberMe
                                            ? '(' + errors.rememberMe.message + ')'
                                            : ''}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box mt={3} textAlign='center'>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    Login
                                </Button>
                            </Box>
                        </Box>

                    </Paper>
                </Fragment>
            </form>
        </Container>
    );
};

export default Login;
