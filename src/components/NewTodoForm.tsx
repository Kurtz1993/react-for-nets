import React, { Component, FormEvent, SyntheticEvent } from "react";

interface NewTodoFormState {
  text: string;
  done: boolean;
}

class NewTodoForm extends Component<any> {
  state = {
    text: "",
    done: false,
  };

  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.sendToMyApi = this.sendToMyApi.bind(this);
  }

  handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    // console.log({ [event.currentTarget["name"]]: event.currentTarget["value"] });
    this.setState({ [event.currentTarget["name"]]: event.currentTarget["value"] });
  }

  handleCheckbox(event: SyntheticEvent<HTMLInputElement>) {
    this.setState({ done: event.currentTarget.checked });
  }

  sendToMyApi(e: FormEvent) {
    e.preventDefault();

    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.sendToMyApi}>
        <input type="text" name="text" onChange={this.handleChange} value={this.state.text} />
        <input
          type="checkbox"
          name="done"
          checked={this.state.done}
          onChange={this.handleCheckbox}
        />
        <input type="submit" value="Create todo" />
      </form>
    );
  }
}

export default NewTodoForm;
