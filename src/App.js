import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaAlignJustify,FaCartPlus,FaUserAlt,FaSearch,FaGift } from 'react-icons/fa';
import MyPage from './components/MyPage';
import Cart from './components/Cart';
import Upload from './components/Upload';
import SearchBar from './components/SearchBar';
import Login from './components/Login';
import Register from './components/Register';
import { Carousel } from 'react-bootstrap';
//라우터기능
import {Link,Route,Switch} from 'react-router-dom';
import Toprogrammer from './components/ToProgrammer';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    }

  componentDidMount() {


    
    // DB 테스트
     fetch('http://localhost:3001/db_test')
      .then(res=>res.json())
      .then(data=>{
        console.log(data[0]);
      });
  }

  
  render() {
    const {username} = this.state;
    return (
      // 메인 페이지
        
        <div className="App">
          <Route exact path="/">
          <header>
          <div className="top-bar">
            <a><Link to="/login">로그인</Link></a>
            <a><Link to="/register">회원가입</Link></a>
            <a>고객센터</a>

          </div>
          <div className="mid-bar">
            <div className="category">
            <FaAlignJustify color="white" size="42"/>
            <h4 style={{color:"white"}}>카테고리</h4>
          
            </div>
          
          
            <div className="logo">
              <img alt="logo" src="images/logo.png"></img>
            </div>

            <div className="searchbar">
              <SearchBar/>
              
            </div>
            <div>
            <FaSearch size="25"/>
            </div>
            <div className="mypage" onClick={()=>{window.location.href="/mypage"}}>
              <FaUserAlt color="rgb(105, 156, 231)" size="45" />
              <p>내정보</p>
            </div>
            <div className="cart" onClick={()=>{window.location.href="/cart"}}>
              <FaCartPlus color="rgb(105, 156, 231)" size="45"/>
              <p>장바구니</p>
            </div>
            <div className="upload" onClick={()=>{window.location.href="/upload"}}>
              <FaGift color="rgb(105, 156, 231)" size="45"/>
              <p>물건판매</p>
            </div>
          </div>
        </header>
        {/* 슬라이드배너 */}
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="images/carousel1.PNG"
              alt="First slide" height={300}
            />
          </Carousel.Item>
          <Carousel.Item interval={300}>
            <img
              className="d-block w-100"
              src="images/carousel2.PNG"
              alt="Second slide" height={300}
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/carousel3.PNG"
            alt="Third slide" height={300}
          />
          </Carousel.Item>
          </Carousel>

      {/* 상품배열 */}
      {/* md:12가 끝  */}
      {/* 2씩 할당 */}
      <div className="container-man top5">
        <div className="row">
          <h2>남성부분 TOP 5</h2>
          <div class="col-md-2">
            <img src="images/apple.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div class="col-md-2">
          <img src="images/cellphone.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div class="col-md-2">
          <img src="images/laptop.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div class="col-md-2">
          <img src="images/water.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div class="col-md-2">
          <img src="images/shoes.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
        </div>
      </div>

      <div className="container-woman-top5">
        <div className="row">
          <h2>여성부분 TOP 5</h2>
          <div class="col-md-2">
            <img src="images/jam.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div class="col-md-2">
          <img src="images/cellphone.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div class="col-md-2">
          <img src="images/coffee.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div class="col-md-2">
          <img src="images/bread.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div class="col-md-2">
          <img src="images/water.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
        </div>
      </div>


          <footer>
            <div className="profiles">
              <div className="user">
                <img alt="moboo" src="images/profile2.PNG"></img>
                <div className="intro">
                <p>박준수</p>
                <a href="https://github.com/junsu929">깃허브주소</a>
                </div>
              </div>
              <div className="user">
                <img alt="moboo" src="images/profile1.JPG"></img>
                <div className="intro">
                <p>강지훈</p>
                <a href="https://github.com/kanngji">깃허브주소</a>
                </div>
              </div>

              <button onClick={()=>{window.location.href="/toprogrammer"}}>To.개발자</button>
            </div>
          </footer>
          </Route>
          {/* <Route exact path="/login" Component={Login}></Route> */}
          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/register">
            <Register/>
          </Route>

          <Route exact path="/upload">
            <Upload/>
          </Route>

          <Route exact path="/cart">
            <Cart/>
          </Route>

          <Route exact path="/mypage">
            <MyPage/>
          </Route>

          <Route exact path="/toprogrammer">
            <Toprogrammer/>
          </Route>


      </div>
      
      
     
      
    );
  };
  
}

export default App;