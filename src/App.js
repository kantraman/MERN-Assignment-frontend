import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import ErrorPage from './components/error/Error'
import Header from './components/header/Header';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import AddPost from './components/post/AddPost';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article-list" element={<ArticleList />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/post/create" element={<AddPost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
