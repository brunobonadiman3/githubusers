import React, { useContext } from 'react';

import Container from "../components/container";
import StarredContainer from "../components/userContainer";

import { context } from '../shared';

const Starred = () => {
    const ctx = useContext(context);

    return (
        <Container>
            <StarredContainer starred={ctx.userStarred} />
        </Container>
    );
}

export default Starred;