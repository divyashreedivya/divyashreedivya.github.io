import React from 'react';
import { NavLink } from "react-router-dom";


export default class Navitem extends React.Component {
render() {
return (
  <div>
  <li >
<NavLink to={this.props.tolink}  className="link" exact >{this.props.item}</NavLink>
</li>
  </div>
)
}
}
