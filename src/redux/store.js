import { configureStore } from "@reduxjs/toolkit";
import alertsSlices from "./slices/alerts.slices";
import pokemonsSlices from "./slices/pokemons.slices";

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlices,
    alerts: alertsSlices
  }
});

export default store;
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";
// import pokemonsReducers from "./reducers/pokemonsReducers";
// import alertsReducers from './reducers/alertsReducers.js'

// const rootReducer = combineReducers({
//   pokemons: pokemonsReducers,
//   alerts: alertsReducers
// });

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;