import React from 'react';

import { withFirebase } from '../components/Firebase';

const SignOutButton = ({ firebase }) => (
    <button  className="signout__button" type="button" onClick={firebase.doSignOut}>Sign Out</button>
);

export default withFirebase(SignOutButton);