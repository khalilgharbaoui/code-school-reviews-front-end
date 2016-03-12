import React from 'react';
import $ from 'jquery';


class CodeschoolForm extends React.Component {
  constructor(){
    super();
    this.state = {

      success: [],
      error: [],
      file: null
    }
  }

  // when a file is passed to the input field, retrieve the contents as a
  // base64-encoded data URI and save it to the component's state

  uploadFile(e){
    let compo = this;
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function(output){
      compo.setState({
        file: output.target.result
      });
    }.bind(this);
    reader.readAsDataURL(file);
  }

  // removeFile(event){
  //   event.preventDefault();
  //   let component = this;
  //
  // }



  sendCodeschool(event){
    event.preventDefault();

    let compo = this;
    let formData = {
      name: compo.refs.codeschoolname.value,
      description: compo.refs.codeschooldescription.value,
      url: compo.refs.codeschoolurl.value,
      average_rating: 0,
      logo: this.state.file
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
      <form onSubmit={this.sendCodeschool.bind(this)} >
        <input
          type='text'
          ref='codeschoolname'
          placeholder='Code School Name' />
        <br />

        <textarea
          rows='4'
          cols='35'
          type='text'
          ref='codeschooldescription'
          placeholder='Code School description' />
        <br />


        <input
          type='url'
          ref='codeschoolurl'
          placeholder='Code School URL' />
        <br />

          <input
            className='btn'
            type='file'
            ref='file'
            onChange={this.uploadFile.bind(this)}
            defaultValue={this.state.file} /><br />
          <img disabled={!this.state.file} src={this.state.file} width='140' />
            <br />
        <button type='submit' className='btn btn-info'>
          Add Code School
        </button>
      </form>



    );
  }
}
export default CodeschoolForm;
