import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';

import Header from '../components/header';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'build-time', content: data.site.buildTime },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Layout;

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
            buildTime
        }
    }
`;
