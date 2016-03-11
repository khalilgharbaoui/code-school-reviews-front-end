import React from 'react';
import $ from 'jquery';

class CodeschoolForm extends React.Component {
  constructor(){
    super();

    this.state = {
      success: [],
      error: []
    };
  }

  postCodeschool(event){
    event.preventDefault();

    let compo = this;
    let formData = {
        name: compo.refs.codeschoolname.value,
        description: compo.refs.codeschooldescription.value,
        url: compo.refs.codeschoolurl.value,
        average_rating: 0,
        logo: compo.refs.codeschoollogo.value
    }


    $.ajax({
      type: 'POST',
      url: `https://codeschoolreviews.herokuapp.com/codeschools.json`,
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        codeschool: formData
      })
    })
    .done(function(data){
        console.log(data);
        compo.props.onChange();
      })
    .fail(function(data){
        console.log(data);
          compo.setState({
            errors:data.statusText
          });
        compo.props.onError(compo.state.errors);
    });
  }
  render(){
    return(
      <form onSubmit={this.postCodeschool.bind(this)} >
        <input
          type='text'
          ref='codeschoolname'
          placeholder='Code School Name' /><br />

        <input
          type='text'
          ref='codeschoollogo'
          placeholder='Code School Logo' /><br />

        <textarea
              rows="4"
              cols="40"
          type='text'
          ref='codeschooldescription'
          placeholder='Code School description' /><br />


        <input
          type='url'
          ref='codeschoolurl'
          placeholder='Code School URL' /><br />
        <button type="submit" className="btn btn-info">Add Code School</button>
      </form>


    );
  }


}

export default CodeschoolForm;
