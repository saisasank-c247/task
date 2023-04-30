import React from 'react';
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div>
        <button type="button"><Link to="/">Users</Link></button>
        <button type="button"><Link to="/calendar">Calendar</Link></button>
    </div>
  )
}
