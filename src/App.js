import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { MapView } from './components/Map/Map';

function App() {

const [users, setUsers] = useState([])

const getApi = async () => {
  const user = await axios.get(`https://randomuser.me/api/?results=100`)
  setUsers(user.data.results)
}

useEffect(() => {
  getApi()
}, [])


  return (
    <div className="App">
      <MapView
      users={users}
      />
    </div>
  );
}

export default App;
