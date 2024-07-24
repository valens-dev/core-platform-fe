import { useModal } from 'hooks/use-modal';

import { Box, Button } from '@mui/material';

import { ChatBot } from '@/shared/chat-bot';

import { type ITool } from '@/types/tool';

import { appText } from '@/constants/strings';

import { CreateVerificationModal } from '../create-verification-modal';

import { ToolItem } from './tool-item';

import { type IWorkingAreaProps } from './types';

import { useStyles } from './styles';

const text = appText.workspacePage.menuItems;

export function WorkingArea({
  selectedTools,
  setSelectedTools,
}: IWorkingAreaProps): React.ReactNode {
  const { classes } = useStyles();
  const { isModalOpen, handleCloseModal, setIsModalOpen } = useModal(false);

  function handleDeleteTool(tool: ITool): void {
    setSelectedTools((prevTools) => {
      return prevTools.filter((t) => {
        return t.tool !== tool.tool;
      });
    });
  }

  return (
    <Box className={classes.rightSide}>
      <Box className={classes.buttons}>
        <Button variant="outlined" className={classes.buttonOutlined}>
          {text.additionalResources}
        </Button>
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
          variant="contained"
          className={classes.buttonVerification}
        >
          {text.verificate}
        </Button>
      </Box>
      <CreateVerificationModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
      <Box className={classes.backgroundContainer}>
        <Box className={classes.selectedTools}>
          <ToolItem tools={selectedTools} onDelete={handleDeleteTool} />
        </Box>
      </Box>
      <Box className={classes.chatBot}>
        <ChatBot />
      </Box>
    </Box>
  );
}
