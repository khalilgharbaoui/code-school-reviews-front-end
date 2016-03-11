import React from 'react';
import $ from 'jquery';

class CodeschoolList extends React.Component {

  constructor(){
    super();

    this.state = {
      databucket: []
    }
  }

  getData(){


    let compo = this;
    let url = 'https://codeschoolreviews.herokuapp.com/';

    //http://api.jquery.com/jQuery.ajax/
    
    $.ajax({
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      method: 'GET'

    })
    .success((response) => {
      console.log(response);
    })
      .done((response) => {
        compo.setState({
          databucket: response.codeschools
        });
      })
      .fail(function(data, jqXHR, textStatus){
        // display the error message from the server... maybe
        compo.setState({
          errors: data.textStatus
      });
      console.log(jqXHR);
      });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <h1>
        code school list comes here
      </h1>
    );
  }
}

export default CodeschoolList;
