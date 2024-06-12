import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import ProfileHeader from '@components/Header/ProfileHeader'
import useStyles from './styles'

function HomePageLayout() {
  const { classes } = useStyles()

  return (
    <>
      <ProfileHeader />
      <Box className={classes.contentWrapper}>
        <Outlet />
      </Box>
    </>
  )
}

export default HomePageLayout
