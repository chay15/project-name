import React from 'react';
import ReactDOM from 'react-dom';
//类组件
class HelloMessage extends React.Component {
  render() {
    const { name } = this.props;
    return <h1>hello {name}</h1>;
  }
}
// 函数式组件

// function HelloMessage(props) {
//   const { weather, other } = props;

//   console.log(weather, other);

//   let isGo = weather === '下雨' ? '不出门' : '出门';

//   return (
//     <div>
//       是否出门？<span>{isGo}</span>
//     </div>
//   );
// }

const element1 = <HelloMessage weather="太阳" other={111} name="类组件" />;

ReactDOM.render(element1, document.querySelector('#root'));
