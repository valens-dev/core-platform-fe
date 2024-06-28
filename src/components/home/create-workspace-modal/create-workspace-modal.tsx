import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Button } from '@/shared/button';
import { TextField } from '@/shared/text-field';

import { ColorVariant } from '@/types/color';

import { appText } from '@/constants/strings';

import { type IWorkspaceAuthFormData } from './types';

import useStyles from './styles';

const text = appText.homePage.createWorkspaceModal;

export function CreateWorkspaceModal() {
  const navigate = useNavigate();
  const { control, register, handleSubmit } = useForm<IWorkspaceAuthFormData>();
  const { classes } = useStyles();

  const onSubmit = async () => {};

  const handleOpenWorkspace = () => {
    navigate('/workspace');
  };

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h6">{text.createWorkspace}</Typography>
      <Typography variant="body2" className={classes.note}>
        {text.note}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formWrapper}>
        <TextField
          label={text.workspaceTextfieldLabel}
          control={control}
          register={register('workspaceName')}
          placeholder={text.workspaceTextfieldPlaceholder}
        />
        <TextField
          label={text.appIdLabel}
          control={control}
          register={register('appId')}
          placeholder={text.appIdPlaceholder}
        />
        <TextField
          label={text.appClientSecretLabel}
          control={control}
          register={register('appClientSecret')}
          placeholder={text.appClientSecretPlaceholder}
        />
        <TextField
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
