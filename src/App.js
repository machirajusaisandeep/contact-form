import './App.css';
import CompanyDetails from './components/CompanyDetails';
import ContactForm from './components/ContactForm';


function App() {

  return (
    <div className="App">
     <div className="information container">
     <CompanyDetails></CompanyDetails>
     </div>
     <div className="steps container">
          <ContactForm></ContactForm>
     </div>
    </div>
  );
}

export default App;
