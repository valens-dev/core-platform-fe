import { useForm } from 'react-hook-form';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

import { Button } from '@/shared/button';
import { TextField } from '@/shared/text-field';

import { IRegistrationFormData } from './types';
import { appText } from '@/constants/strings';

import useStyles from './styles';

const text = appText.auth.registration;

export function Registration() {
  const { control, register, handleSubmit } = useForm<IRegistrationFormData>();
  const { classes } = useStyles();

  const onSubmit = async () => {};

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
