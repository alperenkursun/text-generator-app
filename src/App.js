// styles
import "./App.css";

// components
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
