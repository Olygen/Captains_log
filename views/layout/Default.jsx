const React = require('react');

const header = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 25%',
  color: '#ffffff',
  background: 'linear-gradient(to bottom, #0000ff, #00ffff)',
  backgroundSize: 'cover',
  fontFamily: 'Noto Sans, Arial, sans-serif',
  paddingTop: '1px',
  paddingBottom: '10px',
  marginBottom: '30px'
};

const link = {
  color: '#ffffff'
};

class DefaultLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <header style={header}>
          <a style={link} href="/logs">
            <h2>All Captain Logs</h2>
          </a>
          <a style={link} href="/logs/new">
            <h2>Add Log</h2>
          </a>
        </header>
        {children}
      </div>
    );
  }
}

module.exports = DefaultLayout;

