import React from "react";
import { Box, Typography, Button } from "@mui/material";
import classnames from "classnames";
import CheckIcon from "@assets/icon/check-icon.svg?react";
import StarIcon from "@assets/icon/star-icon.svg?react";
import { IPlanProps, ITextProps } from "../helpers";
import PlanPrice from "./PlanPrice";
import useStyles from "./styles";

interface OfferCardProps {
  plan: IPlanProps;
  text: ITextProps;
}

const OfferCard: React.FC<OfferCardProps> = ({ plan, text }) => {
  const { classes } = useStyles();

  function handleFeatureList() {
    return plan.features.map((feature, index) => (
      <li
        key={index}
        className={classnames({
          [classes.featureItem]: true,
          [classes.titleFeature]: feature.includes(text.benefitText),
          [classes.textFeature]: !feature.includes(text.benefitText),
        })}
      >
        {!feature.includes(text.benefitText) && (
          <CheckIcon className={classes.checkIcon} />
        )}
        {feature}
      </li>
    ));
  }

  function handleOfferCard() {
    return classnames(classes.plan, {
      [classes.starter]: plan.title === "Starter",
      [classes.premium]: plan.title === "Premium",
      [classes.enterprise]: plan.title === "Enterprise",
    });
  }

  return (
    <Box>
      <Box className={handleOfferCard()}>
        {plan.popular && (
          <Box className={classes.mostPopular}>
            <StarIcon className={classes.starIcon} />
            {text.mostPopular}
          </Box>
        )}
        <Typography variant="h3" className={classes.planTitle}>
          {plan.title}
        </Typography>
        <Typography variant="h4" className={classes.description}>
          {plan.description}
        </Typography>
        <PlanPrice price={plan.price} variant="offerCard" />
        <ul className={classes.featureList}>{handleFeatureList()}</ul>
        <Box className={classes.btnPosition}>
          <Button className={classes.ctaButton}>{plan.buttonText}</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferCard;
