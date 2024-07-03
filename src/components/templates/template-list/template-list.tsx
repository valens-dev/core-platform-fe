import { Box } from '@mui/material';

import { Template } from '@/components/home/search/template';

import { CARDS_TEMPLATES } from './constants';

import { useStyles } from './styles';

export function TemplateList(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.templateGrid}>
      {CARDS_TEMPLATES.map(({ imgSrc, label, link }, index) => {
        return (
          /* eslint-disable-next-line react/no-array-index-key */
          <Template key={index} imgSrc={imgSrc} label={label} link={link} />
        );
      })}
    </Box>
  );
}
