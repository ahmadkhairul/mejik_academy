import { createStore, combineReducers, applyMiddleware } from "redux";
import course from "../_reducers/course";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  course
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
