import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

import { Box, Typography, IconButton } from '@mui/material';

import { Modal } from '@/shared/modal';
import { Button } from '@/shared/button';

import { Cards } from '@/components/home/cards';
import { Search } from '@/components/home/search';
import { SearchBar } from '@/components/home/search-bar';
import { TourPopup } from '@/components/home/tour-popup';
import { CreateWorkspaceModal } from '@/components/home/create-workspace-modal';

import { appText } from '@/constants/strings';

import LeftArrow from '@/assets/icon/left-arrow-icon.svg?react';
import RightArrow from '@/assets/icon/right-arrow-icon.svg?react';
import QuestionPopUp from '@/assets/icon/question-pop-icon.svg?react';

import { getLeftArrowClassName } from './utils';

import { useStyles } from './styles';

const text = appText.homePage;

export function HomePage(): React.ReactNode {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const questionPopUpRef = useRef<HTMLButtonElement>(null);
  const tourPopupRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (): void => setIsModalOpen(false);
  const handleCloseTour = (): void => setIsTourOpen(false);
  const handleOpenPopUp = (): void => setIsTourOpen(true);

  useEffect(() => {
    if (questionPopUpRef.current) {
      setIsTourOpen(true);
    }
  }, []);

  const leftArrowClassName = getLeftArrowClassName(location.pathname, classes);
  const handleOpenHomePage = (): void => {
    navigate('/homepage');
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.buttonAndArrowsWrapper}>
        <Box className={classes.arrowsWrapper}>
          <LeftArrow
            className={leftArrowClassName}
            onClick={handleOpenHomePage}
          />
          <RightArrow className={classes.arrow} />
        </Box>
        <Box className={classes.buttonWrapper}>
          <Button onClick={() => setIsModalOpen(true)}>
            <Typography>{text.createWorkspace}</Typography>
          </Button>
        </Box>
      </Box>
      <Search />
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
        <CreateWorkspaceModal />
      </Modal>
      <SearchBar />
      <Cards />
      <IconButton
        ref={questionPopUpRef}
        className={classes.questionPopUp}
        onClick={handleOpenPopUp}
      >
        <QuestionPopUp />
      </IconButton>
      <TourPopup
        open={isTourOpen}
        refEl={questionPopUpRef.current}
        handleClose={handleCloseTour}
        ref={tourPopupRef}
      />
    </Box>
  );
}
