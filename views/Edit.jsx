const React = require("react")
const DefaultLayout = require("./layout/Default")

class Edit extends React.Component {
  render() {
    //grabbing the fruit givin to this page by the edit route on the server.
    const log = this.props.log
    return (
      <DefaultLayout>
        <h1>Captain's Log Edit Entry</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST" >
          {/* use the log info to give the inputs a defaultValue */}
          Title: <input type="text" name="title" defaultValue={log.title} />
          Entry: <input type="text" name="entry" defaultValue={log.entry} style={{ width: '400px' }} />
          Ship is broken:
          {/* conditionally rendering the checkbox input to make it check by default or not. */}
          { 
            log.shipIsBroken? 
              <input type="checkbox" name="shipIsBroken" defaultChecked />
            : 
              <input type="checkbox" name="shipIsBroken"/> 
          }
          <input type="submit" value="Submit Changes" />      
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;