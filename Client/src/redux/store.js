import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esto nos sirve para conectar el proyecto con la extension del navegador

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) //esta línea sirve para que podamos hacer peticiones a una Api/servidor
);

export default store;
