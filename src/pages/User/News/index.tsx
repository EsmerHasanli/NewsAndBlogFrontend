import React from 'react'
import Hero from '../../../components/User/Hero/index'
import PublishersSliders from '../../../components/User/PublishersSliders'
import LatestNews from '../../../components/User/Latest News'
import FilteredNews from '../../../components/User/FilteredNews'
import { Helmet } from 'react-helmet';

const News = () => {
  return (
    <>
      <Helmet>
        <title>TIME | Latest News & Blogs</title>
      </Helmet>
      <Hero/>
      <PublishersSliders/>
      <LatestNews/>
      <FilteredNews/>
    </>
  )
}

export default News