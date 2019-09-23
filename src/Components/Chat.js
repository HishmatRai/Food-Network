import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
import { width } from '@material-ui/system';
 
export default class Demo extends Component {
 
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 
  render() {
    return (<div >
      <Launcher
        agentProfile={{
          teamName: 'Food Network',
          imageUrl: 'http://www.simpleimageresizer.com/_uploads/photos/22fca96e/712H4HqY7EL_1_50x50.png',
        
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}