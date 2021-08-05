import logo from './logo.svg';
import './Author.css';
import { Router } from '@reach/router';
import MainPage from './views/MainPage';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function Authors() {
    return (
        <div>
            <Router>
                <MainPage path="/" />
                <NewAuthor path="/new" />
                <UpdateAuthor path="/update/:id" />
            </Router>
        </div>
    );
}

export default Authors;
