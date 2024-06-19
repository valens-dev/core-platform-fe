import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LeftArrow from '@assets/icon/left-arrow-icon.svg?react';
import RightArrow from '@assets/icon/right-arrow-icon.svg?react';
import { navData, options } from '@components/HomePage/Search/constants';
import SelectOption from '@shared/SelectOption';

import { appText } from '@utils/strings';
import {
  handleMenuOpen,
  handleMenuClose,
  handleOptionClick,
} from '../../utils/menuHandlers';
import Search from './Search';
import TemplateContent from './TemplateContent';

import useStyles from './styles';

function TemplatesPage() {
  const { classes } = useStyles();
  const text = appText.homepage;
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [hoveredNavItem, setHoveredNavItem] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isMouseOverMenu, setIsMouseOverMenu] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState('Last viewed');

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.templatePosition}>
        <Box className={classes.arrowsWrapper}>
          <LeftArrow
            className={`${classes.arrow} ${classes.blackArrow}`}
            onClick={() => navigate('/homepage')}
          />
          <RightArrow />
        </Box>
        <Typography variant="h4" className={classes.templatesTitle}>
          {text.templates.templates}
        </Typography>
      </Box>
      <Search />
      <Box className={classes.selectOptionWrapper}>
        <SelectOption
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value as string)}
          options={options}
        />
      </Box>
      <TemplateContent
        menuPosition={menuPosition}
        selectedOptions={selectedOptions}
        handleOptionClick={(option) =>
          handleOptionClick(option, setSelectedOptions)
        }
        handleMenuClose={() =>
          handleMenuClose(isMouseOverMenu, setMenuPosition, setHoveredNavItem)
        }
        setIsMouseOverMenu={setIsMouseOverMenu}
        hoveredNavItem={hoveredNavItem}
        handleMenuOpen={(event, index) =>
          handleMenuOpen(event, index, setMenuPosition, setHoveredNavItem)
        }
        navData={navData}
      />
    </Box>
  );
}

export default TemplatesPage;
