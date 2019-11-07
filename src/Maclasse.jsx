import React, { Component } from "react";

class Maclasse extends Component {
  diviser = () => {
    const tout = "hugo dores";
    const [prenom, nom] = tout.split(" ");
    return (
      <div>
        {nom}
        <h1> El </h1>
        {prenom}
      </div>
    );
  };

  render() {
    return <div>{this.diviser()}</div>;
  }
}

export default Maclasse;
