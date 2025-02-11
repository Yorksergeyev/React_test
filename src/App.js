// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/who">Кто я?</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/who" element={<Who />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return <h1>Мой Первый Сайт</h1>;
}

function Home() {
  return (
    <section>
      <h2>Добро пожаловать!</h2>
      <p>Это главная страница моего сайта.</p>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2>О нас</h2>
      <p>Мы занимаемся созданием крутых сайтов!</p>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Контакты</h2>
      <p>Email: contact@example.com</p>
    </section>
  );
}

function Who() {
  return (
    <section>
      <h2>Юрий Сергеев</h2>
      <p>Тестирую React</p>
    </section>
  );
}

function Footer() {
  return <footer> Мой Сайт</footer>;
}

export default App;
