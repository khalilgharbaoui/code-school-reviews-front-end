import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import CodeschoolForm from './CodeschoolForm';


class CodeschoolList extends React.Component {

  constructor(){
    super();

    this.state = {
      databucket: []
    }
  }

  getData(){


    let compo = this;
    let APIurl = 'https://codeschoolreviews.herokuapp.com';

    //http://api.jquery.com/jQuery.ajax/

    $.ajax({
      url: APIurl,
      dataType: 'json',
      contentType: 'application/json',
      method: 'GET'

    })
    .success((response) => {
    //  console.log(response);
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
        let logoURL = `https://codeschoolreviews.herokuapp.com${codeschool.logo.url}`
        let starStyle = {
            width: `${codeschool.average_rating * 20.0}%`
          };
        return(
          <div key={codeschool.id} id={codeschool.id}>

            <p><Link to={`/codeschool/${codeschool.id}`}><img src={logoURL} /></Link></p>
            <h1><Link to={`/codeschool/${codeschool.id}`}>{codeschool.name}</Link></h1><br />
              <div className="stared"><span style={starStyle} className="rated"></span></div>
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
