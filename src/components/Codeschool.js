import React from 'react';
import $ from 'jquery';
require('../stylesheets/Codeschool.scss');


// import ReviewForm from './ReviewForm';
// import ReviewListfrom './ReviewList';

class Codeschool extends React.Component{



    constructor(){
      super();

      this.state = {
        databucket: []
      }
    }

    showCodeschool(){


      let compo = this;
      let codeschoolId = this.props.params.codeschoolId;
      let APIurl = `https://codeschoolreviews.herokuapp.com/codeschools/${codeschoolId}`;

      //http://api.jquery.com/jQuery.ajax/
      $.ajax({
        url: APIurl,
        dataType: 'json',
        contentType: 'application/json',
        method: 'GET'

      })
      .success((response) => {
      console.log(response);

      })
      .done((response) => {
          compo.setState({
            databucket: response.codeschool
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
      this.showCodeschool();
    }

    render(){

        let logoURL = `https://codeschoolreviews.herokuapp.com${this.state.databucket.logo.url}`;
        let starStyle = {
    width: `${this.state.databucket.average_rating * 20.0}%`
  };
      return(<div>
          <img src={logoURL}/>
          <h1>{this.state.databucket.name}</h1>
          <div className="star"><span style={starStyle} className="rating"></span></div>
          <p>{this.state.databucket.description}</p>
          <a href={this.state.databucket.url}>{this.state.databucket.url}</a>


          </div>
      );
    };
}

export default Codeschool;
