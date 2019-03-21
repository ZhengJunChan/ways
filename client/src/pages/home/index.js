import React, { Component } from 'react';
import axios from 'axios';

import SaleItem from '../../components/SaleItem';

import './home.scss';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get('/api/sales')
      .then(({ data }) => {
        this.setState({
          list: data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { list } = this.state;
  
    return (
      <div className="home-page container">
        {list.map(item => <SaleItem key={item.id} item={item} />)}
      </div>
    );
  }
}

export default Home;
