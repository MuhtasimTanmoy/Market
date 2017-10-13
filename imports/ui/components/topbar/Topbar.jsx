import React, {Component} from 'react';

export default class Topbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          title: 'Andorra'
        }, {
          title: 'United Arab Emirates'
        }, {
          title: 'Afghanistan'
        }, {
          title: 'Antigua'
        }, {
          title: 'Anguilla'
        }, {
          title: 'Albania'
        }, {
          title: 'Armenia'
        }, {
          title: 'Netherlands Antilles'
        }, {
          title: 'Angola'
        }, {
          title: 'Argentina'
        }, {
          title: 'American Samoa'
        }, {
          title: 'Austria'
        }, {
          title: 'Australia'
        }, {
          title: 'Aruba'
        }, {
          title: 'Aland Islands'
        }, {
          title: 'Azerbaijan'
        }, {
          title: 'Bosnia'
        }, {
          title: 'Barbados'
        }, {
          title: 'Bangladesh'
        }, {
          title: 'Belgium'
        }, {
          title: 'Burkina Faso'
        }, {
          title: 'Bulgaria'
        }, {
          title: 'Bahrain'
        }, {
          title: 'Burundi'
        }
      ]
    }

  }

  componentDidMount() {

    $('.ui.search').search({source: this.state.content});
  }

  render() {
    return (
      <div className='seven wide column topBar'>
        <div className="ui float search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Search products..."></input>
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </div>
    )
  }
}
