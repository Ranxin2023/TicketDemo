import logo from './logo.svg';
import './App.css';
import TicketCard  from './App/ticketcard.jsx';
import TicketHistory from './App/tickethistory.jsx';
// import ResponseCard from './App/responsecard.jsx';
function App() {
  return (
    
    <div>
      <TicketCard/>
      {/* <ResponseCard/> */}
      <TicketHistory/>
    </div>
  );
}

export default App;
