import { useEffect, useRef, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/button';
import { Modal } from '@/shared/modal';
import { Search } from '@/components/home/search';
import { CreateWorkspaceModal } from '@/components/home/create-workspace-modal';
import { SearchBar } from '@/components/home/search-bar';
import { Cards } from '@/components/home/cards';
import { TourPopup } from '@/components/home/tour-popup';
import { getLeftArrowClassName } from './utils';

import QuestionPopUp from '@/assets/icon/question-pop-icon.svg?react';
import LeftArrow from '@/assets/icon/left-arrow-icon.svg?react';
import RightArrow from '@/assets/icon/right-arrow-icon.svg?react';

import { appText } from '@/constants/strings';
import useStyles from './styles';

const text = appText.homePage;

export function HomePage() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const questionPopUpRef = useRef<HTMLButtonElement>(null);
  const tourPopupRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => setIsModalOpen(false);
  const handleCloseTour = () => setIsTourOpen(false);
  const handleOpenPopUp = () => setIsTourOpen(true);

  useEffect(() => {
    if (questionPopUpRef.current) {
      setIsTourOpen(true);
    }
  }, []);

  const leftArrowClassName = getLeftArrowClassName(location.pathname, classes);
  const handleOpenHomePage = () => {
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
      <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        children={<CreateWorkspaceModal />}
      />
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
