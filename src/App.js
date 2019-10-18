import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import { questionAnswer } from './redux/actions';
import { changeQuestion } from './redux/actions';
import { submit } from './redux/actions';
import { initQuestions } from './redux/actions';
import Navbar from "./Navbar";


/*function App(props){
    console.log(props)

    return(
     <div className="App">
         <div className={"App"}>
             <Navbar/>

         <Game   currentQuestion={props.currentQuestion}
                 lengthQuestions={props.questions.length}
                 ﬁnished={props.ﬁnished}
                 score={props.score}
                 questions={props.questions}
                 question={props.questions[props.currentQuestion]}

                 onChangeQuestion={(index)=>{
                     props.dispatch(changeQuestion(index))
                 }}
                 onSubmit={(questions)=>{
                     props.dispatch(submit(questions))
                 }}
                 onQuestionAnswer={(answer)=>{
                     props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                 }}
         />
         </div>
     </div>
 );
}*/


class App extends Component {
    constructor(props){
        super(props);
        this.downloadQuestions = this.downloadQuestions.bind(this);
    }
    downloadQuestions(){
        fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=c408be74597939371f45")
            .then(function(response){
                return response.json();
            })
            .then(questionsDownloaded => {
                this.props.dispatch(initQuestions(questionsDownloaded));
                console.log(questionsDownloaded);
            });
    }
    componentDidMount() { //Lo llamo desde aqui para que solo se ejecute una vez
        this.downloadQuestions();
        setTimeout(()=> this.props.dispatch(submit(this.props.questions)),300000);
        setTimeout(()=> alert("Queda un minuto"),240000);
       // setTimeout(()=> this.props.dispatch(submit(this.initialState.questions)),300000);


    }

        render() {
            console.log(this.props.ﬁnished)
            if (this.props.questions.length === 0) {
                return (
                    <div className={"cargando"}>
                        <h1>CARGANDO</h1>
                        <h1> Darle al play del cronómetro al empezar el juego</h1>
                    </div>
                )
                //setTimeout(()=> this.props.dispatch(submit(this.props.question ===undefined)),2000);
            } else {
                return (
                    <div className={"App"}>
                        <Navbar/>
                        <Game currentQuestion={this.props.currentQuestion}
                              lengthQuestions={this.props.questions.length}
                              ﬁnished={this.props.ﬁnished}
                              score={this.props.score}
                              questions={this.props.questions}
                              question={this.props.questions[this.props.currentQuestion]}
                              onReset={() => {
                                  this.componentDidMount()
                              }}
                              onChangeQuestion={(index) => {
                                  this.props.dispatch(changeQuestion(index))
                              }}
                              onSubmit={(questions) => {
                                  this.props.dispatch(submit(questions))
                              }}
                              onQuestionAnswer={(answer) => {
                                  this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                              }}
                        />
                    </div>);
            }

        }
    }

function mapStateToProps(state){
    return{
        ...state
    };
}

export default connect(mapStateToProps)(App);