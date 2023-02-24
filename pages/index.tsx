import Head from 'next/head'
import Allbets from '../components/Allbets/Allbets'
import FlipGame from '../components/flipGameComponent/FlipGame'
import GroupChat from '../components/GroupChat/GroupChat'
import LatestBets from '../components/LatestBets/LatestBets'
import Layout from '../components/Layout/Layout'
import LeaderBoard from '../components/leaderBoard/LeaderBoard'

const Home = () => {

  return (
    <div className="bg-bodyBg-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <FlipGame />
        <div className='md:mx-14 mx-6 grid grid-cols-12 gap-x-4 items-center'>
          <GroupChat />
          <LeaderBoard />
        </div>

        <div className='md:mx-14 mx-6 grid grid-cols-12 gap-x-4 items-center'>
          <LatestBets />
        </div>

        <div className='md:mx-14 mx-6'>
          <Allbets />
        </div>
      </Layout>
    </div>
  )
}

export default Home
