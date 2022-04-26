import * as React from 'react';
import Paragraph from '../components/paragraph';
import Layout from '../components/layout';

const IndexPage = () => (
  <>
    <Layout>
      {/* Anche qui, se wrappi tutto in Layout puoi togliere i React fragments. */}
      <Paragraph
        fontSize="80px"
        color='#258900'
      >
        Some text
      </Paragraph>
    </Layout>
  </>
);
export default IndexPage;