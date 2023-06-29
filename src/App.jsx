import Display from './components/Display';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className='w-full h-screen bg-slate-200 flex flex-col'>
        <Header />
        <div className='w-full h-full flex'>
          <Navbar />
          <Display />
        </div>
      </div>
    </>
  );
}

export default App;
