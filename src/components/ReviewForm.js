import React from 'react';
import $ from 'jquery';
import Rater from 'react-rater';

class ReviewForm extends React.Component {
  constructor(){
    super();
    this.state = {

      success: [],
      error: [],
      rating: 0,
      posted: false,
      reviewername: false,
      reviewdescription: false,
      reviewrating: false
    }
  }



  sendReview(event){
    event.preventDefault();
    let compo = this;

    let formData = {
      name: compo.refs.reviewername.value,
      description: compo.refs.reviewdescription.value,
      rating: this.state.rating
    }

    let codeschoolId = compo.props.codeschoolId;
    $.ajax({
      type: 'POST',
      url: `http://codeschoolreviews.bitballoon.com/codeschools/${codeschoolId}/reviews`,
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        review: formData
      })
    })
    .done(function(data){
      //console.log(data);
      compo.props.onChange();
      //this resets the form with the ref='form'

      compo.setState({
        posted: true,
        reviewrating: false
      });
      compo.refs.form.reset();
    })
    .fail(function(data){
      //  console.log(data);
      compo.setState({
        errors:data.statusText
      });
      compo.props.onError(compo.state.errors);
    });
  }

  validateName(){
    let compo = this;
    event.preventDefault();

    compo.setState({
      reviewername: true

    });
  }

  validateDescription(){
    let compo = this;
    event.preventDefault();

    compo.setState({

      reviewdescription: true
    });
  }

  handleRate(rating, lastRating) {
    this.setState({
      rating
    })
    // lastRating is not undefined,
    // which means user have rated
    if (lastRating !== void 0) {
      this.setState({
        reviewrating: true
      });

      // alert('You rated ' + rating)
    }
  }



  render(){
    return(
      <div className="spacer">
        <form
          onSubmit={this.sendReview.bind(this)}
          ref='form'>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              ref='reviewername'
              onChange={this.validateName.bind(this)}
              placeholder='What is your name?' />
            <br />
            <br />
            <textarea
              className='form-control'
              rows='4'
              cols='35'
              type='text'
              ref='reviewdescription'
              onChange={this.validateDescription.bind(this)}
              placeholder='Leave a review...' />
            <br />
            <label htmlFor="">
              Rate This Code School?
            </label>
            <br/>
            <Rater
              total={5}
              limit={5}
              rating={this.state.rating}
              onRate={this.handleRate.bind(this)}
              ref='reviewrating' />
            <br />
            <br />
            {this.state.posted ?
              <span>
                <p>
                  Thank you for leaving a review!
                </p>
              </span>
              : null }
              {this.state.reviewrating ?
                <span>
                  <p>
                    You rated {this.state.rating} stars! please complete the form and submit your review.
                  </p>
                </span>
                : null }
                <br />
                <button
                  disabled={!this.state.reviewername}
                  disabled={!this.state.reviewdescription}
                  disabled={!this.state.reviewrating}
                  type='submit'
                  className='btn btn-default'>
                  Submit Your Review
                </button>
              </div>
            </form>
          </div>
        );
      }
    }
    export default ReviewForm;
