class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>Hii there!</div>
    }
};

// Change code below this line
ReactDOMServer.renderToString(<App />);