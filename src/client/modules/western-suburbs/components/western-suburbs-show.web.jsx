/* Western Suburbs - View */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import PageLayout from '../../../app/page_layout';

import styled from 'styled-components';

const context = require.context("../../../../../assets", false, /.jpg/);
let photosModules = [];
// require.context("../../../../../assets/thumbnails", false, /.jpg/);

context.keys().forEach((filename)=>{
  photosModules.push({filename: filename, content: context(filename)});
});
photosModules.sort((a, b) => {
  return a.filename.localeCompare(b.filename);
})
for (let i = 0; i < photosModules.length; i++){
  let photo = photosModules[i];
}

const Image2 = styled.div`
  width: 100%;
  height: 768px;
  background-image: url(${props => props.url});
`

const Image = (props) => {
  return <img src={props.url} style={{width:"100%", height: "100%"}} />
}

const WesternSuburbsShow = () => {
  const renderMetaData = () => (
    <Helmet
      title="Impressions - Western Suburbs"
      meta={[{
        name: 'description',
        content: 'Impressions - Western Suburbs'
      }]} />
  );

  return (
    <PageLayout>
      {renderMetaData()}
      <div className="text-center mt-4 mb-4">
        <p>
          Hello western suburbs!
        </p>
      </div>
      {photosModules.length}
      {photosModules.map((photosModule, index) => {
        return (
          <Image url={photosModule.content} />
        )
      })}
    </PageLayout>
  );
};

WesternSuburbsShow.propTypes = {
};

export default WesternSuburbsShow;
