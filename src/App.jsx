import './App.css';
import Header from './components/header'
import Card from './components/card'
import Data from './components/data'
function App() {
const card =  Data.map(data=>{
    return <Card 
      key ={data.key}
      image = {data.image}
      title = {data.title}
      location = {data.location}
      googleMapsUrl ={data.googleMapsUrl}
      startDate ={data.startDate}
      endDate ={data.endDate}
      description ={data.description}
    />
}) 

  return (
   <div>
      <Header/>
      {card}
   </div>
  );
}

export default App;
