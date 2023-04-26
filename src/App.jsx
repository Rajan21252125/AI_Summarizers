import Hero from './componenets/Hero';
import Demo from './componenets/Demo';
import './App.css'


const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>
            <div className='app'>
                <Hero />
                <Demo />
            </div>
        </main>

    )
}

export default App
