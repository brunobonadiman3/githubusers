import React from 'react';
import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';

const ReposContainer = props => {
    //const{repos} = props;
    console.log(props);
    return (
        <Section>
            <Title>Repositórios</Title>
            <ListOfReposContainer> 
            {(props?.repos).map(repo => (
                    <Repo onClick={() => window.location.href(repo?.html_url )} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))} 
            </ListOfReposContainer>
        </Section>
    );
}

export default ReposContainer;