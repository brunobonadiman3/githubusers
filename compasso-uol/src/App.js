import Routes from './routes/Routes';
import { ContextProvider } from './shared';

const App = () => (
    <ContextProvider>
        <Routes />
    </ContextProvider>
);

export default App;