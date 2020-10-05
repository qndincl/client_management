import React,{ Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers=[
{
  'id':1,
  'image':'http://placeimg.com/64/64/people?t=1601914723874',
  'name': '홍실동',
  'birthday':'961222',
  'gender': '남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'http://placeimg.com/64/64/2',
  'name': '동빈나',
  'birthday':'961223',
  'gender': '남자',
  'job':'프로그래머'
},
{
  'id':3,
  'image':'http://placeimg.com/64/64/3',
  'name': '성찬김',
  'birthday':'961225',
  'gender': '남자',
  'job':'프로그래머'
}
]

class App extends Component {
  render() {
    return (
      <div>
      {customers.map(c => {
      return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
      })}
      </div>
      
    );
  }
}


export default App;
