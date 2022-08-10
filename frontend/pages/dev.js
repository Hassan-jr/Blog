import React from 'react'
import Header from "../components/Header";
import pic from '../img/devpic.png'
import { useSelector, useDispatch } from 'react-redux'

const dev = () => {
  const headerprops = {
    title: 'We live and breathe software development',
    desc: 'Welcome to where developers turn into proffesionals programmers, get instat help for any programming challenge and get assisted in building your projects ',
    pic,
    g1:  'Frontend Dev',
    g2:  'Backend Dev',
    g3:  'Databases',
    g4:  'Programming',
    g5:  'Software Deve',
    g6:  "Api's", 
    bg: 'gradient-bg-welcome '
  }

const dispatch = useDispatch()
 const value = useSelector((state)=>state.testSlice)
 console.log(value);

  return (
    <div>
      <Header {...headerprops} />
      <h1>This  is  from redux state {value}</h1>
    </div>
  )
}

export default dev