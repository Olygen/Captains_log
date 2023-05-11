const React = require("react");
const DefaultLayout = require("./layout/Default");


class Show extends React.Component {
    render() {
        const { log } = this.props;
        return (
            <div>
                <DefaultLayout>
                <h1>Captains Log Show Page</h1>
                <h1>{log.title}</h1>
                <p>{log.entry}</p>
                <p>
                    {log.shipIsBroken ? "Ship is broken" : "Ready to go"}
                </p>
                </DefaultLayout>
            </div>
        )
    }
}

module.exports = Show;