import { Select, MenuItem, type SelectChangeEvent } from '@mui/material';

import DownArrowIcon from '@/assets/icon/arrow-down.svg?react';

import useStyles from './styles';

interface ISelectOptionProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { value: string; label: string }[];
}

export function SelectOption({ value, onChange, options }: ISelectOptionProps) {
  const { classes } = useStyles();

  return (
    <Select
      value={value}
      onChange={onChange}
      className={classes.viewSelect}
      IconComponent={DownArrowIcon}
      disableUnderline
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}
