import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectBets } from '../../store/bets/betsSlice';
import { selectUser } from '../../store/user/userSlice';

export const BetsComponent = () => {
  const bets = useSelector(selectBets);
  const user = useSelector(selectUser);
  const location = useLocation();
  console.log(bets);

  const displayBets = (bets) =>
    bets.map((bet) => {
      return (
        <div>
          <p>{bet.description}</p>
          <p>{bet.bettor_amount}</p>
        </div>
      );
    });

  return (
    <>
      {bets.length ? (
        <div>
          {location.pathname === '/my-bets' ? (
            <div>
              {displayBets(bets.filter((bet) => bet.bettorID === user.id))}
            </div>
          ) : (
            <div>{displayBets(bets)}</div>
          )}
        </div>
      ) : (
        <div>no bets</div>
      )}
    </>
  );
};
