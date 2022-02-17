// import './App.css';
import PageRoutes from "./components/PageRoutes";
import {Provider} from "react-redux";
import testimonialsStore from "./store/testimonialStore";

function App() {
  return (
    <Provider store={testimonialsStore} className="App">
        <PageRoutes/>
    </Provider>
  );
}

export default App;
