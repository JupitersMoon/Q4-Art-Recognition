import React from 'react';
import { withRouter } from 'react-router-dom';
// import $ from 'jquery';


class Navbar extends React.Component {

  componentWillMount() {


  // NOAA API
  //   $.ajax({
  //     method: 'GET',
  //     url:'https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets',
  //     datatype: 'json',
  //     headers:{ token: 'UmpKojYLhlmRvMCWdlTdgeSVWWFxKFGu' },
  //
  //     success: function(data) {
  //       let noaaData = data
  //       console.log(noaaData);
  //     },
  //     error: function() {
  //     }
  //   })
  //
  //
  // // INCANDESCENT API
  //   $.ajax({
  //     method: 'GET',
  //     url:'https://incandescent.xyz/api/add/',
  //     datatype: 'json',
  //     data: {
  //     "uid": "7203",
  //     "apikey": "baee9dbbc37921a2acaf006ccdf1bcdd",
  //     "expires": 1498506330512,
  //     // "stringToHash": "uid" + "-" + "expires" + "-" + "apikey",
  //     "auth": "e1b7514bd01398daef8c16ba860d3a60"
  // },
  //
  //
  //   })
  fetch('/api/users' )
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  render() {
  return(
    <div className = "jumbotron" >
      <h1>Art Identification</h1>
      </div>
  )
  }

}
export default withRouter(Navbar);
