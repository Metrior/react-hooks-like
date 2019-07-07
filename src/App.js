import React, {Component} from 'react';
import LikeButton from "./common/LikeButton"
import Picture from "./common/Picture"
import './App.css';
import {connect} from "react-redux"
import {changeLikeReducer} from "./reducers/changeLikeReducer";
import {clickLike} from "./actions";

class App extends Component {

    render() {
        const {like, clickLike} = this.props;
        return (
            <div className="App">
                <Picture defaultCount={like.count} defaultStatus={like.state} changeLike={clickLike}/>
                <LikeButton defaultCount={like.count} defaultStatus={like.state} changeLike={clickLike}/>
            </div>
        );
    }
}


const mapStateToProps = state => {
  return {
      like: state.changeLikeReducer,
  }
};

const mapDispatchToProps = dispatch => {
    return {
        clickLike: (status) => dispatch(clickLike(status))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
