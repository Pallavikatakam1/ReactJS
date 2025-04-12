import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

const RoutesFile = () => {
    return  (
        <>
        <Router>
            <Routes>
                <Route path = "/" element= {<Homepage/>} />
            </Routes>
        </Router>
        </>
    )
}

export default RoutesFile;