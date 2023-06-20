import { atom } from "recoil";
import balloons from "../../assets/balloons.jpg";

export const birthdaysState = atom({
    key: "birthdaysState",
    default: [
        {
            id: "1",
            name: "Bob",
            age: 34,
            date: new Date(2000, 8, 6),
            picture: balloons,
        },
        {
            id: "2",
            name: "Elise",
            age: 25,
            date: new Date(1998, 9, 17),
            picture: balloons,
        },
        {
            id: "3",
            name: "Rick",
            age: 48,
            date: new Date(1984, 11, 20),
            picture: balloons,
        },
        {
            id: "4",
            name: "Nick",
            age: 7,
            date: new Date(1999, 2, 4),
            picture: balloons,
        },
        {
            id: "5",
            name: "Sam",
            age: 57,
            date: new Date(1983, 4, 15),
            picture: balloons,
        },
        {
            id: "6",
            name: "Bert",
            age: 88,
            date: new Date(2002, 7, 19),
            picture: balloons,
        },
        {
            id: "7",
            name: "Larry",
            age: 62,
            date: new Date(2010, 1, 9),
            picture: balloons,
        },
        {
            id: "8",
            name: "Eric",
            age: 43,
            date: new Date(1959, 6, 27),
            picture: balloons,
        },
        {
            id: "9",
            name: "Jack",
            age: 36,
            date: new Date(1934, 3, 12),
            picture: balloons,
        },
    ],
});
