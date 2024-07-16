/* eslint-disable import/no-default-export */
import { Box, Typography } from '@mui/material';

import FormSection from '@/components/user/form-section/form-section';
import MemberSection from '@/components/user/form-section/member-section/member-section';
import TechnologySection from '@/components/user/form-section/technology-section/technology-section';
import { InterestsSection } from '@/components/user/form-section/interests-section/interests-section';

import { appText } from '@/constants/strings';

import ProfilePicture from '@/assets/icon/profile-picture.svg?react';

import { useStyles } from './styles';

const text = appText.userInfo;

export default function UserPage(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.userInfo}>
        <ProfilePicture className={classes.profilePicture} />
        <Typography variant="h5" className={classes.name}>
          {text.userName}
        </Typography>
      </Box>
      <FormSection />
      <MemberSection />
      <TechnologySection />
      <InterestsSection />
    </Box>
  );
}
