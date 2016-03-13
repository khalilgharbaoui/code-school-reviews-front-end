import React from 'react';
import $ from 'jquery';
import ReviewList from './ReviewList';


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
        databucket: response
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

    let logoURL = `https://codeschoolreviews.herokuapp.com${this.state.databucket.codeschool.logo.url}`;
    let starStyle = {
      width: `${this.state.databucket.average_rating * 20.0}%`
    };
    return(
      <div>
        <div className='jumbotron'>
          <img src={logoURL}/>
          <h1>
            {this.state.databucket.codeschool.name}
          </h1>
          <span> <h4 className="gg">
              Average Rating:
            </h4>
          <div className="stared">
            <span style={starStyle} className="rated">
            </span>
          </div>
        </span>
        <br />
          <p>
            {this.state.databucket.codeschool.description}
          </p>
          <a href={this.state.databucket.codeschool.url}>
            {this.state.databucket.url}
          </a>
          <br />
        </div>
        <ReviewList codeschoolId={this.props.params.codeschoolId} />
      </div>
    );
  };
}

export default Codeschool;
