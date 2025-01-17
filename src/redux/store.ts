import { Action, combineReducers, configureStore, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import uiSlice from './slices/uiSlice'
import modalSlice from './slices/modalSlice'
import quizSlice from './slices/quizSlice'

const rootReducer = combineReducers({
     ui: uiSlice,
     modal: modalSlice,
     quiz: quizSlice
})

const store = configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
          serializableCheck: {
               ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
          }
     })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, Action> & typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>

export default store