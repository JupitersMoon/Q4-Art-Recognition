import React from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';


class Ajax extends React.Component {

  componentWillMount() {

    $.ajax({
      method: 'GET',
      url:'https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets',
      datatype: 'json',
      headers:{ token: 'UmpKojYLhlmRvMCWdlTdgeSVWWFxKFGu' },

      success: function(data) {
        let noaaData = data
        console.log(noaaData);
      },
      error: function() {
      }
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
export default withRouter(Ajax);
