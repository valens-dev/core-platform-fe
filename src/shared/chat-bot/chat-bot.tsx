import ReactChatBotify from 'react-chatbotify';

import { useChatBotFlow, useChatBotOptions } from 'hooks/use-chat-bot-config';

import { Box } from '@mui/material';

import { useStyles } from './styles';

export function ChatBot(): React.ReactNode {
  const { classes } = useStyles();
  const chatBotOptions = useChatBotOptions();
  const chatBotFlow = useChatBotFlow();

  return (
    <Box className={classes.chatBotWrapper}>
      <ReactChatBotify options={chatBotOptions} flow={chatBotFlow} />
    </Box>
  );
}
