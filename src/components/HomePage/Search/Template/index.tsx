import { Box, Typography } from '@mui/material';
import Link from '@shared/Link';
import { ITemplate } from '@components/TemplatesPage/interfaces';
import useStyles from './styles';

function Template({ imgSrc, label, link }: ITemplate) {
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

export default Template;
