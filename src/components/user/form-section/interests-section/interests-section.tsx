import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';

import { Box, TextField, Typography, IconButton } from '@mui/material';

import { appText } from '@/constants/strings';

import { Footer } from './footer';
import { TagBody } from './tag-body';

import { useStyles } from './styles';

const text = appText.userInfo;

export function InterestsSection(): React.ReactNode {
  const { classes } = useStyles();

  const [displayInput, setDisplayInput] = useState(false);
  const [titleInput, setTitleInput] = useState('');
  const [tags, setTags] = useState<string[]>(['Lorem', 'Ipsum', 'Modal']);

  function handleAddButtonClick(): void {
    setDisplayInput((prevDisplayInput) => {
      return !prevDisplayInput;
    });
  }

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (titleInput.trim() !== '') {
      setTags((prevTags) => {
        return [...prevTags, titleInput.trim()];
      });
      setTitleInput('');
    }
  }

  return (
    <Box className={classes.sectionInterest}>
      <Box className={classes.titleAndAddButton}>
        <Typography variant="h6">{text.interests}</Typography>
        <IconButton
          className={classes.addButton}
          onClick={handleAddButtonClick}
        >
          <AddIcon />
        </IconButton>
      </Box>
      {displayInput ? (
        <form onSubmit={onFormSubmit}>
          <TextField
            value={titleInput}
            placeholder={text.addYourInterests}
            size="small"
            className={classes.inputField}
            onChange={(e) => {
              setTitleInput(e.currentTarget.value);
            }}
          />
          <button type="submit" className={classes.submitButton}>
            {text.interests}
          </button>
        </form>
      ) : (
        <Box className={classes.note}>
          <Typography variant="body2">{text.addYourInterests}</Typography>
        </Box>
      )}

      <TagBody tags={tags} />
      <Footer />
    </Box>
  );
}
