import React from 'react';

const MIN_BLOCK_PROPORTION = 1

const buttonStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    color: '#000',
    border: 0,
    padding: 0,
}

const ColorBlock = ({id, hex, proportion, onIncrease, onDecrease}) => {
    const colorBlockStyle = {
        backgroundColor: hex,
        flex: `${proportion} 0 0`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0',
    }

    console.log('render color block', proportion)

    const canBeDecreased = proportion > MIN_BLOCK_PROPORTION

    return (
        <div style={colorBlockStyle}>
            <button
                style={buttonStyle}
                data-colorid={id}
                onClick={onIncrease}
            >
                +
            </button>
            <button
                style={buttonStyle}
                data-colorid={id}
                onClick={onDecrease}
                disabled={!canBeDecreased}
            >
                -
            </button>
        </div>
    )
}

export default ColorBlock
