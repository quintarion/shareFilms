import React from 'react';
import './Filmography.css';

class Filmography extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      name: '',
      poster: '',
      comment: '',
    }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }
    submitForm(e) {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
            
        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
            
            fetch(url, config)
            .then(res => res.json())
             .then(res => {
               if (res.error) {
                 alert(res.error);
               } else {
                 alert(`Your movie ${res} has been added to the list!`);
               }
             }).catch(e => {
               console.error(e);
               alert('Error sending');
        });
    }

render () {
    return (
    <div className="film-container">
    <form onSubmit={this.submitForm}>
    <h1>Share your favorite movie</h1>
    <fieldset>
        <legend>Informations</legend>
        <div className="film-data">
            <label htmlFor="name">Movie title :</label>  
            <input
            type="text"
            id="name"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
            /> 
        </div>

        <div className="film-data">
            <label htmlFor="poster">Add here the movie link :</label>
            <input
            type="text"
            id="poster"
            name="poster"
            onChange={this.onChange}
            value={this.state.poster}
            />
        </div>

     <div className="film-data">
        <label htmlFor="textarea">Add a comment :</label>
        <input id="comment" name="comment"
          rows="5" cols="80" placeholder="It was a dark and stormy night..."
          onChange={this.onChange}
          value={this.state.comment}
        />
     </div>

     <div className="film-data button">
       <input type="submit" value="Send" />
     </div>
    </fieldset>
    </form>
    </div>
    );
}
}

export default Filmography;