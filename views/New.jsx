const React = require('react');
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
    render() {
      return (
      <div>
        <DefaultLayout>
        <h1>Captain's Log New Entry</h1>
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
            <input type="checkbox" name="shipIsBroken" id="shipIsBroken" value="true"/>
        </div>
        <div>
            <input type="submit" value="Add Log" />
        </div>
        </form>
        </DefaultLayout>
      </div>
      )
    }
}
module.exports = New;