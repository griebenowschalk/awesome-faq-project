import Questions from '@/containers/questions/Questions';
import store from '@/redux/store';

import '@/scss/global.scss';
import { Provider } from 'react-redux';

{
    /* No routing needed for this example */
}
function App() {
    return (
        <Provider store={store}>
            <Questions />
        </Provider>
    );
}

export default App;
