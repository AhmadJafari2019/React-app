import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';



class App extends Component {
    

    state = {
        persons: [
            { name: "Manuel", age: 24 },
            { name: "Nik", age: 55 },
            { name: "Stephanie", age: 20 }
        ], 
        otherState: 'some OTHER STATE.',
        showPerson: false,
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked');
        this.setState({
            persons: [
                { name: newName, age: 24 },
                { name: "Nik", age: 55 },
                { name: "Annina", age: 20 }
            ]
        });
    };
    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Maximillian', age: 24 },
                { name: event.target.value, age: 55 },
                { name: "Annina", age: 27 }
            ]
        });
    }
    
    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson: !doesShow,
        })
    }

    render() {

        const style = {
            backgroundColor: 'red',
            border: '1px solid blue',
            padding: '10px',
            cursor: "pointer"
        }

        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "you")}
                            changed={this.nameChangeHandler}>My hobby is Racing.</Person>
                        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                </div>);
        } 
        return (
                <div className="App" >
                        <h1>Hi I am React App.</h1>
                        <p>This is really Working.</p>
                        <button onClick={this.togglePersonHandler} style={style}>Switch me</button> {persons}
                </div>);
    }      
}
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Hi i am a react App!!!!!'));

export default App;

    





