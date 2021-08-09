import {
    Section,
    Title,
    ListOfStarredContainer,
    Starred
} from './styles';

const StarredContainer = props => {
    return (
        <Section>
            <Title>Repositórios mais Visitados</Title>
            <ListOfStarredContainer>
                {(props?.starred).map(starred => (
                    <Starred onClick={() => window.location.href(starred?.html_url )} key={starred?.id}>
                        <h2>{starred?.name}</h2>
                        <p>{starred?.description}</p>
                    </Starred>
                ))}
            </ListOfStarredContainer>
        </Section>
    );
}

export default StarredContainer;