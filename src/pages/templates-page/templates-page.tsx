/* eslint-disable import/no-default-export */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography, type SelectChangeEvent } from '@mui/material';

import { SelectOption } from '@/shared/select-option';

import { Search } from '@/components/templates/search';
import { TemplateContent } from '@/components/templates/template-content';

import { SelectMode } from '@/types/search';

import { OPTIONS } from '@/constants/search';
import { appText } from '@/constants/strings';

import {
  handleMenuOpen,
  handleMenuClose,
  handleOptionClick,
} from '@/utils/menu-handlers';

import LeftArrow from '@/assets/icon/left-arrow-icon.svg?react';
import RightArrow from '@/assets/icon/right-arrow-icon.svg?react';

import { NAV_DATA } from './constants';

import { useStyles } from './styles';

const text = appText.homePage;

export default function TemplatesPage(): React.ReactNode {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState<
    | {
        top: number;
        left: number;
      }
    | undefined
  >();
  const [hoveredNavItem, setHoveredNavItem] = useState<number | undefined>();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isMouseOverMenu, setIsMouseOverMenu] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<SelectMode>(SelectMode.LastViewed);

  function handleViewModeChange(event: SelectChangeEvent<SelectMode>): void {
    setViewMode(event.target.value as SelectMode);
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.templatePosition}>
        <Box className={classes.arrowsWrapper}>
          <LeftArrow
            className={`${classes.arrow} ${classes.blackArrow}`}
            onClick={() => {
              navigate('/homepage');
            }}
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
          onChange={handleViewModeChange}
          options={OPTIONS}
        />
      </Box>
      <TemplateContent
        menuPosition={menuPosition}
        selectedOptions={selectedOptions}
        handleOptionClick={(option) => {
          handleOptionClick(option, setSelectedOptions);
        }}
        handleMenuClose={() => {
          handleMenuClose(isMouseOverMenu, setMenuPosition, setHoveredNavItem);
        }}
        setIsMouseOverMenu={setIsMouseOverMenu}
        hoveredNavItem={hoveredNavItem}
        handleMenuOpen={(event, index) => {
          handleMenuOpen(event, index, setMenuPosition, setHoveredNavItem);
        }}
        navData={NAV_DATA}
      />
    </Box>
  );
}
