import React,{Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state={
            error : false,
        }

    }
    componentDidCatch(error,info){
        if(error) this.setState({
            error : true,
        });
    }
    render() {
        return this.state.error ? <h1>Oops ! We are fucked up !</h1> : this.props.children
    }
}
export default ErrorBoundry;