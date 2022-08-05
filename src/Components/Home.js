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
                            <h1>Elon Musk</h1>
                            <h3>CEO of a Bunch of Companies</h3>
                            <img className='pictures' src='https://cdn.vox-cdn.com/thumbor/8bzjT4RJQrW89vjs1bL4y4_fITo=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/71204583/VRG_Illo_STK022_K_Radtke_Musk_Crazy.0.jpg' />
                        </div>
                        <div className='t-description'>
                            <p>{`"I couldn't have become one of the richest people in the world without E & A Budgeting."`}</p>
                        </div>
                    </div>
                    

                    <div className='t-container'>
                        <div className='t-display'>
                            <h1>Harold Gervais</h1>
                            <h3>{'Professor of Economics, Finance, and Pigeon Theory'}</h3>
                            <img className='pictures' src='https://triviahappy.com/wp-content/uploads/2014/07/americanvoices5.jpg' />
                        </div>
                        <div className='t-description'>
                            <p>{`"This app helped me realize I was poor I am."`}</p>
                        </div>
                    </div>
                    

                    <div className='t-container'>
                        <div className='t-display'>
                            <h1>Albert Einstein</h1>
                            <h3>{'Smartest person in the universe'}</h3>
                            <img className='pictures' src='https://discovery.sndimg.com/content/dam/images/discovery/editorial/podcasts/Curiosity/2020/3/Albert-Einstein-thumbnail.png.rend.hgtvcom.406.406.suffix/1583779004606.png' />
                        </div>
                        <div className='t-description'>
                            <p>{`"I discovered the Theory of Relativity thanks to E & A Budgeting."`}</p>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default Home