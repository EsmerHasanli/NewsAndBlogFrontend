import React from 'react';
import { Helmet } from 'react-helmet';
// import Markdown from 'react-markdown'



const CreateNews = () => {
  const markdown = '# Hi, *Pluto*!'
  return (
    <>
      <Helmet>
        <title>TIME | Create New Publish</title>
      </Helmet>
      {/* <Markdown>{markdown}</Markdown> */}
    </>
  );
};

export default CreateNews;
