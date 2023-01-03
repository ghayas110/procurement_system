import { combineReducers } from 'redux';
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import DistributionCreateReducer from './Distributioncreatereducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}
const mainReducer = combineReducers({
    DistributionCreateReducer: DistributionCreateReducer,


})

export default persistReducer(persistConfig, mainReducer);