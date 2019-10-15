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
                console.log("Ver si cambian preguntas");
                console.log(questionsDownloaded);
            });
    }
    componentDidMount(){ //Lo llamo desde aqui para que solo se ejecute una vez
        this.downloadQuestions();
        setTimeout(()=> this.props.dispatch(submit(this.props.questions)),600000);
        setTimeout(()=> alert("Queda un minuto"),540000);}     render() {
        console.log(this.props.ﬁnished)
        return (
            <div>
                <Navbar/>
                <Game currentQuestion={this.props.currentQuestion}
                      lengthQuestions={this.props.questions.length}
                      ﬁnished={this.props.ﬁnished}
                      score={this.props.score}
                      questions={this.props.questions}
                      question={this.props.questions[this.props.currentQuestion]}
                      onReset={()=>{
                          this.componentDidMount()
                      }}
                      onChangeQuestion={(index)=>{
                          this.props.dispatch(changeQuestion(index))
                      }}
                      onSubmit={(questions)=>{
                          this.props.dispatch(submit(questions))
                      }}
                      onQuestionAnswer={(answer)=>{
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}
                />
            </div>);}}

function mapStateToProps(state){
    return{
        ...state
    };
}

export default connect(mapStateToProps)(App);