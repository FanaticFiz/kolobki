import React from "react";
import rLogo from "../../../assets/rLogo.svg";
import aLogo from "../../../assets/aLogo.svg";

import "./Square.scss";

interface SquareProps {
  value: boolean;
  i: number;
  j: number;
  onChange: (i: number, j: number) => void;
}

export class Square extends React.Component<SquareProps> {

  constructor(props: Readonly<SquareProps>) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="Square" onClick={this.handleClick}>
        {this.props.value ? <img src={rLogo} alt="logo"/> : <img src={aLogo} alt="logo"/>}
      </div>
    )
  }

  private handleClick() {
    this.props.onChange(this.props.i, this.props.j);
  }

}
