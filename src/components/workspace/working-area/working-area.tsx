import { useState } from 'react';

import { Box, Button } from '@mui/material';

import { Modal } from '@/shared/modal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal(): void {
    return setIsModalOpen(false);
  }

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
            return setIsModalOpen(true);
          }}
          variant="contained"
          className={classes.buttonVerification}
        >
          {text.verificate}
        </Button>
      </Box>
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
        <CreateVerificationModal handleCloseModal={handleCloseModal} />
      </Modal>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.selectedTools}>
          <ToolItem tools={selectedTools} onDelete={handleDeleteTool} />
        </Box>
      </Box>
    </Box>
  );
}
