// function that sends a dispatch to indicate loading state,
// calls fetch() to retrieve cat data,
// calls a 2nd dispatch with the images in the returned data
export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' })
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: "ADD_CATS", cats: responseJSON.images }) )
  }

}
