import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layout';
import Sidebar from 'react-sidebar';

import './styles.css';
import 'hamburgers/dist/hamburgers.min.css';

const BEMQL = {
  removeListener() {},
  addListener() {}
};

const mql = typeof window === 'undefined' ? BEMQL : window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  UNSAFE_componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  toggleNavigation() {
    this.onSetSidebarOpen(!this.state.sidebarOpen);
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    const isActive = this.state.sidebarOpen;
    return (
      <Layout>
        <div className="docs-wrapper">
          {!mql.matches ? (
            <button
              onClick={this.toggleNavigation}
              className={'hamburger hamburger--spin' + (isActive ? ' is-active' : '')}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          ) : null}
          <Sidebar
            transitions={false}
            rootClassName="docs-sidebar"
            sidebarClassName="docs-nav"
            contentClassName="docs-content"
            sidebar={this.renderSidebar()}
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
          >
            <div className="docs-content">{this.props.children}</div>
          </Sidebar>
        </div>
      </Layout>
    );
  }

  renderSidebar() {
    return (
      <>
        <section>
          <header>
            <Link to="/r">Rules</Link>
          </header>
        </section>
        <section>
          <header>Guides</header>
          <ul>
            <Link to="/docs/rule">
              <li>Develop rule</li>
            </Link>
            <Link to="/docs/formatter">
              <li>Develop formatter</li>
            </Link>
          </ul>
        </section>
        <section>
          <header>
            <a href="https://godoc.org/github.com/mgechev/revive">API</Link>
          </header>
        </section>
      </>
    );
  }
}

export default App;
