import React, { useState, useEffect } from "react";
import BirthdayCard from "./BirthdayCard";
import { useRecoilValue } from "recoil";
import { birthdaysState } from "../recoil/atom/birthdayAtom";
import { v4 as uuid } from "uuid";

const CardList = () => {
  const cards = useRecoilValue(birthdaysState);
  const [visibleCards, setVisibleCards] = useState([]);

  const genBirthDate = (cardDate) => {
    const monthName = cardDate.toLocaleString("en-US", {
      month: "long"
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

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    const visibleCardsWithYear = [];

    // Add previous year's cards
    sortedCards.forEach((card) => {
      visibleCardsWithYear.push(card);
    });
    visibleCardsWithYear.push({ year: currentYear });
    // Add current year's cards
    sortedCards.forEach((card) => {
      visibleCardsWithYear.push(card);
    });
    visibleCardsWithYear.push({ year: nextYear });
    // Add next year's cards
    sortedCards.forEach((card) => {
      visibleCardsWithYear.push(card);
    });

    setVisibleCards(visibleCardsWithYear);
  }, [cards]);

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      {visibleCards.map((card, index) => (
        <React.Fragment key={uuid()}>
          {card.year ? (
            <div style={{ fontWeight: "bold", textAlign: "center", fontSize: 30 }}>
              {card.year}
            </div>
          ) : (
            <BirthdayCard
              key={card.id || index}
              name={card.name}
              age={card.age}
              date={genBirthDate(card.date)}
              picture={card.picture}
              className="birthday-card"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardList;
