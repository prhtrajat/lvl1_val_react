import EventForm from "./components/eventForm/EventForm.component";
import FinalSummary from "./components/finalSummary/FinalSummary.component";

function App() {
  return (
    <div className="App container">
      <h1 className="text-center pt-5 text-success">Event registration form</h1>
      <EventForm />
    </div>
  );
}

export default App;
