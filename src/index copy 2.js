import React from 'react';
import ReactDOM from 'react-dom';

// 复合组件
function ChildCom(props) {
  const { weather } = props;
  let isGo = weather === '下雨' ? '不出门' : '出门';
  return (
    <div>
      是否出门？<span>{isGo}</span>
    </div>
  );
}

class HelloMessage extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1> 类组件 {name} </h1>
        <ChildCom weather="下雨" />
      </div>
    );
  }
}

const element1 = <HelloMessage name="world dddd" />;

ReactDOM.render(element1, document.querySelector('#root'));
