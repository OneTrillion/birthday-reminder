import BirthdayCard from "./components/BirthdayCard.js";
import balloons from './assets/balloons.jpg'

function App() {
    return (
        <div className="App">
            <BirthdayCard
                name={"name"}
                age={"50"}
                date={"25 Jan"}
                picture={balloons}
            />
        </div>
    );
}

export default App;
