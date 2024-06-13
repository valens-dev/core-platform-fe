import { Box, Link as MuiLink } from "@mui/material";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { ColorVariant } from "@models/styles";

import { ILink } from "@utils/interfaces";

import useStyles from "./styles";

function Link({
  label,
  href = "",
  colorVariant = ColorVariant.Light,
  className,
  underline = true,
  endIcon,
}: ILink) {
  const navigate = useNavigate();
  const { classes } = useStyles({ colorVariant, underline });

  return (
    <Box className={classes.wrapper} onClick={() => navigate(href)}>
      <MuiLink className={classNames(classes.link, className)}>{label}</MuiLink>
      {endIcon}
    </Box>
  );
}

export default Link;
