/* REACT INTRO 
1. import the React and ReactDOM libraries.
2. import React from "react";
3. import ReactDOM from "react-dom";
4. 'React' know what a component is and how to make components work together. 'ReactDOM' knows how to take a component and make it show up in the DOM(as some sort of HTML).
5. import=code from another file or dependency,ReactDOM=the variable(could be anything),from=the library we are importing from. 'react-dom'= the name of the dependecy we are importing.
6. Every file we have is it's own universe, we need to write an important statement to link our pages. (ES2015 syntax)
7. We could import using a require function- const React = require("react"); (CommonJSModules)
*/
import React from "react"; 
import ReactDOM from "react-dom"; 

/*
WHAT IS REACT AND WHAT'S ITS PURPOSE? 

React is a Javascript library. React's purpose is to show content (HTML) to user and handle user interaction.
When we are making our Apps we can use just REACT but it makes sense to use third party resources in order to increase our speed in development. 
REACT is very versitile and can work with almost anything. 
REACT can work with a tremendous variety of other libraries, packages, servers and databases. 
*/

/*INSTALLING REACT AND CREATING A REACT APPLICATION 

Important command line commands

installing an application globally (setup first time)

create-react-app name of the package we want to install

npm install -g create-react-app nameoftheapp

------------------------
to create a new react application 

create-react-app nameofapp
cd nameofapp
npm start - starts the application running (localhost3000 default)
Control-C- stops the application that is running. 

two possible errors- 

port is in use----> we can either start the other server or use another port. 
localhost:3000 doesn't work----> an easy workaround we can use the on your network in our terminal. 
*/

/*
Exploring a Create-react-app project 
-------------------------------------

Project directory
------------------

src------> folder where we put all the source code we write
(in general we will delete the automatically generated files within this folder)
public------> folder that stores static files, like images, static html files and the li
node_modules-------> folder that contains all of our project dependencies. In general, we won't have to play around with this folder much.
package.json ------> records our project dependencies and configures our project.
package-lock.json ------> records the exact version of packages that we install
README.md -----> instruction on how to use this project. 
.gitignore------> This file lists out the various files and folders in should ignore if it is tracking and maintaining our projects. 
*/

/* USING REACT 
1. We can reference more than strings. WE can reference numbers, arrays, strings. 
2. HOWEVER, WE CANNOT USE OBJECTS INSIDE REACT COMPONENTS! 
3. ITS GOOD PRACTICE TO KEEP OUT DEVELOPER TOOLS OPEN WHEN WE ARE WORKING ON OUR REACT APPLICATIONS!
*/

/*COMPONENT SYNTAX AND DIFFERENCE BETWEEN HTML AND JSX 
1. Example HTML and JSX label tag.

example HTML 
    <label class ="label" for="name">Enter name:</label>
example JSX
    <label className="label" for="name">Enter name:</label>
//the reason we use className is so that JS doesn't think we are trying to define a js class!

2. Adding CUSTOM STYLING to an element 

example HTML 
    <button style="background-color:blue; color: white;">Sumbit</button>
example JSX 
    <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button> 


3. JSX and REFERENCING Java Script Variables 

we can take a JS variable and print it out inside our JSX block.

/*WHAT IS BABEL?

Babel - is a command line tool, that can take any version of javascript and spit out a newer version.
babel is included by default whenever we create a new project.  
Internally babel has heaps of packages, and partially explains why we need so many packages when we create a new app. 
Babel is used to process our JSX. our JSX is translated into it's equivilent Java Script code. We write JSX for simplicity. 

example HTML would be 
    <div style="background-color:red;"></div>
example JSX 
    <div style={{ backgroundColor:'red'}}</div>

*/
/* RENDERING A REACT COMPONENT TO THE SCREEN
1. In order to get a react component to render, we must do the following.
    ReactDOM.render(
        <App />,
        document.querySelector("#root")
        );
*/

/* COMPONENT NESTING, COMPONENT RESUABILITY, COMPONENT CONFIGURATION 
    component nesting= A component can be show inside of another.
    component resuability= we want to make components that can be easily reused through our application
    component configuration= we should be able to configure a component when it is created. 
*/

/*CREATING A REACT COMPONENT 
1. We need to use a function or a class. This creates HTML to show the user using JSX and handles user feedback through event handlers.

2. Function Component Example 

const App = function() {
    const buttonText = "Click me";
    return (
    <div>
        <label className ="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: "blue", color: "white" }}>
            {buttonText}
        </button> 
    </div>
    );
};

3. We can also use fat arrow function syntax 
    const App = () => {
        return <div>Hi there!</div>;
    }
*/

/*

class App extends React.Component {
    state = {styleOne: {}, styleTwo: {}};
 
    onMouseMove = (event) => {
        this.setState({
            styleOne: transform(-event.clientX / event.clientY),
            styleTwo: transform(event.clientX / event.clientY)
        });
    }
 
    render() {
        return (
            <div onMouseMove={this.onMouseMove}>
                <div className="panel" style={this.state.styleOne}/>
                <div className="panel" style={this.state.styleTwo}/>
            </div>
        )
    }
}
 
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
*/
