import { strings } from '@/localisation/strings';

import QuestionContainer from '@/components/question/QuestionContainer';
import QuestionCreator from '@/components/question/QuestionCreator';

import './Questions.scss';

function Questions() {
    return (
        <div className="questions">
            <h1>{strings.faq_header}</h1>

            <div className="question-card">
                <QuestionContainer />
                <QuestionCreator />
            </div>
        </div>
    );
}

export default Questions;
