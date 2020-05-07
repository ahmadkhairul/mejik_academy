import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from "../_reducers/auth";
import course from "../_reducers/course";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  auth,
  course
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
