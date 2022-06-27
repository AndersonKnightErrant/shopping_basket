import CartList from "./containers/CartList";
import GoodsList from "./containers/GoodsList";
import './index.css';
import PayList from "./components/PayList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './router/Category'

function App() {
  return (
    <>
      <GoodsList />
      <CartList />
      <Router>
        <Routes>
          <Route path="/pay" element={<PayList />} />
          <Route exact path="/cat" element={<Category />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
