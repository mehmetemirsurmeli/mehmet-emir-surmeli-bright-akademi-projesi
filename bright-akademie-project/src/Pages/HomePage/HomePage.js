import React from 'react'
import HomeWelcome from '../../Components/HomeWelcome'
import HomeContent from '../../Components/HomeContent'
import HomeBright from '../../Components/HomeBright'
import HomeBrightNedir from '../../Components/HomeBrightNedir'
import HomeBrightWhy from '../../Components/HomeBrightWhy'

const HomePage = () => {
    return (
        <>
            <HomeWelcome />
            <HomeContent />
            <hr className='mt-5' />
            <HomeBrightNedir />
            <hr className='mt-5' />
            <HomeBrightWhy />
            <hr className='mt-5' />
            <HomeBright />
        </>
    )
}

export default HomePage