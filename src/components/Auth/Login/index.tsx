import { Checkbox, FormControlLabel, Link, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

import Button from '../../../shared/Button'
import TextField from '../../../shared/TextField'
import useStyles from './styles'

interface ILoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

function Login() {
  const { control, register, handleSubmit } = useForm<ILoginFormData>()
  const { classes } = useStyles()

  const onSubmit = async (values: ILoginFormData) => {
    console.log(values)
  }

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email:"
        control={control}
        register={register('email')}
        className={classes.textField}
        placeholder="Email"
      ></TextField>
      <TextField
        label="Password:"
        control={control}
        register={register('password')}
        className={classes.textField}
        placeholder="********"
      ></TextField>
      <div className={classes.section}>
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
          label="Remember me"
        />
        <div className={classes.forgotPasswordSection}>
          <Link underline="always" className={classes.link}>
            Forgot Password?
          </Link>
        </div>
      </div>
      <Button className={classes.loginBtn} type="submit">
        <Typography variant="body1">Sign In</Typography>
      </Button>
    </form>
  )
}

export default Login
