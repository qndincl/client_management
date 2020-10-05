import React,{ Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer=[
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
        <Customer
        id={customer[0].id}
        image={customer[0].image}
        name = {customer[0].name}
        birthday={customer[0].birthday}
        gender={customer[0].gender}
        job={customer[0].job}
        />
        <Customer
        id={customer[1].id}
        image={customer[1].image}
        name = {customer[1].name}
        birthday={customer[1].birthday}
        gender={customer[1].gender}
        job={customer[1].job}
        />
        <Customer
        id={customer[2].id}
        image={customer[2].image}
        name = {customer[2].name}
        birthday={customer[2].birthday}
        gender={customer[2].gender}
        job={customer[2].job}
        />
        </div>
    );
  }
}


export default App;
