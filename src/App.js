import SearchInput from "./components/SearchInput";
import NavigationBar from "./components/NavigationBar";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='bg-slate-50 min-h-screen'>
        <div className='flex flex-wrap justify-center relative'>
            {/*검색 input*/}
            <SearchInput />
            <NavigationBar />
        </div>
        <Routes>
            <Route exact path={'/'} element={<Navigate to={'/all'} />}/>
        </Routes>
      {/* 검색 결과 */}
    </div>
  );
}

export default App;
