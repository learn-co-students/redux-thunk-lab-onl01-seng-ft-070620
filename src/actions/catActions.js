

export const fetchCats = () => {
    const url = 'https://learn-co-curriculum.github.io/cat-api/cats.json'
    return (dispatch) => {
        dispatch({type: "LOADING_CATS"})
        fetch(url).then(resp=>resp.json())
            .then(cats => {
                dispatch({type: "ADD_CATS", cats: cats.images})
            })
    }
}