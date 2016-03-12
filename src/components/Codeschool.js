class Codeschool extends React.Component{
import $ from 'jquery';
// import ReviewForm from './ReviewForm';
// import ReviewListfrom './ReviewList';

    constructor(){
      super();

      this.state ={
        databucket: []
      }
    }

    showCodeschool(){


      let compo = this;
      var codeschoolId = this.props.params.codeschoolId;
      let APIurl = `https://checktaskmanager.herokuapp.com/codeschools/${codeschoolId}`;

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
      return(
        <div className="well">
          <h1>Codeschool: {this.state.codeschool.name}</h1>
          <p className="lead">{this.state.codeschool.description}</p>
          {/*<ReviewList codeschoolId={this.props.params.codeschoolId} />*/}
        </div>
      );
    };
}

export default Codeschool;
