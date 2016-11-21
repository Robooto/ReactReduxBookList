// state argument is not application state but state reducer is responsible for
// action is the type of action that happens
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}