import React from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      {/* <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome /></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser /></a>
    <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook /></a>
    <a href="#portfolio" onClick={()=>setActiveNav('#services')} className={activeNav==='#portfolio'?'active':''}><RiServiceLine /></a>
    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail /></a> */}

      <button onClick={() => {
        window.location.assign('#');
        setActiveNav('#');
      }} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></button>
      <button onClick={() => {
        window.location.assign('#about');
        setActiveNav('#about');
      }} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></button>
      <button onClick={() => {
        window.location.assign('#experience');
        setActiveNav('#experience');
      }} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></button>
      <button onClick={() => {
        window.location.assign('#portfolio');
        setActiveNav('#portfolio');
      }} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></button>
      <button onClick={() => {
        window.location.assign('#contact');
        setActiveNav('#contact');
      }} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></button>
    </nav>
  )
}

export default Nav