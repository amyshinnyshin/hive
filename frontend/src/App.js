import TopNav from './components/TopNav/TopNav'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'


import './App.css';
import './style.css';



function App() {
  return (
    <div className="App">

      <div className='top-nav-container'>
        <TopNav />
      </div>
      
      <div className='leftsidebar-container'>
        <LeftSidebar />
      </div>

      <div className='page-container'>
        <div className='header-section'>
          <h1>My Applications</h1>

          <div className='button-group'>
            <button>End Job Search</button>
            <button>Add</button>
          </div>
          
        </div>
      </div>
     
    </div>
  );
}

export default App;
