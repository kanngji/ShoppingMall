import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../css/Toprogrammer.css';

class Toprogrammer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: false,
            content: false,
        };
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: this.state.title,
            content: this.state.content,
        };

        let length = this.state.content;

        if(this.state.title == "" || this.state.content ==""){
            alert("제목이나 내용을 입력해주세요");
            
        }else {
            fetch("api/Toprogrammer", {
                method: "post",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data),
            });
            alert("제출 되었습니다 감사합니다");
        }
    };
render() {
    return (
        <div className="body">
            <div className="container">
                <p>개발자에게 하고 싶은 이야기를 해주세요</p>
                <p>제목</p>
                <input type="text" name="title" placeholder="write title" onChange={this.onChange}></input>
                <p>내용</p>
                <textarea name="content" onChange={this.onChange}></textarea>

                <button onClick={this.onSubmit}>보내기</button>
            </div>
        
        
        </div>
    )
}
        
    
}

export default Toprogrammer;