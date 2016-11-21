export function selectBook(book) {
    // select book is an ActionCreator, it needs to return an action,
    // an object iwth a type property
    // always has a type and sometimes a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}