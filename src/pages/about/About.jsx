import React, { use } from 'react';
import { ValueContext } from '../../layout/Root';

const About = () => {
    const {user}=use(ValueContext)
    console.log(user)
    return (
        <div>
            about
        </div>
    );
};

export default About;