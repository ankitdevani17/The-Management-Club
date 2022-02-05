import "./Home.css"
import Me from "./images/Me.jpg"
const Home = () => {
   return <>
        <section id="header" className ="">
            <div className = "container-fluid nav_bg">
                <div className = "row">
                    <div className = "col-10 mx-auto">
                        <div className ="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1 className="intro">
                                Welcome to TMC
                            </h1>
                            <h2 className = "tagline"> Multitasking is new trend, We nurture it</h2>
                            <p className = "desc">We conduct games, simulation based leagues, webinars, seminars, talk-shows, conclaves and various other interesting activities. </p>
                        </div>
                        <div className ="col-md-6 order-1 order-lg-2 logo"> 
                        <img src ={Me} className ="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home

