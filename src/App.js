import BirthdayCard from "./components/BirthdayCard.js";
import FormModal from "./components/FormModal.js";
import balloons from "./assets/balloons.jpg";

const App = () => {
    return (
        <div className="App">
            <div
                style={{
                    backgroundColor: "cyan",
                    padding: "10px 0px 10px 0px",
                    marginBottom: "20px",
                    filter: "drop-shadow(5px 5px 10px gray)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "40px",
                        margin: "0",
                    }}
                >
                    Birthday Reminder
                </h1>
            </div>
            <BirthdayCard
                name={"name"}
                age={"50"}
                date={"25 Jan"}
                picture={balloons}
            />
            <BirthdayCard
                name={"name"}
                age={"50"}
                date={"25 Jan"}
                picture={balloons}
            />
            <BirthdayCard
                name={"name"}
                age={"50"}
                date={"25 Jan"}
                picture={balloons}
            />
            <FormModal />
        </div>
    );
};

export default App;
