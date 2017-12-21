import { CREATE_TRANSFER_CUSTOMER, CREATE_TRANSFER_CUSTOMER_ERROR} from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case CREATE_TRANSFER_CUSTOMER:
      return {...state, createTransferCustomerSuccess: action.payload.data};
    case CREATE_TRANSFER_CUSTOMER_ERROR:
      return {...state, createTransferCustomerError: action.payload.data};    
  }
  return state;
}