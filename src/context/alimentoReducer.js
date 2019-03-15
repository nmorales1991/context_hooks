import {SET_ALIMENTO} from './alimentoAction'

const cambiarAlimento=(state,alimento)=>{
    return{...state,alimentoEscogido: alimento}
}

export const alimentoReducer = (state, action)=> {
    switch (action.type) {
      case SET_ALIMENTO:
        return cambiarAlimento(state,action.payload)
      default:
        return state
    }
  }
