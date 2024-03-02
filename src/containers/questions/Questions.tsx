import { strings } from '@/localisation/strings';

import QuestionContainer from '@/components/question/QuestionContainer';
import QuestionCreator from '@/components/question/QuestionCreator';

import './Questions.scss';

function Questions() {
    return (
        <div className="questions">
            <h1 className="header">{strings.faq_header}</h1>

            <div className="question-card">
                <QuestionCreator />
                <QuestionContainer />
            </div>
        </div>
    );
}

export default Questions;
