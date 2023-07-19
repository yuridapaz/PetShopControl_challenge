const DisplayPage = ({ children }) => {
  return (
    <div className='mt-2 flex w-full items-start justify-center  @container'>
      {/* Grid Container */}
      <div className='grid w-full max-w-screen-2xl grid-cols-1  justify-items-center gap-3 p-4 pt-6 @lg:grid-cols-2 @3xl:grid-cols-3 @6xl:grid-cols-4 @7xl:grid-cols-5'>
        {children}
      </div>
    </div>
  );
};

export default DisplayPage;
