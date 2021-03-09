import React, { Component } from "react";

class Reply extends Component {
   

  render() {
    return (
      <ul>
        {this.props.contents.map((el) => (
            <div key={el.id} className="reply">
              <div className="reply__name">durumi</div>
              <div className="reply__desc">{el.content}</div>
              <i
                onClick={() => this.props.onClickDelete(el.id)}
                className="fas fa-ellipsis-h"
              ></i>
              <i className="far fa-heart"></i>
              <div
                onClick={() => this.props.onClickHeart(el.id)}
                style={{ color: el.color ? "tomato" : "black" }}
                className="reply__heart"
              >
                <i className="far fa-heart"></i>
              </div>
            </div>
        )
    )}
      </ul>
    );
  }
}

export default Reply;
