import { Box, Typography } from '@mui/material'

import Chip from '@shared/Chip'
import Link from '@shared/Link'

import { ColorVariant } from '@models/styles'

import { appText } from '@utils/strings'

import ArrowRight from '@assets/icon/arrow-right.svg?react'

import useStyles from './styles'

function AboutUs() {
  const text = appText.homepage.aboutUs
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Chip label={text.chipText} />
      <Typography variant="h2">{text.aboutUs}</Typography>
      <Typography variant="body1" className={classes.note}>
        {text.note}
      </Typography>
      <Typography variant="h5">{text.aboutUsText}</Typography>
      <Link
        label={text.learnMore}
        colorVariant={ColorVariant.Primary}
        endIcon={<ArrowRight />}
      />
    </Box>
  )
}

export default AboutUs
