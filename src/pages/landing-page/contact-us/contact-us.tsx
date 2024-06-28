import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { appText } from '@/constants/strings';

import { IContactFormData } from './types';

import { TextField } from '@/shared/text-field';
import { Button } from '@/shared/button';

import useStyles from './styles';

interface IContactUsProps {
  contactUsRef: React.RefObject<HTMLDivElement>;
}

const text = appText.landingPage.contactUs;

export function ContactUs({ contactUsRef }: IContactUsProps) {
  const { control, register, handleSubmit } = useForm<IContactFormData>();
  const { classes } = useStyles();

  const onSubmit = () => {};

  return (
    <Box className={classes.wrapper} ref={contactUsRef}>
      <Typography variant="h2" className={classes.contactUs}>
        {text.contactUs}
      </Typography>
      <Typography align="center" variant="body1" className={classes.note}>
        {text.note}
      </Typography>
      <form className={classes.contactUsForm} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          control={control}
          register={register('name')}
          placeholder={text.namePlaceHolder}
          className={classes.textfield}
          size="medium"
        />
        <TextField
          control={control}
          register={register('email')}
          placeholder={text.emailPlaceHolder}
          className={classes.textfield}
          size="medium"
        />
        <TextField
          control={control}
          register={register('message')}
          placeholder={text.typeYourMessageHere}
          className={classes.textfield}
          multiline
          rows={7}
        />
        <Box className={classes.contactUsBtnWrapper}>
          <Button type="submit" className={classes.contactUsBtn}>
            <Typography variant="button">{text.letsConnect}</Typography>
          </Button>
        </Box>
      </form>
    </Box>
  );
}