import { Box } from '@mui/material';

import { TagItem } from './tag-item';

import { useStyles } from './styles';

interface ITagBodyProps {
  tags: string[];
}

export function TagBody({ tags }: ITagBodyProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.tagBody}>
      {tags.map((tag) => {
        return <TagItem key={tag} tagTitle={tag} />;
      })}
    </Box>
  );
}
