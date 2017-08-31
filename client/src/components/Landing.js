import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hi Guys!</h1>
      <p style={{ fontSize: '200%' }}> 
      	這是Fred Chen 練習 fullstack project 功能與技術如下
      </p>
				<div className="card darken-1"  style={{ textAlign: 'left' }}>
					<div className="card-content">
						<span className="card-title">功能</span>
						<ol>
					      	<li> 透過google帳號連動登入(authentication with google) </li>
					      	<li> 寄送Email給用戶(send mail) </li>
					      	<li> 基本信用卡功能(credit) </li>
					      	<li> 簡單的建立表單與呈現表單 (CRUD) </li>
				      	</ol>
					</div>
					<div className="card-action">
						<span className="card-title">技術</span>
						<ol>
					      	<li> nodeJS - express </li>
					      	<li> stripe - payment</li>
					      	<li> css - materializecss </li>
					      	<li> react / redux-thunk </li>
					      	<li> passport - authentication with google </li>
					      	<li> sendgrid - mail service </li>
				      	</ol>
					</div>
				</div>
    </div>
  );
};

export default Landing;
