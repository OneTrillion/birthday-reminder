import BirthdayCard from "./components/BirthdayCard.js";
import FormModal from "./components/FormModal.js";
import balloons from "./assets/balloons.jpg";
import { atom, useRecoilValue } from "recoil";

const App = () => {
    const birthdaysState = atom({
        key: "birthdaysState",
        default: [
            {
                id: "1",
                name: "Bob",
                age: 34,
                date: "30 Feb",
                picture: balloons,
            },
            {
                id: "2",
                name: "Elise",
                age: 25,
                date: "69 Jun",
                picture: balloons,
            },
            {
                id: "3",
                name: "Rick",
                age: 48,
                date: "3 Dec",
                picture: balloons,
            },
        ],
    });

    const birthdays = useRecoilValue(birthdaysState);

    return (
        <div className="App">
            <div
                style={{
                    backgroundColor: "green",
                    padding: "10px 0px 10px 0px",
                    marginBottom: "20px",
                    filter: "drop-shadow(5px 5px 10px gray)",
                }}
            >
                <h1
                    style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "40px",
                        margin: "0",
                    }}
                >
                    Birthday Reminder
                </h1>
            </div>
            {birthdays.map((birthday) => {
                return (
                    <BirthdayCard
                        key={birthday.id}
                        name={birthday.name}
                        age={birthday.age}
                        date={birthday.date}
                        picture={birthday.picture}
                    />
                );
            })}
            <FormModal />
        </div>
    );
};

export default App;
