import React from 'react';
class Sample extends React.Component {
  render() {
    return (<div> {this.props.samplename} {this.props.sampleval} </div>);
  }
}
export default Sample;
