import { useEffect, useRef, useState } from "react";

import { Box, Typography, IconButton } from "@mui/material";

import QuestionPopUp from "@assets/icon/questionpop-icon.svg?react";

import Button from "@shared/Button";
import Modal from "@shared/Modal";

import { appText } from "@utils/strings";

import Search from "./Search";
import CreateWorkspaceModal from "./CreateWorkspaceModal";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import TourPopup from "./TourPopup";

import useStyles from "./styles";

function HomePage() {
  const text = appText.homepage;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const questionPopUpRef = useRef<HTMLButtonElement>(null);
  const { classes } = useStyles();

  const handleCloseModal = () => setIsModalOpen(false);
  const handleCloseTour = () => setIsTourOpen(false);
  const handleOpenPopUp = () => setIsTourOpen(true);

  useEffect(() => {
    if (questionPopUpRef.current) {
      setIsTourOpen(true);
    }
  }, []);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.buttonWrapper}>
        <Button onClick={() => setIsModalOpen(true)}>
          <Typography>{text.createWorkspace}</Typography>
        </Button>
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
        forwardRef={questionPopUpRef.current}
        handleClose={handleCloseTour}
      />
    </Box>
  );
}

export default HomePage;
