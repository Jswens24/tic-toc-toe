import React from 'react';

const Square = (props) => {
    const clickHandler = () => {
        if (!props.squareValue && props.playerTurn === true) {
            props.gameBoard.splice(props.index, 1, "X");
            props.setGameBoard(props.gameBoard);
            props.setPlayerTurn(!props.playerTurn);
        } else {
            props.gameBoard.splice(props.index, 1, 'O');
            props.setGameBoard(props.gameBoard);
            props.setPlayerTurn(!props.playerTurn);
        }
    }

    return (
        <div className='square' onClick={clickHandler}>
            {props.squareValue === 'O' ? <img src='https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png' alt='dm logo' /> : props.squareValue}
        </div>
    )
};

export default Square;