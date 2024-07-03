import { Select, MenuItem, type SelectChangeEvent } from '@mui/material';

import { type SelectMode } from '@/constants/enums';

import DownArrowIcon from '@/assets/icon/arrow-down.svg?react';

import { useStyles } from './styles';

interface ISelectOptionProps {
  value: SelectMode;
  onChange: (event: SelectChangeEvent<SelectMode>) => void;
  options: { value: SelectMode; label: string }[];
}

export function SelectOption({
  value,
  onChange,
  options,
}: ISelectOptionProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Select
      value={value}
      onChange={onChange}
      className={classes.viewSelect}
      IconComponent={DownArrowIcon}
      disableUnderline
    >
      {options.map((option) => {
        return (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </Select>
  );
}
