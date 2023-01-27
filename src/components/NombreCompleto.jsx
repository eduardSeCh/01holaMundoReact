import React from 'react'
import '../App.css'
import { Edad } from './Edad'
export const NombreCompleto = (props) => {
  return ( 
    <> {/* React.Fragment */}
      <h3>Me shamo...{props.name}</h3>
      <Edad edad={props.edad}/>
    </>
  )
}