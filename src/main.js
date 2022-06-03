import React from 'react'
import { createRoot } from 'react-dom/client'
import './scss/styles.scss'
import Header from './components/header'
import Banner from './components/banner'
import CardGrid from './components/card-grid'

const App = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Banner></Banner>
                <CardGrid></CardGrid>
            </main>
        </>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)