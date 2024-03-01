import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import questionsSlice from './slices/questionsSlice';

// Create the store and add redux thunk middleware for async actions
const store = configureStore({
    reducer: {
        questions: questionsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(thunk),
});

export default store;
