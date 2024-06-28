import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

import { appText } from '@/constants/strings';
import useStyles from './styles';

const text = appText.workspacePage;

export function HeaderTabs() {
  const [tabValue, setTabValue] = useState(0);
  const { classes } = useStyles();

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Tabs
      value={tabValue}
      onChange={(_, newValue) => handleTabChange(newValue)}
      className={classes.tabs}
    >
      <Tab className={classes.tab} label={text.tabNames.firstWorkspace} />
      <Tab className={classes.tab} label={text.tabNames.secondWorkspace} />
      <Tab className={classes.tab} label={text.tabNames.thirdWorkspace} />
    </Tabs>
  );
}