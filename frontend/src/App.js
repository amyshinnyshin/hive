import TopNav from './components/TopNav/TopNav'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import { PrimaryButton, OutlineButton } from './components/Buttons/Buttons'


import './App.css';
import './style.css';



function App() {
  const handleClick = () => {
    console.log('Button Clicked');
  };

  return (
    <div>
      <div className='top-nav-container'>
        <TopNav />
      </div>
      
      <div className='global-layout'>

        <div className='leftsidebar-container'>
          <LeftSidebar />
        </div>


        <div className='page-container'>
          
            <div className='header-section'>

              <h1>My Applications</h1>

              <div className='button-group'>
              <OutlineButton buttonText="End Job Search" showIcon={false} onClick={handleClick} />
              <PrimaryButton buttonText="Add" showIcon={false} onClick={handleClick} />
              </div>
              
            </div>

        </div>
        
      </div>

    </div>
  );
}

export default App;
