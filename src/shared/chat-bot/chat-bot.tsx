// eslint-disable-next-line import/no-extraneous-dependencies
import ReactChatBotify from 'react-chatbotify';

import { Box } from '@mui/material';

import { CHAT_BOT_FLOW, CHAT_BOT_OPTIONS } from './constants';

import { useStyles } from './styles';

export function ChatBot(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.chatBotWrapper}>
      <ReactChatBotify options={CHAT_BOT_OPTIONS} flow={CHAT_BOT_FLOW} />
    </Box>
  );
}
