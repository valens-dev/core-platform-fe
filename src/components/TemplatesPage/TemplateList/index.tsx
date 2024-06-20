import { Box } from '@mui/material';

import Template from '@components/HomePage/Search/Template';
import { cardsTemplates } from '@components/HomePage/constants';

import useStyles from './styles';

function TemplateList() {
  const { classes } = useStyles();

  return (
    <Box className={classes.templateGrid}>
      {cardsTemplates.map(({ imgSrc, label, link }, i) => (
        <Template key={i} imgSrc={imgSrc} label={label} link={link} />
      ))}
    </Box>
  );
}

export default TemplateList;
