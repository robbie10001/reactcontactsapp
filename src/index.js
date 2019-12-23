//when we create our first page- index.js our localhost3000 page becomes empty. 
//Import the React and ReactDOM libraries 
//import=we want to get code from some other file or dependency
//React=the variable we wanto assign this import to
//from= we are about to specify the name of the library or file we are importing from
//'react'= the name of the dependency or path of the file we are importing.
import React from "react"; 
import ReactDOM from "react-dom"; 
//the above lines are import statements. 
//every file that we create inside of our project is like it's own universe.
//if we want to access any libraries or any code that we write, we need to write an import statement. 
//we can also use require function. 
//const React = require("react");
//require functions come from CommonJSMOdules. 
//Whereas import statement come from ES2015 syntax. 


//referencing JS variables in JSX. In the above code, we created a function 
//we then returned "click on me!"
//we then called that function within our JSX. 


//We can reference more than strings. WE can reference numbers, arrays, strings. 
//HOWEVER, WE CANNOT USE OBJECTS INSIDE REACT COMPONENTS! 

//ITS GOOD PRACTICE TO KEEP OUT DEVELOPER TOOLS OPEN WHEN WE ARE WORKING ON OUR REACT APPLICATIONS!



//create a react component. 
//a react component is a function or a class. It produces HTML to show the user using JSX. It also handles feedback from the user using event handlers. 
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


//1. adding a class to an element uses different syntax.
//example HTML 
//<label class ="label" for="name">Enter name:</label>
//example JSX
//<label className="label" for="name">Enter name:</label>
//the reason we use className is so that JS doesn't think we are trying to define a js class!

//2. Adding custom styling to an element uses different syntax
//example HTML 
//<button style="background-color:blue; color: white;">Sumbit</button>
//example JSX 
//<button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button> 

//3. JSX can reference JS variables
//we can take a JS variable and print it out inside our JSX block.
//

//this div looks like HTML, it's not. Babel is used to process our JSX. 
//our browsers don't understand JSX code! JSX is very similar in form and use to html. 
//our JSX is translated into it's equivilent Java Script code. 
//we write JSX for simplicity. The reason we use JSX is that it's easier for us to understand! 

//HTML would be <div style="background-color:red;"></div>
//JSX = <div style={{ backgroundColor:'red'}}</div>





//another way to do this is to write a fat arrow function.
//const App = () => {
//    return <div>Hi there!</div>;
//}
//take the react component and show it on the screen. 
ReactDOM.render(
    <App />,
    document.querySelector("#root")
    );


//component nesting= A component can be show inside of another.
//component resuability= we want to make components that can be easily reused through our application
//component configuration= we should be able to configure a component when it is created. 

