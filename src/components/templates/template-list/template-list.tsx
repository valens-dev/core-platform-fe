import { Box } from '@mui/material';

import { Template } from '@/components/home/search/template';
import { CARDS_TEMPLATES } from './constants';

import useStyles from './styles';

export function TemplateList() {
  const { classes } = useStyles();

  return (
    <Box className={classes.templateGrid}>
      {CARDS_TEMPLATES.map(({ imgSrc, label, link }, i) => (
        <Template key={i} imgSrc={imgSrc} label={label} link={link} />
      ))}
    </Box>
  );
}