import './Styles/Home.css'

const Home = () => {
    return (
        <div id='home-div'>
            <h1 id='welcome'>{'Welcome'}</h1>
            <h2 id='best'>...to the best budgeting site in the world</h2>
            <div class="bg">
                    <img id='the-image' src='https://npengage.com/wp-content/uploads/2014/04/478571029.jpg' alt='budgeting image' />
            
            <h1>Here are what our customers are saying: </h1>
                <div id='testimonials'>
                    <div className='t-container'>
                        <div className='t-display'>  
                            <h1>Jason 'Q-ball' Whitney</h1>
                            <h3>Fish Salesman</h3>
                            <img className='pictures' src='https://triviahappy.com/wp-content/uploads/2014/07/americanvoices3.jpg' />
                        </div>
                        <div className='t-description'>
                            <p>{`"I became super rich using E & A Budgeting."`}</p>
                        </div>
                    </div>
                    

                    <div className='t-container'>
                        <div className='t-display'>
                            <h1>Harold Gervais</h1>
                            <h3>{'Professor of Pigeon Theory'}</h3>
                            <img className='pictures' src='https://triviahappy.com/wp-content/uploads/2014/07/americanvoices5.jpg' />
                        </div>
                        <div className='t-description'>
                            <p>{`"This app helped me realize how poor I am."`}</p>
                        </div>
                    </div>
                    

                    <div className='t-container'>
                        <div className='t-display'>
                            <h1>Irma San-Diego</h1>
                            <h3>{'Volunteer Arsonist'}</h3>
                            <img className='pictures' src='https://triviahappy.com/wp-content/uploads/2014/07/americanvoices4.jpg' />
                        </div>
                        <div className='t-description'>
                            <p>{`"I no longer spend money on anything ever thanks to E & A Budgeting."`}</p>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default Home