import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import TextField from '@shared/TextField';
import Button from '@shared/Button';

import { ColorVariant } from '@models/styles';

import { appText } from '@utils/strings';

import useStyles from './styles';

interface IWorkspaceAuthData {
  workspaceName: string;
  appId: string;
  appClientSecret: string;
  objectId: string;
}

function CreateWorkspaceModal() {
  const text = appText.homepage.createWorkspaceModal;
  const { control, register, handleSubmit } = useForm<IWorkspaceAuthData>();
  const { classes } = useStyles();

  const onSubmit = async () => {};

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
        >
          <Typography>{text.createWorkspace}</Typography>
        </Button>
      </form>
    </Box>
  );
}

export default CreateWorkspaceModal;
