import React from 'react';
import Button from "./Button";
import Actionbar from "./Actionbar";
export default class Game extends React.Component {
    render(){
        return(
            <div>
                {this.props.question.question}
                <input type="text"
                       value={this.props.question.userAnswer || ''}
                       onChange={(e)=>this.props.onQuestionAnswer(e.target.value)}/>

                <button id="anterior" onClick="myFunction()">Anterior</button>
                <button id="submit" onClick="myFunction()">Submit</button>
                <button id="siguiente" onClick="myFunction()">Siguiente</button>

            </div>
        );
    }



}