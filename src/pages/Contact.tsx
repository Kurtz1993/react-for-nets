import React from "react";

const Contact: React.FC<any> = ({ match, history }) => (
  <div className="contact">
    <h1>Contact werks!</h1>
    {match.params.id && <p>The requested contact ID is: {match.params.id}</p>}

    <button type="button" onClick={() => history.push("/home")}>
      Go Home, You're Drunk
    </button>
  </div>
);

export default Contact;
