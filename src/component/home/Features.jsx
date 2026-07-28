import React from 'react'
import { features } from '../../data/featureData'
import FeatureSection from './FeatureSection'

const Features = () => {
  return (
    <>
      {features.map((feature, index) => (
        <FeatureSection key={feature.id}
        feature={feature}
        index = {index}
        />
      ))}
    </>
  )
}

export default Features

