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
               
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                      {this.props.quiz_question.answer_options.map((data, index) => {
                            return <QuizQuestionButton key={index} button_text={data} clickHandler={this.handleClick.bind(this)} />
                        }
                        )}
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion
