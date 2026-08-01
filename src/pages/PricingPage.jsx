import React from 'react'
import PricingPlan from '../component/shared/pricing/PricingPlan'
import FreeTrial from '../component/pricing/FreeTrial'
import PricingBanner from '../component/pricing/PricingBanner'

const PricingPage = () => {
  return (
    <>
      <PricingPlan/>
      <FreeTrial/>
      <PricingBanner/>
    </>
  )
}

export default PricingPage
