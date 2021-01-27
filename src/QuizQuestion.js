import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

    constructor(props) {
        super(props)

        this.state = {
            incorrectAnswer: false
        }
    }


    handleClick(buttonText) {

        if (this.props.quiz_question.answer === buttonText) {
            this.props.showNextQuestionHandler()
        }
        this.setState((state) => {
            return { incorrectAnswer: !state.incorrectAnswer }
        })
    }

    render() {
        return (
            <main>
                {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null}
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <li></li>
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion
