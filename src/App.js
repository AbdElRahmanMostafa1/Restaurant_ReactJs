import "./App.css";
import {
  Header,
  Ribbon,
  Blogs,
  Testimonial,
  Questions,
  Baked,
  Subscription,
  Cinnabon,
  IngredientList,
  Footer,
} from "./components";

function App() {
  return (
    <main className="App" style={{ height: "1000px" }}>
      <Header />
      <Ribbon />
      <IngredientList />
      <Cinnabon />
      <Blogs />
      <Testimonial />
      <Questions />
      <Baked />
      <Subscription />
      <Footer />
    </main>
  );
}

export default App;
