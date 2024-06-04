import React from "react";
import { Box, Typography } from "@mui/material";
import { TextProps } from "../helpers";
import classnames from "classnames";
import useStyles from "./styles";
import { Feature, Plan } from "../helpers";
import PlanPrice from "../OfferCard/PlanPrice";
import Table from "./Table";

interface ComparisonTableProps {
  text: TextProps;
  features: Feature[];
  plans: Plan[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  text,
  plans,
  features,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.featureComparisonWrapper}>
      <Box className={classes.headerRow}>
        <Typography variant="h2" className={classes.featureComparisonTitle}>
          {text.compareFeaturesTitle}
        </Typography>
        {plans.map((plan, index) => (
          <Box key={index} className={classes.tableHeaderPlan}>
            <Typography className={classes.planTitle}>{plan.title}</Typography>
            <Typography
              className={classnames(classes.planPrice, {
                [classes.starterPrice]: plan.title === "Starter",
                [classes.premiumPrice]: plan.title === "Premium",
                [classes.enterprisePrice]: plan.title === "Enterprise",
              })}
            >
              <PlanPrice price={plan.price} variant="comparisonTable" />
            </Typography>
          </Box>
        ))}
      </Box>
      <Table text={text} features={features} plans={plans} />
    </Box>
  );
};

export default ComparisonTable;
