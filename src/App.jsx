import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className='w-full h-screen bg-slate-200 flex flex-col'>
        <Header />
        <div>
          <div>
            <Navbar />
          </div>
          <div>Container</div>
        </div>
      </div>
    </>
  );
}

export default App;
