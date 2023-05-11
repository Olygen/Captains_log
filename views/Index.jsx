const React = require("react");
const DefaultLayout = require('./layout/Default');


class Index extends React.Component {
    render() {
        const { logs } = this.props;
        return (
            <div>
                <DefaultLayout>
                    <h1>Captains Log Index Page</h1>
                    <ul>
                {logs.map((log, i) => {
                    return (
                        <li key={i}>
                            {" "}
                            <a href={`/logs/${log._id}`}>
                                {log.title}
                            </a>{" "}
                            {log.entry} <br></br>
                            {log.shipIsBroken
                                ? `Ship is broken`
                                : `Ready to go`}
                            <br />
                            {/* Link to this specific logs's edit page */}
                            {/* <a href={`/logs/${log._id}/edit`}>Edit This Fruit</a> */}
                            {/* This will be the delete button, it is a form because we need to make a request to our server. Can't use handleClick in server-side app */}
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                        </li>
                    );
                })}
            </ul>
                </DefaultLayout>
            </div>
        )
    }
}

module.exports = Index;
