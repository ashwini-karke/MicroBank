import React from 'react'
import "./styles.css"
import Union from "../../assests/Images/Union.png"
import UnionSmall from "../../assests/Images/Union-small.png"
import UnionRight from "../../assests/Images/Union-right.png"
import Team from "../../assests/Images/team.png"

export default function GroupImage() {
  return (
    <div className='login-image'>
        <img className="left-png" src={Union} alt=""/>
        <img className="right-png" src={UnionSmall} alt=""/>
        <img className="small-png" src={UnionRight} alt=""/>
        <img className="team" src={Team} alt=""/>
        <p className="micro-bank">Micro Bank</p>        
    </div>
  )
}
