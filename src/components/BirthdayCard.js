import { Card } from "antd";

function BirthdayCard({ name, age, date, picture }) {
    return (
        <div style={{ padding: "7px 15px 7px 15px" }}>
            <Card
                bordered={false}
                style={{
                    backgroundColor: "lightgray",
                    backgroundImage: `url(${picture})`,
                    filter: "drop-shadow(5px 5px 10px gray)"
                }}
            >
                <div style={{}}>
                    <h1 style={{
                        fontSize: "60px",
                        margin: "0"
                    }}>
                        {name} {age}
                    </h1>
                    <h2 style={{
                        fontSize: "30px",
                        margin: "0"
                    }}>{date}</h2>
                </div>
            </Card>
        </div>
    );
}

export default BirthdayCard;
