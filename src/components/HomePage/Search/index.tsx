import { Box, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

import TextField from '@shared/TextField'
import Button from '@shared/Button'

import { appText } from '@utils/strings'

import { ColorVariant } from '@models/styles'

import SearchIcon from '@assets/icon/search-icon.svg?react'

import Template from './Template'
import { getTemplateChips } from './templateChips'
import { getTemplates } from './templates'

import useStyles from './styles'

export interface ISearchForm {
  search: string
}

function Search() {
  const text = appText.homepage.search
  const templates = getTemplates()
  const templateChips = getTemplateChips()
  const { control, register } = useForm<ISearchForm>()
  const { classes } = useStyles()

  const getChipStyle = (background: string, color: string) => {
    return { background, '& > span': color, border: `1px solid ${color}` }
  }

  const textfieldEndButton = (
    <Button
      className={classes.textfieldEndButton}
      colorVariant={ColorVariant.Light}
      startIcon={<SearchIcon />}
    >
      <Typography variant="caption">{text.generate}</Typography>
    </Button>
  )

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h6">{text.searchTitle}</Typography>
      <TextField
        control={control}
        register={register('search')}
        placeholder={text.textfieldPlaceholder}
        fullWidth
        className={classes.textfield}
        startIcon={<SearchIcon />}
        endIcon={textfieldEndButton}
      />
      <Box className={classes.chipsWrapper}>
        <Typography>{text.tryThis}</Typography>
        {templateChips.map(({ label, background, color }, i) => (
          <Box
            key={i}
            className={classes.chip}
            style={getChipStyle(background, color)}
          >
            <Typography variant="body2" style={{ color }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className={classes.templateWrapper}>
        {templates.map(({ imgSrc, label, link }, i) => (
          <Template key={i} imgSrc={imgSrc} label={label} link={link} />
        ))}
      </Box>
    </Box>
  )
}

export default Search
