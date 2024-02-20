import React, { Component } from "react";
import Slider from "react-rangeslider";

// To include the default styles
import "react-rangeslider/lib/index.css";

class HorizontalSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10,
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  render() {
    const { value } = this.state;
    return (
      <div className="slider w-full">
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        {/* <div className="value">{value}</div> */}
      </div>
    );
  }
}

export default HorizontalSlider;
