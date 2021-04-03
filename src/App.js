import React, { Component } from 'react'
import About from './components/About/About'
import Town from './components/Town/Town'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 'about'
    }
  }

  selectTab(tabName) {
    this.setState({ selectedTab: tabName })
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li><span className={'tab'} onClick={() => { this.selectTab('about') }}>About Me </span></li>
          <li><span className={'tab'} onClick={() => { this.selectTab('town') }}>My Town</span></li>
        </ul>
        {this.state.selectedTab === 'about' ? <About /> : <Town />}
      </div>
    );
  }
}

export default App;
