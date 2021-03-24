import React, { Component } from 'react';
import Main from '../css/Main.css';
import Dashboard from '../components/dashboard/Dashboard.js';

class DashboardPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    )
  }

}

export default DashboardPage;
