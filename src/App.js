import FormModal from "./components/FormModal.js";
import { Row } from "antd";
import CardList from "./components/CardList.js";

const App = () => {
    return (
        <div className="App">
            <div
                style={{
                    backgroundColor: "green",
                    padding: "20px 15px 20px 15px",
                    filter: "drop-shadow(5px 5px 10px black)",
                    position: "fixed",
                    width: "95%",
                    zIndex: 999,
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
            <CardList />
        </div>
    );
};

export default App;
