import BirthdayCard from "./components/BirthdayCard.js";
import FormModal from "./components/FormModal.js";
import { useRecoilValue } from "recoil";
import { birthdaysState } from "./recoil/atom/bithdayAtom"
import { Row } from "antd";

const App = () => {
    const birthdays = useRecoilValue(birthdaysState);

    return (
        <div className="App">
            <div
                style={{
                    backgroundColor: "green",
                    padding: "20px 15px 20px 15px",
                    marginBottom: "20px",
                    filter: "drop-shadow(5px 5px 10px gray)",
                }}
            >
                <Row justify={"space-between"}>
                    <h1
                        style={{
                            color: "white",
                            fontSize: "35px",
                            margin: "0",
                        }}
                    >
                        Birthday Reminder
                    </h1>
                    <FormModal />
                </Row>
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
        </div>
    );
};

export default App;
