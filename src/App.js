import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchStatus } from './redux/statusRedux';
import { fetchMatches } from './redux/matchesRedux';
import { fetchUsers} from './redux/usersRedux';
import { NavBar } from './components/views/NavBar/NavBar'
import { Container } from './components/views/Container/Container'
import { Routes, 
  Route,
  Link
   } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { UserPage } from './components/pages/UserPage/UserPage';
import { Admin } from './components/views/Admin/Admin';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchStatus()), [dispatch]);
  useEffect(() => dispatch(fetchMatches()), [dispatch]);
  useEffect(() => dispatch(fetchUsers()), [dispatch])
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user:id' element={<UserPage />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
