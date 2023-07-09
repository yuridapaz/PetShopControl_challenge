import Display from './components/Display';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className='flex h-screen w-full flex-col bg-slate-100'>
        <Header />
        <div className='flex h-full w-full'>
          <Navbar />
          <Display>oi</Display>
        </div>
      </div>
    </>
  );
}

export default App;
