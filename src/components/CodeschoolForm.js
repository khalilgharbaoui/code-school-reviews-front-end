import React from 'react';
import $ from 'jquery';


class CodeschoolForm extends React.Component {
  constructor(){
    super();

    const defaultImage = 'data:image/png;base64,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'

    this.state = {
      success: [],
      error: [],
      filechosen: false,
      file: defaultImage,
      posted: false,
      codeschoolname: false,
      codeschooldescription: false,
      codeschoolurl: false
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
        file: output.target.result,
        filechosen: true
      });
    }.bind(this);
    reader.readAsDataURL(file);
  }


  removeFile(event){
    event.preventDefault();
    let compo = this;
    compo.setState({
      filechosen: false,
      file: 'data:image/png;base64,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'

    });


  }



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
      url: `http://codeschoolreviews.bitballoon.com/codeschools.json`,
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        codeschool: formData
      })
    })
    .done(function(data){
      //console.log(data);
      compo.props.onChange();
      compo.setState({
        posted: true,
        filechosen: false,
        file: 'data:image/png;base64,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',
        codeschoolurl: false,
        codeschooldescription: false,
        codeschoolname: true
      });
      //this resets the form with the ref='form'
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
      codeschoolname: true

    });
  }

  validateDescription(){
    let compo = this;
    event.preventDefault();

    compo.setState({

      codeschooldescription: true
    });
  }

  validateURL(){
    let compo = this;
    event.preventDefault();

    compo.setState({

      codeschoolurl: true
    });
  }


  render(){
    return(
      <div className="spacer">
        <form
          onSubmit={this.sendCodeschool.bind(this)}
          ref='form'>
          <div className="form-group">
            <input
              type='text'
              className='form-control'
              ref='codeschoolname'
              onChange={this.validateName.bind(this)}
              placeholder='Code School Name' />
            <br />
          </div>
          <textarea
            className='form-control'
            rows='4'
            cols='35'
            type='text'
            ref='codeschooldescription'
            onChange={this.validateDescription.bind(this)}
            placeholder='Code School description' />
          <br />
          <input
            className='form-control'
            type='url'
            ref='codeschoolurl'
            onChange={this.validateURL.bind(this)}
            placeholder='here://code.school.example.url' />
          <br />
          <div className="form-group">
            <label htmlFor="file">
              Upload a Code School Image or Logo Here ( max 5mb )
            </label>
            <input
              id='file'
              className='btn btn-primary'
              type='file'
              ref='file'
              onChange={this.uploadFile.bind(this)} />
            <br />
            {this.state.filechosen ?
              <img src={this.state.file} width='140' />
              : null }{this.state.filechosen ?
                <button onClick={this.removeFile.bind(this)}>❌</button>
                : null}
              </div>
              <br />
              {this.state.posted ?
                <span>
                  <p>
                    Thank you for adding a Codeschool!
                  </p>
                </span>
                : null }
                <button
                  disabled={!this.state.codeschoolname}
                  disabled={!this.state.codeschooldescription}
                  disabled={!this.state.codeschoolurl}
                  type='submit'
                  className='btn btn-default'>
                  Add Code School
                </button>
              </form>
            </div>
          );
        }
      }
      export default CodeschoolForm;
