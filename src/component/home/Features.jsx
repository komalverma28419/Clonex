import React from 'react'
import Title from '../ui/Title'
// import Dashboard from './Dashboard'
import featureImgL from '../../assets/images/featureImgL.jpeg'
import featureImgD from '../../assets/images/featureImgD.jpeg'
import Button from '../ui/Button'
import { useTheme } from '../../context/ThemeContext'


const Features = () => {
    const {theme} = useTheme()
  return (
    <section className=' py-6 md:py-10 xl:py-14 bg-[#FAFAFA]  dark:bg-[#02061a]'>
        <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-10'>
                <div>
                    <Title text="OUR FEATURES" circleColor="#EFA434"/>
                    <h3 className='text-dark dark:text-dark-text font-extrabold text-xl md:text-2xl mt-8'>
                        Intuitive Dashboard
                    </h3>
                    <p className='text-font dark:text-dark-muted leading-normal md:leading-7 text-sm 
                    md:text-base mt-5 mb-10'> Transform the way you manage your calls with a powerful and 
                    intuitive dashboard. Get detailed insights into call volume, duration, missed calls, 
                       and performance trends with beautifully organized analytics that make 
                       complex data simple, accessible, and actionable.
                     </p>
                     <Button text="REQUEST A DEMO" variant='primary' shine size='lg'/>
                </div>
                <div className='flex items-center'>
                    {/* <Dashboard/> */}
                    <img src={theme === "dark" ? featureImgD: featureImgL} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
