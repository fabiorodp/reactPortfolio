import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    };

    componentDidCatch(error, info){
        this.setState({hasError: true});
    };

    render() {
        return this.state.hasError ?
            <h1>Ooops.. There is an error in this webpage!</h1>
            :
            this.props.children
     };
}

export default ErrorBoundry;