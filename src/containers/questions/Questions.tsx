import { strings } from '@/localisation/strings';
import { QuestionContainer, QuestionCreator } from '@/components/question';

import './styles.scss';

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
