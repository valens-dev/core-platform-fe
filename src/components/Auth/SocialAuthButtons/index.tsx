import { Typography } from '@mui/material'
import { ColorVariant } from '../../../models/styles'

import Button from '../../../shared/Button'
import useStyles from './styles'

interface ISocialAuthButtons {
  isActiveTabLogin: boolean
}

const SocialAuthButtons: React.FC<ISocialAuthButtons> = ({
  isActiveTabLogin,
}) => {
  const googleIcon = '/svg/Google.svg'
  const { classes } = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.lines}>
        <div className={classes.line}></div>
        <Typography variant="body2" className={classes.lightText}>
          Or
        </Typography>
        <div className={classes.line}></div>
      </div>
      <Button
        variant="outlined"
        className={classes.btn}
        colorVariant={ColorVariant.Light}
        startIcon={<img src={googleIcon} />}
      >
        {isActiveTabLogin ? (
          <Typography variant="body2">Sign In With Google</Typography>
        ) : (
          <Typography variant="body2">Register With Google</Typography>
        )}
      </Button>
      <Button
        variant="outlined"
        colorVariant={ColorVariant.Light}
        className={classes.btn}
        startIcon={<img src={googleIcon} />}
      >
        {isActiveTabLogin ? (
          <Typography variant="body2">Sign In With Google</Typography>
        ) : (
          <Typography variant="body2">Register With Google</Typography>
        )}
      </Button>
    </div>
  )
}

export default SocialAuthButtons
