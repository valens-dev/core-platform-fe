import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Link,
  Checkbox,
  Typography,
  FormControlLabel,
} from '@mui/material';

import { Button } from '@/shared/button';
import { TextField } from '@/shared/text-field';

import { appText } from '@/constants/strings';

import { type ILoginFormData } from './types';

import useStyles from './styles';

const text = appText.auth.login;

export function Login(): JSX.Element {
  const navigate = useNavigate();
  const { control, register, handleSubmit } = useForm<ILoginFormData>();
  const { classes } = useStyles();

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit = async (): Promise<void> => {
    /** TODO: implement */
  };

  const handleOpenHomepage = (): void => {
    navigate('/homepage');
  };

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={text.emailLabel}
        control={control}
        register={register('email')}
        className={classes.textField}
        placeholder={text.emailPlaceHolder}
      />
      <TextField
        label="Password:"
        control={control}
        register={register('password')}
        className={classes.textField}
        placeholder={text.passwordPlaceHolder}
      />
      <Box className={classes.section}>
        <FormControlLabel
          className={classes.formControlLabel}
          control={
            <Checkbox
              defaultChecked
              color="default"
              className={classes.checkbox}
              {...register('rememberMe')}
            />
          }
          label={text.rememberMe}
        />
        <Box className={classes.forgotPasswordSection}>
          <Link underline="always" className={classes.link}>
            {text.forgotPassword}
          </Link>
        </Box>
      </Box>
      <Button
        className={classes.loginBtn}
        onClick={handleOpenHomepage}
        type="submit"
      >
        <Typography variant="body1">{text.signIn}</Typography>
      </Button>
    </form>
  );
}
