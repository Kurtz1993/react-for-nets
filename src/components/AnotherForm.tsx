import React, { Component, FormEvent } from "react";

class AnotherForm extends Component {
  textRef = React.createRef<HTMLInputElement>();

  constructor(props: any) {
    super(props);
    this.submitData = this.submitData.bind(this);
  }

  submitData(e: FormEvent) {
    e.preventDefault();

    console.log(this.textRef.current.value);
  }

  render() {
    return (
      <form onSubmit={this.submitData}>
        <input type="text" ref={this.textRef} required minLength={5} maxLength={10} />
        <input type="submit" value="Create Todo" />
      </form>
    );
  }
}

export default AnotherForm;
