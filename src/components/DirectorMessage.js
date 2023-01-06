import DirectorSahib from './images/directorSahib.jpg'
export function DirectorMSG({setView}) {
    return (
      
                    <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={DirectorSahib} className='img-fluid mt-3 rounded' height="60%" alt="" />

                </div>
                <div className="col-md-6 offset-md-2">
                    <h2 className="text-center m-3 about-h">Director Message</h2>
                <p className="about-p"> "Hello fellow Karachiites!
                As the director of this esteemed organization, it is my pleasure to welcome you to our crusade to rid our beloved city of all its unsightly litter and grime.
                Now, I know what you're thinking - cleaning up Karachi seems like a daunting task, and you might be wondering how a small group of volunteers could possibly make a difference. But let me tell you, we are not your average garbage collectors! Armed with an arsenal of high-tech cleaning equipment and an unshakable sense of determination, we are ready to take on any mess that comes our way.
                So don't be shy - join us on the front lines of the battle against dirt and disorder. Together, we can make Karachi a cleaner, more beautiful place to call home. And hey, who knows - you might even have a little bit of fun along the way.<br></br>
                See you on the streets!<br></br>
                [Mufaddal Mustafa]"</p>
                <h2 className="text-center m-3 about-h">Volunteer remarks</h2>
                <p className="about-p">"I used to be trash, but now I'm a volunteer cleaning up the city! Talk about turning over a new leaf. Or rather, picking up a few old ones. #TrashToTreasure #CleanKarachi"</p>
                </div>
            </div>
        
        
        </div>
    )
}