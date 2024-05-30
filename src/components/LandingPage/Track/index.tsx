import { Box } from '@mui/material'

import Marquee from 'react-fast-marquee'

import { getIcons } from './icons'

import useStyles from './styles'

const Track = () => {
  const icons = getIcons()
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.marqueeBox}>
        <Marquee gradient className={classes.marqueeContent} speed={300}>
          {icons.map((Icon, i) => (
            <Icon key={i} className={classes.marqueeItem} />
          ))}
        </Marquee>
      </Box>
    </Box>
  )
}

export default Track
