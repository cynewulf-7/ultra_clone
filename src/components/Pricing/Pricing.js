import React from 'react';
import { Button } from '../../globalStyles';
import { GiBrickPile, GiCrystalBars, GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import{
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1',  size: 64 }}>
        <PricingSection>
            <PricingWrapper>
                <PricingHeading>Our Services</PricingHeading>
                <PricingContainer>
                    <PricingCard to='/sign-up'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiBrickPile />
                            </PricingCardIcon>
                            <PricingCardPlan>Starter Pack</PricingCardPlan>
                            <PricingCardCost>$99.99</PricingCardCost>
                            <PricingCardLength>per month</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>100 New Users</PricingCardFeature>
                                <PricingCardFeature>$10 000</PricingCardFeature>
                                <PricingCardFeature>Retargeting Analytics</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary >Choose Plan</Button>
                            </PricingCardInfo>
                            </PricingCard>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                            <PricingCardIcon>
                                <GiCrystalBars />
                            </PricingCardIcon>
                            <PricingCardPlan>Gold Rush</PricingCardPlan>
                            <PricingCardCost>$299.99</PricingCardCost>
                            <PricingCardLength>per month</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>1000 New Users</PricingCardFeature>
                                <PricingCardFeature>$50 000</PricingCardFeature>
                                <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                            </PricingCard>
                            <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                            <PricingCardIcon>
                                <GiCutDiamond />
                            </PricingCardIcon>
                            <PricingCardPlan>Diamond Kings</PricingCardPlan>
                            <PricingCardCost>$999.99</PricingCardCost>
                            <PricingCardLength>per month</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>Unlimited Users</PricingCardFeature>
                                <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                                <PricingCardFeature>24/7 support</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Choose Plan</Button>
                        </PricingCardInfo>
                    </PricingCard>
                </PricingContainer>
            </PricingWrapper>
        </PricingSection>

    </IconContext.Provider>
  )
};

export default Pricing;