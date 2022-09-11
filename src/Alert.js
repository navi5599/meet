import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontStyle: 'Italic',
      fontSize: '16px',
      margin: '10px',
      height: '10px',
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#55b1f2';
  }
}
export { InfoAlert };

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#fc4e4e';
  }
}
export { ErrorAlert };

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#fcba03';
  }
}
export { WarningAlert };
