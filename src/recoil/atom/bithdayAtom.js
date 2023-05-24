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
        {
            id: "4",
            name: "Nick",
            age: 7,
            date: "22 Feb",
            picture: balloons,
        },
        {
            id: "5",
            name: "Sam",
            age: 57,
            date: "88 Jun",
            picture: balloons,
        },
        {
            id: "6",
            name: "Bert",
            age: 88,
            date: "3 Dec",
            picture: balloons,
        },
        {
            id: "7",
            name: "Larry",
            age: 62,
            date: "8 Jan",
            picture: balloons,
        },
        {
            id: "8",
            name: "Eric",
            age: 43,
            date: "8 Sep",
            picture: balloons,
        },
        {
            id: "9",
            name: "Jack",
            age: 36,
            date: "17 Oct",
            picture: balloons,
        },
    ],
});
