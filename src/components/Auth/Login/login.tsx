import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/button';
import { TextField } from '@/shared/text-field';

import { ILoginFormData } from './types';
import { appText } from '@/constants/strings';
import useStyles from './styles';

const text = appText.auth.login;

export function Login() {
  const navigate = useNavigate();
  const { control, register, handleSubmit } = useForm<ILoginFormData>();
  const { classes } = useStyles();

  const onSubmit = async () => {};

  const handleOpenHomepage = () => {
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
      ></TextField>
      <TextField
        label="Password:"
        control={control}
        register={register('password')}
        className={classes.textField}
        placeholder={text.passwordPlaceHolder}
      ></TextField>
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