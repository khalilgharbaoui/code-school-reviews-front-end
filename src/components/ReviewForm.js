import React from 'react';
import $ from 'jquery';
import Rater from 'react-rater'





class ReviewForm extends React.Component {
  constructor(){
    super();
    this.state = {

      success: [],
      error: [],
      rating: 0
    }
  }

  handleRate(rating, lastRating) {
    this.setState({
      rating
    })
    // lastRating is not undefined,
    // which means user have rated
    if (lastRating !== void 0) {
      alert('You rated ' + rating)
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

    let codeschoolId = compo.props.codeschoolId
    $.ajax({
      type: 'POST',
      url: `https://codeschoolreviews.herokuapp.com/codeschools/${codeschoolId}/reviews`,
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        review: formData
      })
    })
    .done(function(data){
      //console.log(data);
      compo.props.onChange();
    })
    .fail(function(data){
      //  console.log(data);
      compo.setState({
        errors:data.statusText
      });
      compo.props.onError(compo.state.errors);
    });
  }



  render(){
    return(
      <div className="spacer">
      <form onSubmit={this.sendReview.bind(this)} >
        <div class="form-group">
        <input className='form-control'
          type='text'
          ref='reviewername'
          placeholder='What is your name?' />
        <br />
        <br />
        <textarea className='form-control'
          rows='4'
          cols='35'
          type='text'
          ref='reviewdescription'
          placeholder='Leave a review...' />
        <br />
        <label for="">Rate This Code School?</label><br/>
        <Rater total={5} limit={5} rating={this.state.rating} onRate={this.handleRate.bind(this)} ref='reviewrating'/>
        <br />
        <br />
        <button type='submit' className='btn btn-default'>
          Submit Your Review
        </button>
        </div>
      </form>
    </div>



















    );
  }
}
export default ReviewForm;
