import React from 'react';

import Layout from '../components/layout';

import './index.css';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <div className="main">
      <h1>revive</h1>
      <div className="headline">fast & extensible static code analysis framework for Go</div>
    </div>
    <br />
    <p style={{ maxWidth: '700px', margin: 'auto', padding: 10 }}>
      <p>
        Fast, configurable, extensible, flexible, and beautiful linter for Go. Drop-in replacement of golint.{' '}
        <strong>
          Revive provides a framework for development of custom rules, and lets you define a strict preset for enhancing
          your development & code review processes
        </strong>
        .
      </p>
      <p align="center">
        <img src={require('../images/logo.png')} alt="" width="300" />
        <br />
        <small>
          Logo by <a href="https://github.com/hawkgs">Georgi Serev</a>
        </small>
      </p>
      Here's how <strong>revive</strong> is different from <strong>golint</strong>:
      <ul>
        <li>Allows us to enable or disable rules using a configuration file.</li>
        <li>Allows us to configure the linting rules with a TOML file.</li>
        <li>2x faster running the same rules as golint.</li>
        <li>
          Provides functionality for disabling a specific rule or the entire linter for a file or a range of lines.
        </li>
        <li>
          <strong>golint</strong> allows this only for generated files.
        </li>
        <li>
          Optional type checking. Most rules in golint do not require type checking. If you disable them in the config
          file, revive will run over 6x faster than golint.
        </li>
        <li>Provides multiple formatters which let us customize the output.</li>
        <li>
          Allows us to customize the return code for the entire linter or based on the failure of only some rules.
        </li>
        <li>
          <strong>Everyone can extend it easily with custom rules or formatters.</strong>
        </li>
        <li>
          <strong>Revive</strong> provides more rules compared to <strong>golint</strong>.
        </li>
      </ul>
    </p>
  </Layout>
);

export default IndexPage;
