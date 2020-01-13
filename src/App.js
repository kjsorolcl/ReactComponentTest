import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MetisMenu from 'react-metismenu'
import SvgIcon from '@material-ui/core/SvgIcon';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

class HomeIcon extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>

    );
  }
}

const content = [
  {
    "id": 1,
    icon: "bolt",
    "label": "Label of Item",
    "to": "#a-link"
  },
  {
    "id": 2,
    "icon": "icon-class-name",
    "label": "Second Item"
  },
  {
    "id": 3,
    "parentId": 2,
    "icon": "icon-class-name",
    "label": "Sub Menu of Second Item",
    "to": "/another-link1"
  },
  {
    "id": 4,
    "parentId": 2,
    "icon": "icon-class-name",
    "label": "Sub Menu of Second Item",
    "to": "/another-link2"
  },
  {
    "id": 5,
    "parentId": 4,
    "icon": "icon-class-name",
    "label": "Sub Menu of Second Item",
    "to": "/another-link3"
  }

];

function App() {
  return (
    <div className="App">
        <MetisMenu 
          iconNameStateVisible="minus"
          iconNameStateHidden="plus"
          content={content} activeLinkFromLocation 
          />
    </div>
  );
}

export default App;
