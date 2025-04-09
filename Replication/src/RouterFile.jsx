import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import GiftPage from './GiftPage';

const RouterFile = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/items" element={<GiftPage />}/>
                </Routes>
            </Router>
        </>
    );
};

export default RouterFile;
