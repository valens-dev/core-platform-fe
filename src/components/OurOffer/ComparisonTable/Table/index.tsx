import React from "react";
import { Box, Typography } from "@mui/material";
import { Feature, Plan, TextProps } from "../../helpers";
import classnames from "classnames";
import CheckIcon from "@assets/icon/yes-icon.svg?react";
import CrossIcon from "@assets/icon/no-icon.svg?react";
import useStyles from "./styles";

interface ComparisonTableProps {
  text: TextProps;
  features: Feature[];
  plans: Plan[];
}

const Table: React.FC<ComparisonTableProps> = ({ features, plans }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.featureComparisonTable}>
      {features.map((feature, index) => (
        <Box key={index} className={classes.tableRow}>
          <Typography
            className={classnames(classes.tableFeature, {
              [classes.emptyFeatureCell]:
                feature.starter === "" ||
                feature.premium === "" ||
                feature.enterprise === "",
              [classes.nonEmptyFeatureCell]: feature.starter !== "",
            })}
          >
            {feature.name}
          </Typography>
          {plans.map((plan, planIndex) => (
            <Box key={planIndex} className={classes.tableCell}>
              {typeof feature[plan.title.toLowerCase()] === "string" &&
              feature[plan.title.toLowerCase()] !== "" ? (
                <Typography>{feature[plan.title.toLowerCase()]}</Typography>
              ) : feature[plan.title.toLowerCase()] ? (
                <CheckIcon className={classes.yesIcon} />
              ) : feature[plan.title.toLowerCase()] === "" ? (
                ""
              ) : (
                <CrossIcon className={classes.noIcon} />
              )}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Table;
