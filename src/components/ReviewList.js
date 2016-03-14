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
    let APIurl = `http://codeschoolreviews.bitballoon.com/codeschools/${codeschoolId}/reviews`;

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
    return (
      <div className='row gutter-10'>
        <h1>
          Code School Reviews
        </h1>

        {this.state.databucket.map(function(review){
          let starStyle = {
            width: `${review.rating * 20.0}%`
          };
          return(
            <div
              className='spacer col-xs-12 col-sm-6 col-md-4'
              key={review.id}
              id={review.id}>
              <span className="bubble-emoji">
              </span>
              <div className='bubble'>
                <h2>
                  {review.name}
                </h2>
                <span >
                  <h4 className="gg">
                    Rated this with:
                  </h4>
                  <div className="stared">
                    <span style={starStyle} className="rated">
                    </span>
                  </div>
                </span>
                <br />
                <p>
                  {review.description}
                </p>
                <br />
              </div>

            </div>
          );
        })}
        <div className='col-xs-12 col-sm-12 col-md-12'>
          <div className='col-xs-12 col-sm-2 col-md-3'>
          </div>
          <div className='col-xs-12 col-sm-8 col-md-6'>
            <ReviewForm
              codeschoolId={this.props.codeschoolId}
              onChange={this.getReviews.bind(this)}/>
          </div>
          <div className='col-xs-12 col-sm-2 col-md-3'>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewList;
