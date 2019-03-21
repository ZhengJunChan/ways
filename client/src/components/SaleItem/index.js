import React, { Component } from 'react';

import './SaleItem.scss';

class SaleItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <a className="sale-item" href={`/sale/detail?id=${item.id}`} target="_black">
        <div className="sale-item__image" style={{backgroundImage: `url(${item.image})`}}>
          <div className="sale-item__mark-type">
            {item['mark-tag']}
          </div>
        </div>
        <div>
          <h3 className="sale-item__title">{item.title}</h3>
          <div className="sale-item__time-label">
            <span>活动时间：{item.startDate}-{item.endDate}</span>
          </div>
          <div className="sale-item__bottom">
            <span className="sale-item__price"><b>¥</b><strong>{item.price}</strong></span>
            {/* <sapn></sapn> */}
          </div>
        </div>
      </a>
    );
  }
};

export default SaleItem;
