import React from 'react';
import './Product.scss';

class Product extends React.Component {
  render() {
    return (
      <div className="product">        
        <img alt="zook" src={this.props.img}/>
        {this.props.isNew && <p className="newMark">NEW</p>}
        {this.props.isBest && <p className="bestMark">BEST</p>}
        <p>{this.props.name}</p>
        <p>{this.props.price}원</p>
      </div>
    );    
  }
}

export default Product;