import { useState } from 'react'
import { Box, Typography } from '@mui/material'

import Button from '@shared/Button'
import Modal from '@shared/Modal'

import Search from './Search'
import CreateWorkspaceModal from './CreateWorkspaceModal'

import { appText } from '@utils/strings'

import useStyles from './styles'

function HomePage() {
  const text = appText.homepage
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { classes } = useStyles()

  const handleCloseModal = () => setIsModalOpen(false)

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
    </Box>
  )
}

export default HomePage
