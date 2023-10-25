import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

const DummyChart = React.lazy(() => import('./components/dummyChart'));
const DummyTable = React.lazy(() => import('./components/dummyTable'));
const DummyList = React.lazy(() => import('./components/dummyList'));
const DummyContainer = React.lazy(() => import('./components/dummyContainer'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <DummyContainer />
          <Routes>
            <Route path="/" element={<Navigate to={'dummyTable'} />} />
            <Route path="dummyTable" element={<DummyTable />} />
            <Route path="dummyChart" element={<DummyChart />} />
            <Route path="dummyList" element={<DummyList />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
