// import React from 'react'
// import Title from '../ui/Title'
// // import Dashboard from './Dashboard'
// import featureImgL from '../../assets/images/featureImgL.jpeg'
// import featureImgD from '../../assets/images/featureImgD.jpeg'
// import Button from '../ui/Button'
// import { useTheme } from '../../context/ThemeContext'
// import { features } from '../../data/featureData'
// import { div } from 'framer-motion/client'



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

