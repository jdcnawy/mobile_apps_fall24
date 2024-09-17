import React from 'react'
import '../styles.css'
export default function Card(props) {
  return <div className="card space-x-5">{props.children}</div>
}
