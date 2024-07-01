import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Button } from '@/shared/button';
import { TextField } from '@/shared/text-field';

import { ColorVariant } from '@/types/style';

import { appText } from '@/constants/strings';

import XIcon from '@/assets/icon/x-icon.svg?react';

import {
  type IWorkspaceAuthData,
  type ICreateWorkspaceModalProps,
} from './types';

import { useStyles } from './styles';

const text = appText.homePage.createWorkspaceModal;

export function CreateWorkspaceModal({
  handleCloseModal,
}: ICreateWorkspaceModalProps): React.ReactNode {
  const navigate = useNavigate();
  const { control, register, handleSubmit } = useForm<IWorkspaceAuthData>();
  const { classes } = useStyles();

  /* eslint-disable-next-line unicorn/consistent-function-scoping */
  async function onSubmit(): Promise<void> {
    /** TODO: implement */
  }

  function handleOpenWorkspace(): void {
    navigate('/workspace');
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.titleAndCloseButton}>
        <Typography variant="h6">{text.createWorkspace}</Typography>
        <XIcon onClick={handleCloseModal} className={classes.closeButton} />
      </Box>
      <Typography variant="body2" className={classes.note}>
        {text.note}
      </Typography>
      <form
        onSubmit={() => {
          handleSubmit(onSubmit);
        }}
        className={classes.formWrapper}
      >
        <TextField
          className={classes.textField}
          label={text.workspaceTextfieldLabel}
          control={control}
          register={register('workspaceName')}
          placeholder={text.workspaceTextfieldPlaceholder}
        />
        <TextField
          className={classes.textField}
          label={text.appIdLabel}
          control={control}
          register={register('appId')}
          placeholder={text.appIdPlaceholder}
        />
        <TextField
          className={classes.textField}
          label={text.appClientSecretLabel}
          control={control}
          register={register('appClientSecret')}
          placeholder={text.appClientSecretPlaceholder}
        />
        <TextField
          className={classes.textField}
          label={text.objectIdLabel}
          control={control}
          register={register('objectId')}
          placeholder={text.objectIdPlaceholder}
        />
        <Button
          colorVariant={ColorVariant.PrimaryLight}
          className={classes.button}
          onClick={handleOpenWorkspace}
        >
          <Typography>{text.createWorkspace}</Typography>
        </Button>
      </form>
    </Box>
  );
}
