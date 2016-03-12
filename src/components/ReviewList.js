import React from 'react';
import $ from 'jquery';
import ReviewForm from './ReviewForm';


class ReviewList extends React.Component {

  constructor(){
    super();

    this.state = {
      databucket: []
    }
  }

  getReviews(){


    let compo = this;
    let codeschoolId = compo.props.codeschoolId
    let APIurl = `https://codeschoolreviews.herokuapp.com/codeschools/${codeschoolId}/reviews`;

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
        databucket: response.reviews
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
    this.getReviews();
  }

  render() {
    return (<div className='row'>
      <h1>Code School Reviews</h1>

      {this.state.databucket.map(function(review){
        let starStyle = {
            width: `${review.rating * 20.0}%`
          };
        return(
          <div className='bubble' key={review.id} id={review.id}>
            <h1>{review.name}</h1>
            <div className="stared"><span style={starStyle} className="rated"></span></div>
            <p>{review.description}</p>
          </div>
        );
      })}
      <ReviewForm codeschoolId={this.props.codeschoolId} onChange={this.getReviews.bind(this)}/>
    </div>);
  }
}

export default ReviewList;
