import React from "react";
import { Typography } from "@mui/material";
import classnames from "classnames";
import useStyles from "./styles";

interface IPlanPriceProps {
  price: string;
  variant: "offerCard" | "comparisonTable";
}

const PlanPrice: React.FC<IPlanPriceProps> = ({ price, variant }) => {
  const { classes } = useStyles();
  const [amount, period] = price.split(" ");

  return (
    <Typography className={classnames(classes.price, classes[variant])}>
      <span className="amount">{amount} </span>
      <span className="period">{period}</span>
    </Typography>
  );
};

export default PlanPrice;
