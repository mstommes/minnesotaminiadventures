import React from 'react';
import ReactDOM from 'react-dom';


class Footer extends React.Component{
  render(){
    let date = new Date();
    let currentYear = date.getFullYear();
    return (
      <div>&copy; Minnesota Mini Adventures { currentYear }</div>
    );
  }
}
export default Footer;
 