import React from 'react'
import AnimatedCounter from '../ui/AnimatedCounter'
import { growthData } from '../../data/growthData'

const Growth = () => {
  return (
    <section className='py-6 md:py-10 xl:py-14 dark:bg-dark-alternate'>
      <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4'>
            {growthData.map((data , index) =>(
                <div key={index} className='flex flex-col items-center gap-0.5 lg:gap-2'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl '>
                        <AnimatedCounter end={data.number} suffix={data.suffix} numberClassName="text-primary"
                        suffixClassName='text-secondary'/>
                    </h3>
                    <p className='text-font dark:text-dark-muted text-sm lg:text-bse'>{data.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Growth
