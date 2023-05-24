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
    }

    useEffect(() => {
        const container = containerRef.current;
        const cardCount = cards.length;
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
                        ...cards.slice(startIndex),
                        ...cards.slice(0, startIndex),
                    ]);
                }
            } else {
                // Scrolling up
                if (scrollTop === 0) {
                    startIndex = (startIndex - 1 + cardCount) % cardCount;
                    setVisibleCards([
                        ...cards.slice(startIndex),
                        ...cards.slice(0, startIndex),
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

    useEffect(() => {
        // Initialize visible cards when the component mounts
        setVisibleCards(cards);
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
