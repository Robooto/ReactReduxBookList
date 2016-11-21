import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// this is a container due to it beign connected to some state
class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                 key={book.title} 
                 onClick={() => this.props.selectBook(book)}
                 className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // whatever is returned from here will show up as props inside BookList

    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    // When ever selectBook is called the result should be passed to all our reducers
    // adds to the props this.props.selectBook
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote booklist from a component to a container it needs to know about the
// dispatch method, selectbook and is availble as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);