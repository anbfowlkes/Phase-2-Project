import './Styles/About.css'

const About = () => {
    return (
        <>
                <h1 id='title'>Who We Are</h1>
            <div id='div-container' >
                <div id='eriche-container'>
                    <div id='eriche-image'>
                        <h1>Eriche</h1>
                        <img id='e-image' src='https://media-exp1.licdn.com/dms/image/C5603AQH2QgMxwm1IAA/profile-displayphoto-shrink_400_400/0/1635035973390?e=1665014400&v=beta&t=JY7dnosdVkNHleV20P0YHWjwGotGX-qgiRpGVr8DycQ' />
                    </div>
                    <div id='eriche-text'>
                        <p>{'Hello! My name is Eriche, and I was born in the deep wilderness of Mars. There was no water or food or oxygen. But the two things I found were a penny and Aaron. It was then that we realized we needed was a budgeting app. '}</p>
                    </div>
                </div>
                <div id='aaron-container'>
                        <div id='aaron-image'>
                            <h1>Aaron</h1>
                            <img id='a-image' src='https://media-exp1.licdn.com/dms/image/C5603AQEHokSxzw2V_g/profile-displayphoto-shrink_200_200/0/1613581334166?e=2147483647&v=beta&t=zAucWvCmi5c-VDWLyFLBiDViDFpSbajUPXpeN0DKzxc' />
                        </div>
                        <div id='aaron-text'>
                            <p>{"Oh hi there, my name's Aaron, sorry my image is blurry. I'm usually not like that in real life. I hope you like our budgeting app. I solemly swear to not sell your data to Facebook. Eriche might though."}</p>
                        </div>
                </div>
                
            </div>
        </>
    )
}

export default About 