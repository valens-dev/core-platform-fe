import { useSearch } from '@/context/search-provider';

import { Box } from '@mui/material';

import { Template } from '@/components/home/search/template';

import { CARDS_TEMPLATES } from './constants';

import { useStyles } from './styles';

export function TemplateList(): React.ReactNode {
  const { searchField } = useSearch();
  const { classes } = useStyles();

  const filteredTemplates = CARDS_TEMPLATES.filter((template) => {
    return template.label.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <Box className={classes.templateGrid}>
      {filteredTemplates.map(({ label, imgSrc, link }, key: number) => {
        // eslint-disable-next-line react/no-array-index-key
        return <Template key={key} imgSrc={imgSrc} label={label} link={link} />;
      })}
    </Box>
  );
}
