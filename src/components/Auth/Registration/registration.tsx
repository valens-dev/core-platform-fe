import { useForm } from 'react-hook-form';

import { Box, Checkbox, Typography, FormControlLabel } from '@mui/material';

import { Button } from '@/shared/button';
import { TextField } from '@/shared/text-field';

import { appText } from '@/constants/strings';

import { type IRegistrationFormData } from './types';

import useStyles from './styles';

const text = appText.auth.registration;

export function Registration(): JSX.Element {
  const { control, register, handleSubmit } = useForm<IRegistrationFormData>();
  const { classes } = useStyles();

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit = async (): Promise<void> => {
    /** TODO: implement */
  };

  return (
    <form
      className={classes.registrationForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label={text.usernameLabel}
        control={control}
        register={register('username')}
        className={classes.textField}
        placeholder={text.usernamePlaceHolder}
        fullWidth
      />
      <TextField
        label={text.emailLabel}
        control={control}
        register={register('email')}
        className={classes.textField}
        placeholder={text.emailPlaceHolder}
        fullWidth
      />
      <TextField
        label={text.passwordLabel}
        control={control}
        register={register('password')}
        className={classes.textField}
        placeholder={text.passwordPlaceHolder}
        fullWidth
      />
      <Box className={classes.section}>
        <FormControlLabel
          className={classes.formControlLabel}
          control={
            <Checkbox
              defaultChecked
              color="default"
              className={classes.checkbox}
              {...register('termsAndConditions')}
            />
          }
          label={text.termsAndConditions}
        />
      </Box>
      <Button className={classes.registrationBtn} type="submit">
        <Typography>{text.registerAccount}</Typography>
      </Button>
    </form>
  );
}
