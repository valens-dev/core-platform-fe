import AddIcon from '@mui/icons-material/Add';

import { Box, Typography, IconButton } from '@mui/material';

import { appText } from '@/constants/strings';

import { useStyles } from './styles';

const text = appText.userInfo;

export function InterestsSection(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.sectionInterest}>
      <Box className={classes.titleAndAddButton}>
        <Typography variant="h6">{text.interests}</Typography>
        <IconButton className={classes.addButton}>
          <AddIcon />
        </IconButton>
      </Box>
      <Box className={classes.note}>
        <Typography variant="body2">Add your intrests</Typography>
      </Box>
    </Box>
  );
}
