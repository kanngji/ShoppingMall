import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    }

  componentDidMount() {

      // 테스트용 지워도 됩니다.
      fetch('http://localhost:3001/api')
          .then(res=>res.json())
          .then(data=>this.setState({username:data.username}));
  }

  // 메인 페이지
  render() {
    const {username} = this.state;
    return (
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {username ? `Hello ${username}` : 'Hello World'}
          </header>
        </div>
    );
  };
  
}

export default App;