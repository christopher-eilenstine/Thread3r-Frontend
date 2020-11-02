import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    componentDidMount() {
        const url = 'http://localhost:8080/sayhello?name=Java';
        axios.get(url).then(response => {
            console.log('response : ');
            console.log(response);
            this.setState({message: response.data});
        }).catch(error => {
            console.log('error : ');
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
                Message : {this.state.message}
            </div>
        );
    }
}

export default App;