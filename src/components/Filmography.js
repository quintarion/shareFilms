import React from 'react';
import './Filmography.css';

class Filmography extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        film: '',
        link: '',
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
            <label htmlFor="film">Movie title :</label>  
            <input
            type="text"
            id="film"
            name="film"
            onChange={this.onChange}
            value={this.state.name}
            /> 
        </div>

        <div className="film-data">
            <label htmlFor="link">Add here the movie link :</label>
            <input
            type="text"
            id="link"
            name="link"
            onChange={this.onChange}
            value={this.state.firstname}
            />
        </div>

     <div className="film-data">
        <label htmlFor="comment">Add a comment :</label>
        <textarea id="comment" name="comment"
          rows="5" cols="80">
        It was a dark and stormy night...
        </textarea>
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