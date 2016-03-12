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
    return (
    <div className='row gutter-10'>
      <h1>Welcome to Code School Reviews!</h1>
      {this.state.databucket.map(function(codeschool){
        let logoURL = `https://codeschoolreviews.herokuapp.com${codeschool.logo.url}`
        let starStyle = {
            width: `${codeschool.average_rating * 20.0}%`
          };
        return(
          <div className='col-xs-12 col-sm-6 col-md-4' key={codeschool.id} id={codeschool.id}>
            <div className='spacer blok'>
            <p><Link to={`/codeschool/${codeschool.id}`}><img src={logoURL} /></Link></p>
            <h2><Link to={`/codeschool/${codeschool.id}`}>{codeschool.name}</Link></h2><br />
              <div className="stared"><span style={starStyle} className="rated"></span></div>
            <p>{codeschool.description}</p>
            <p><a href={codeschool.url}>{codeschool.url}</a></p>
            </div>
          </div>
        );
      })}
      <div className='col-xs-12 col-sm-12 col-md-12'><div className='col-xs-12 col-sm-1 col-md-2'></div><div className='col-xs-12 col-sm-10 col-md-8'><CodeschoolForm  onChange={this.getData.bind(this)}/></div><div className='col-xs-12 col-sm-1 col-md-2'></div></div>
</div>

  );
  }
}

export default CodeschoolList;
