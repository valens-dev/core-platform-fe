import { Box, Typography } from '@mui/material';

import { Link } from '@/shared/link';
import { LazyImage } from '@/shared/lazy-image';

import { useStyles } from './styles';

interface ITemplateProps {
  imgSrc: string;
  label: string;
  link: string;
}

export function Template({
  imgSrc,
  label,
  link,
}: ITemplateProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.imgWrapper}>
        <LazyImage src={imgSrc} alt={label} className={classes.image} />
      </Box>
      <Box className={classes.description}>
        <Typography>{label}</Typography>
        <Link label={link} underline={false} className={classes.link} />
      </Box>
    </Box>
  );
}
