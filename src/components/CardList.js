import React, { useState, useRef, useEffect } from "react";
import BirthdayCard from "./BirthdayCard";
import { useRecoilValue } from "recoil";
import { birthdaysState } from "../recoil/atom/bithdayAtom";

const CardList = () => {
    const cards = useRecoilValue(birthdaysState);
    const [visibleCards, setVisibleCards] = useState([]);
    const containerRef = useRef(null);
    const prevScrollTopRef = useRef(0);

    const genBirthDate = (cardDate) => {
        const monthName = cardDate.toLocaleString("en-US", {
            month: "long",
        });
        return cardDate.getDate() + " " + monthName;
    };

    const sortCardsByDate = (c) => {
        c.sort(function (a, b) {

            const monthA = a.date.getMonth();
            const dayA = a.date.getDate();
            const monthB = b.date.getMonth();
            const dayB = b.date.getDate();

            if (monthA < monthB) {
                return -1;
            } else if (monthA > monthB) {
                return 1;
            } else {
                if (dayA < dayB) {
                    return -1;
                } else if (dayA > dayB) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });
        return c;
    };

    useEffect(() => {
        const sortedCards = sortCardsByDate(cards.slice());
        setVisibleCards(cards);
        const container = containerRef.current;
        const cardCount = sortedCards.length;
        let startIndex = 0;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const scrollHeight = container.scrollHeight;

            if (scrollTop > prevScrollTopRef.current) {
                // Scrolling down
                if (scrollTop + containerHeight >= scrollHeight) {
                    startIndex = (startIndex + 1) % cardCount;
                    setVisibleCards([
                        ...sortedCards.slice(startIndex),
                        ...sortedCards.slice(0, startIndex),
                    ]);
                }
            } else {
                // Scrolling up
                if (scrollTop === 0) {
                    startIndex = (startIndex - 1 + cardCount) % cardCount;
                    setVisibleCards([
                        ...sortedCards.slice(startIndex),
                        ...sortedCards.slice(0, startIndex),
                    ]);
                    container.scrollTop =
                        container.scrollHeight - containerHeight;
                }
            }

            prevScrollTopRef.current = container.scrollTop;
        };

        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [cards]);

    return (
        <div
            ref={containerRef}
            style={{ height: "100vh", overflowY: "scroll" }}
        >
            {visibleCards.map((card) => (
                <BirthdayCard
                    key={card.id}
                    name={card.name}
                    age={card.age}
                    date={genBirthDate(card.date)}
                    picture={card.picture}
                    className="birthday-card"
                />
            ))}
        </div>
    );
};

export default CardList;
