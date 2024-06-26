import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import { appText } from '@utils/strings';
import useStyles from './styles';

function HeaderTabs() {
  const text = appText.workspace;
  const [tabValue, setTabValue] = useState(0);
  const { classes } = useStyles();

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Tabs
      value={tabValue}
      onChange={(event, newValue) => handleTabChange(newValue)}
      className={classes.tabs}
    >
      <Tab className={classes.tab} label={text.tabNames.firstWorkspace} />
      <Tab className={classes.tab} label={text.tabNames.secondWorkspace} />
      <Tab className={classes.tab} label={text.tabNames.thirdWorkspace} />
    </Tabs>
  );
}

export default HeaderTabs;
