const initialState = { likedCards: [] }

function toggleLike(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_LIKE':
      const likedCardIndex = state.likedCards.findIndex(item => item.id === action.value.id)
      if (likedCardIndex !== -1) {
        // Le contact est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          likedCards: state.likedCards.filter( (item, index) => index !== likedCardIndex)
        }
      }
      else {
        // Le contact n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          likedCards: [...state.likedCards, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleLike
