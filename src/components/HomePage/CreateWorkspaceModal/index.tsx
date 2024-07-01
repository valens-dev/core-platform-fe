import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@shared/Button';
import TextField from '@shared/TextField';

import { ColorVariant } from '@models/styles';
import { appText } from '@utils/strings';
import { ICreateWorkspaceModal } from '../interfaces';

import XIcon from '@assets/icons/x-icon.svg?react';

import useStyles from './styles';

interface IWorkspaceAuthData {
  workspaceName: string;
  appId: string;
  appClientSecret: string;
  objectId: string;
}

function CreateWorkspaceModal({ handleCloseModal }: ICreateWorkspaceModal) {
  const text = appText.homepage.createWorkspaceModal;
  const navigate = useNavigate();
  const { control, register, handleSubmit } = useForm<IWorkspaceAuthData>();
  const { classes } = useStyles();

  const onSubmit = async () => {};

  const handleOpenWorkspace = () => {
    navigate('/workspace');
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.titleAndCloseButton}>
        <Typography variant="h6">{text.createWorkspace}</Typography>
        <XIcon onClick={handleCloseModal} className={classes.closeButton} />
      </Box>
      <Typography variant="body2" className={classes.note}>
        {text.note}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formWrapper}>
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

export default CreateWorkspaceModal;
