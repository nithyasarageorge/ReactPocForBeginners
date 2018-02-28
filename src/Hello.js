import React from "react";
import Sample from './sample';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "I'm a Frontend Developer"};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hello {name} !</h1>
        <div style={{ 'margin-top': '10px' }}></div>
        <Sample sampleval={this.state.value} />
        <p>Developer profile :</p>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="I'm a Backend Developer">Backend Developer</option>
          <option value="I'm a Frontend Developer">Frontend Developer</option>
          <option value="I'm a FullStack Developer">FullStack Developer</option>
          <option value="I'm an Android Developer">Android Developer</option>
        </select>
      </div>
    );
  }
}
export default Hello;
