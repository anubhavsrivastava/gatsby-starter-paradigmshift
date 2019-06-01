import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main-container">
      <div className="container">
        <div className="content">
          <header className="major">
            <h2>NOT FOUND</h2>
          </header>
          <section>
            <h4>Not a valid URL</h4>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
