function addFavorite(dispatch, card){
  dispatch({
    type:"TOGGLE_LIKE",
    card:card
  });
}

export default addFavorite
