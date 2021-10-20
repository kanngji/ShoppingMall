import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaAlignJustify } from 'react-icons/fa';

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
          <header>
          <div className="top-bar">
            <a>로그인</a>
            <a>회원가입</a>
            <a>고객센터</a>

          </div>
          <div className="category">
          <FaAlignJustify color="white" size="42"/>
          <h4 style={{color:"white"}}>카테고리</h4>
          </div>
          
         
      



          </header>
        </div>
      
    );
  };
  
}

export default App;