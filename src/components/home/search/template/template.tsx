import { Box, Typography } from '@mui/material';

import { Link } from '@/shared/link';

import useStyles from './styles';

interface ITemplateProps {
  imgSrc: string;
  label: string;
  link: string;
}

export function Template({ imgSrc, label, link }: ITemplateProps): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.imgWrapper}>
        <img src={imgSrc} className={classes.image} />
      </Box>
      <Box className={classes.description}>
        <Typography>{label}</Typography>
        <Link label={link} underline={false} className={classes.link} />
      </Box>
    </Box>
  );
}
