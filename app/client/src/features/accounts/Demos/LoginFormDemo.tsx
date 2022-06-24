import * as React from 'react';
import { Button, InputAdornment, IconButton, Link as MUILink, Grid, Typography, TextField } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Form } from '@local/components/Form';
import { FormContent } from '@local/components/FormContent';
import { LoadingButton } from '@local/components/LoadingButton';
import { useForm } from '@local/features/core';

const useStyles = makeStyles((theme) => ({
    link: {
        padding: theme.spacing(0.5, 0, 0, 0),
    },
    buttonGroup: {
        '& > *': {
            margin: theme.spacing(1, 0),
        },
    },
    divider: {
        maxWidth: '75%',
        marginLeft: '12.5%',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
    },
}));

interface TLoginForm {
    [index: string]: string;
    email: string;
    password: string;
}

const intialState: TLoginForm = { email: '', password: '' };

export function LoginFormDemo() {
    const classes = useStyles();
    const [isPassVisible, setIsPassVisible] = React.useState(false);
    const [form, errors, , handleChange] = useForm(intialState);

    return (
        <Grid container justifyContent='center'>
            <Grid item container xs={12} direction='column' alignItems='center'>
                {/* <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar> */}
                <Typography component='h1' variant='h6'>
                    Login
                </Typography>
            </Grid>
            <Form className={classes.form} onSubmit={() => {}}>
                <FormContent>
                    <TextField
                        id='login-email'
                        required
                        type='email'
                        value={form.email}
                        helperText={errors.email}
                        error={Boolean(errors.email)}
                        onChange={handleChange('email')}
                        label='Email'
                        autoFocus
                    />
                    <>
                        <TextField
                            id='login-password'
                            required
                            error={Boolean(errors.password)}
                            type={isPassVisible ? 'text' : 'password'}
                            value={form.password}
                            onChange={handleChange('password')}
                            helperText={errors.password}
                            label='Password'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={() => setIsPassVisible(!isPassVisible)}
                                            onMouseDown={(e) => e.preventDefault()}
                                            edge='end'
                                            size='large'
                                        >
                                            {isPassVisible ? (
                                                <VisibilityOff color={errors.password ? 'error' : undefined} />
                                            ) : (
                                                <Visibility color={errors.password ? 'error' : undefined} />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Grid container justifyContent='flex-end'>
                            <MUILink className={classes.link} color='primary' underline='hover'>
                                Forgot Password?
                            </MUILink>
                        </Grid>
                    </>
                </FormContent>
                <Grid container item direction='column' className={classes.buttonGroup}>
                    <LoadingButton loading={false}>
                        <Button fullWidth variant='contained' color='secondary'>
                            Login
                        </Button>
                    </LoadingButton>
                </Grid>
            </Form>
        </Grid>
    );
}