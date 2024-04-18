import { useForm } from 'react-hook-form'
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'

import Button from '@shared/Button'
import TextField from '@shared/TextField'

import { IRegistrationFormData } from '@utils/interfaces'
import { appText } from '@utils/strings'

import useStyles from './styles'

function Registration() {
  const text = appText.auth.registration
  const { control, register, handleSubmit } = useForm<IRegistrationFormData>()
  const { classes } = useStyles()

  const onSubmit = async () => {}

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
  )
}

export default Registration
