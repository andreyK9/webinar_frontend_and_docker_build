import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducers } from './reducers';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: [saga],
});

saga.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(fn: (state: RootState) => T) =>
  useSelector<RootState, T>(fn);
