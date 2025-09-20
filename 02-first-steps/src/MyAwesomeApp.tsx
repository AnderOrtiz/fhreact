import type { CSSProperties } from "react"

const firtName = 'Ander',
    lastName = 'Ortiz',
    favoriteGames = ['Elden Ring', 'Smash', 'Shovel knight'],
    isActive = true,
    address = {
        zipCode: 'ABC',
        country: 'Canadá',
    },
    myStyle:CSSProperties = {
                backgroundColor: '#000',
                color:'white',
                borderRadius: isActive? 10:2,
                padding:10,
                marginTop:30,
            }

export function MyAwasomeApp() {
    return (
        <>
            <h1 data-testid="first-name-title" >{firtName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>
            <p style={myStyle}>{JSON.stringify(address)}</p>
        </>
    )
}