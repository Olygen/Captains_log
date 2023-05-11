const React = require('react');

class DefaultLayout extends React.Component {
    render() {
      const { children } = this.props;
      return (
        <div>
          {/* <header style={header}>
            <a style={link} href="/logs">
              <h2>All Flights</h2>
            </a>
            <a style={link} href="/logs/new">
              <h2>Add flight</h2>
            </a>
          </header> */}
          {children}
        </div>
      );
    }
  }

module.exports = DefaultLayout;