const React = require('react');

class New extends React.Component {
    render() {
      return (
      <div>
        <h1>Captain's Log</h1>
        <form action="/logs" method="POST" >
        <div>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" required />
        </div>
        <div>
            <label htmlFor="entry">Entry: </label>
            <textarea name="entry" id="entry" rows="4" cols="50" required></textarea>
        </div>
        <div>
            <label htmlFor="shipIsBroken">Ship is broken: </label>
            <input type="checkbox" name="shipIsBroken" id="shipIsBroken" />
        </div>
        <div>
            <input type="submit" value="Add Log" />
        </div>
        </form>
      </div>
      )
    }
}
module.exports = New;