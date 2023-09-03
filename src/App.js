import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error } from './components/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, createContext } from 'react';
import './App.css';

export const AppContext = createContext();

function App() {
    const [username, setUsername] = useState("Justin");
    const client = new QueryClient({defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }});
    
    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <AppContext.Provider value={{username, setUsername}}>
                    <Router>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='*' element={<Error />} />
                        </Routes>
                    </Router>
                </AppContext.Provider>
            </QueryClientProvider>
        </div>
    );
}

export default App;
