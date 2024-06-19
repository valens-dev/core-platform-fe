import { useEffect, useRef, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import QuestionPopUp from '@assets/icon/questionpop-icon.svg?react';
import LeftArrow from '@assets/icon/left-arrow-icon.svg?react';
import RightArrow from '@assets/icon/right-arrow-icon.svg?react';
import Button from '@shared/Button';
import Modal from '@shared/Modal';
import { appText } from '@utils/strings';
import Search from './Search';
import CreateWorkspaceModal from './CreateWorkspaceModal';
import SearchBar from './SearchBar';
import Cards from './Cards';
import TourPopup from './TourPopup';
import useStyles from './styles';

function HomePage() {
  const text = appText.homepage;
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

  const leftArrowClassName = `${classes.arrow} ${location.pathname === '/homepage/templates' ? classes.blackArrow : ''}`;
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

export default HomePage;
