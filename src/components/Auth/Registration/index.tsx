import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

import Button from '../../../shared/Button'
import TextField from '../../../shared/TextField'
import useStyles from './styles'

interface IRegistrationFormData {
  username: string
  email: string
  password: string
  termsAndConditions: boolean
}

function Registration() {
  const { control, register, handleSubmit } = useForm<IRegistrationFormData>()
  const { classes } = useStyles()

  const onSubmit = async ({
    termsAndConditions,
    ...values
  }: IRegistrationFormData) => {
    console.log(values)
  }

  return (
    <form
      className={classes.registrationForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Typography variant="body1">Username:</Typography>
        <TextField
          control={control}
          register={register('username')}
          className={classes.textField}
          placeholder="Username"
          fullWidth
        ></TextField>
      </div>
      <div>
        <Typography variant="body1">Email address:</Typography>
        <TextField
          control={control}
          register={register('email')}
          className={classes.textField}
          placeholder="Email"
          fullWidth
        ></TextField>
      </div>
      <div>
        <Typography variant="body1">Password:</Typography>
        <TextField
          control={control}
          register={register('password')}
          className={classes.textField}
          placeholder="********"
          fullWidth
        ></TextField>
      </div>
      <div className={classes.section}>
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
          label="I agree to terms & conditions"
        />
      </div>
      <Button className={classes.registrationBtn} type="submit">
        <Typography>Register Account</Typography>
      </Button>
    </form>
  )
}

export default Registration
