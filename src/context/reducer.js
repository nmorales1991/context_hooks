import {SET_CITY} from './action'

const cambiarCiudad=(state,ciudad)=>{
    return{...state,ciudadEscogida: ciudad}
}
//reducer que funciona de manera parecida que en redux. viene desde el ProviderState por el método dispatch, el cual en este caso viene el type y el payload. en el reducer se ejecuta la función cambiarCiudad y se retorna el estado actualizado con su propiedad ciudadEscogida. Si no existe esta ciudad entonces se crea, pero en este caso en el ProviderState ya viene con un valor por defecto
export const ciudadReducer = (state, action)=> {
    switch (action.type) {
      case SET_CITY:
        return cambiarCiudad(state,action.payload)
      default:
        return state
    }
  }
