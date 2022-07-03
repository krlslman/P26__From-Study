import Form from "./components/forms/Form";
import KeyboardEvents from './components/keyboardClipboardEvents/KeyboardClipboard';
import MouseEvent from './components/mouseEvents/MouseEvent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormObject from "./components/forms/FormObject";

function App() {
  return (
    <div className='container mt-4 text-center' >
     {/* <Form /> */}
     {/* <KeyboardEvents /> */}
     <MouseEvent />
    {/* <FormObject />  */}
    </div>
  );
}

export default App;
