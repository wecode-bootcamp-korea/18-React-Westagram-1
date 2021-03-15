import React from 'react';
import Product from './Components/Product';
import './ProductList.scss';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state={
      productList: [],
    };
  }

  componentDidMount() {
    fetch("/data/ProductListData.json")
    .then(res => res.json())
    .then(res => this.setState({productList: res }));
  }

  render() {
    //console.log(this.state.productList);
    return (
      <div className="productList">
        <h1>본죽 리스트</h1>
        <div className="zookContainer">
          {this.state.productList.map((zook) => {
          return (
            <Product 
              key={zook.id}
              name={zook.name}
              price={zook.price}
              img={zook.img_url}
              isNew={zook.isNew}
              isBest={zook.isBest}
            />
          )
        })} 
        </div>         
      </div>
    );
  }
}

export default ProductList;