import { atom } from "recoil";
import balloons from "../../assets/balloons.jpg";

export const birthdaysState = atom({
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
