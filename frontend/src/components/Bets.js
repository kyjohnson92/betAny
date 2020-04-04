import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectBets } from '../store/bets/betsSlice';

export const BetsComponent = () => {
  const bets = useSelector(selectBets);
  const location = useLocation();

  const displayBets = () =>
    bets.map(bet => {
      return (
        <div>
          <p>{bet.description}</p>
          <p>{bet.bettor_amount}</p>
        </div>
      )
    })

  return (
      <>
        {bets.length ?
          (<div>
            {location.pathname === '/my-bets' ?
              <p>In the future this will show only MY BETS </p>
              : ''
            }
            {displayBets()}
          </div>
          )
          : <div>no bets</div>
        }
      </>
  )

}