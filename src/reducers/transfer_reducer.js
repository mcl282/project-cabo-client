import { 
  CREATE_TRANSFER_CUSTOMER, 
  CREATE_TRANSFER_CUSTOMER_ERROR,
  CREATE_TRANSFER_SOURCE_ERROR, 
  FETCH_TRANSFER_SOURCE, 
  FETCH_TRANSFER_SOURCE_ERROR, 
  UPDATE_TRANSFER_SOURCE 
} from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case CREATE_TRANSFER_CUSTOMER:
      return {...state, createTransferCustomerSuccess: action.payload.data};
    case CREATE_TRANSFER_CUSTOMER_ERROR:
      return {...state, createTransferCustomerError: action.payload.data};    
    case CREATE_TRANSFER_SOURCE_ERROR:
      return {...state, createTransferSourceError: action.payload.data};    
    case FETCH_TRANSFER_SOURCE:
      return {
        ...state, 
        transferSource: action.payload.data.funding_source_data, 
        user:  action.payload.data.user, 
        removed: false};
    case FETCH_TRANSFER_SOURCE_ERROR:
      return {...state, fetchTransferSourceError: action.payload, removed: false};
    case UPDATE_TRANSFER_SOURCE:
      return {
        ...state, 
        transferSource: action.payload.data.funding_source_data, 
        removed: action.payload.data.removed};
      
    default: return state;
  }
}