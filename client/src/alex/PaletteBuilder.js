import React, { useState } from 'react';
import ColorBlock from './ColorBlock'

const startingColors = [
    {
        id: 'a',
        hex: '#ff0054',
        proportion: 1,
    },
    {
        id: 'b',
        hex: '#440077',
        proportion: 1,
    },
    {
        id: 'c',
        hex: '#99ff00',
        proportion: 1,
    },
    {
        id: 'd',
        hex: '#00ccff',
        proportion: 1,
    },
]

const paletteStyle = {
    width: '700px',
    height: '300px',
    display: 'flex',
    alignItems: 'stretch',
}

const PaletteBuilder = () => {
    const [palette, updatePalette] = useState(startingColors)

    const handleIncrease = (e) => {
        const {colorid} = e.target.dataset
        const newPalette = palette.map(color => {
            if (color.id === colorid) {
                return {...color, proportion: color.proportion + 1}
            }

            return color
        })

        updatePalette(newPalette)
    }

    const handleDecrease = (e) => {
        const {colorid} = e.target.dataset
        const newPalette = palette.map(color => {
            if (color.id === colorid) {
                return {...color, proportion: color.proportion - 1}
            }

            return color
        })

        updatePalette(newPalette)
    }

    return (
        <div style={paletteStyle}>
            {palette.map((color, i) => (
                <ColorBlock
                    key={`${i}-${color.hex}`}
                    id={color.id}
                    hex={color.hex}
                    proportion={color.proportion}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                />
            ))}
        </div>
    )
}

export default PaletteBuilder
