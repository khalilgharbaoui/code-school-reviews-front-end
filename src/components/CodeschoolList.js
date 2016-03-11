import React from 'react';
import $ from 'jquery';
import CodeschoolForm from './CodeschoolForm';

require('../stylesheets/CodeschoolList.scss');

class CodeschoolList extends React.Component {

  constructor(){
    super();

    this.state = {
      databucket: []
    }
  }

  getData(){


    let compo = this;
    let apiurl = 'https://codeschoolreviews.herokuapp.com/';

    //http://api.jquery.com/jQuery.ajax/

    $.ajax({
      url: apiurl,
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

      compo.setState({
          // display the error message from the server
        errors: data.textStatus
    });
    console.log(jqXHR);
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (<div>
      <h1>
        code school list comes here
      </h1>

      {this.state.databucket.map(function(codeschool){
        let logolink = `https://codeschoolreviews.herokuapp.com${codeschool.logo.url}`
        let starStyle = {
            width: `${codeschool.average_rating * 20.0}%`
          };
        return(
          <div key={codeschool.id}>
            <p><a href={codeschool.url}><img src={logolink} /></a></p>
            <h1>{codeschool.name}</h1><br />
            <div className="star"><span style={starStyle} className="rating"></span></div>
            <p>{codeschool.description}</p>
            <p><a href={codeschool.url}>{codeschool.url}</a></p>
          </div>
        );
      })}
      <CodeschoolForm onChange={this.getData.bind(this)}/>
    </div>);
  }
}

export default CodeschoolList;
