import im1 from './images/im1.jpg';
import im2 from './images/im2.jpg';
import im3 from './images/im3.jpg';
import im4 from './images/im4.jpg';
import im5 from './images/im5.jpg';
import im6 from './images/im6.jpg';
import logo from './images/logo.png';

export function UIHaftaSafai({setView}) {


    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <header class="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="nav-logo-name">
                                {/* <a class="navbar-brand" href="#">Hafta Safai</a>
                                <p>Cleanliness is a part of a faith</p> */}
                                <img src={logo} alt="Hafta" className='logo-img'/>
                            </div>

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>

                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                   

                                </ul>
                                <form class="d-flex">
                                    <button class="btn btn-outline-success me-2" type="submit" onClick={() => setView("about")}>About Us</button>
                                    <button class="btn btn-outline-success me-2" type="submit" onClick={() => setView("director")}>Director Message</button>
                                    <button class="btn btn-outline-success me-2" type="submit" onClick={() => setView("login")}>Login</button>
                                    <button class="btn btn-outline-success me-4" type="submit" onClick={() => setView("register")}>Register</button>
                                </form>
                            </div>

                        </nav>
                    </header>

                    <section class="col-md-12 main-body">
                        <div class="card body-card">
                            <div class="card-body">
                                <h5 class="card-title">This week cleaning location : Lalukhet</h5>

                            </div>
                            <div className='text-center'>
                                <span className="safai-day m-3"><span className='text-success'>Date: </span>12/01/2023</span>
                                <span className="safai-day"><span className='text-success'>Day: </span> Sunday</span>
                                <span className="safai-day m-3"><span className='text-success'>Time: </span> 08:00 am</span>
                    
                            </div>
                       
                            <div class="card-body">
                            <img src={im6} class="card-img-top haftasafai-img" alt="..." />
                            <a href="#" class="card-link btn btn-success" role="button" onClick={() => setView("register")} >Join event</a>
                            </div>
                        </div>
                    </section>
                    {/* <section class="col-md-3 offset-md-1">
                        <div id="carouselExampleSlidesOnly" class="carousel slide " data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={im1} class="d-block w-100 h-100 img-fluid" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={im2} class="d-block w-100 h-100 img-fluid" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={im3} class="d-block w-100 h-100 img-fluid" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={im4} class="d-block w-100 h-100 img-fluid" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={im5} class="d-block w-100 h-100 img-fluid" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={im6} class="d-block w-100 h-100 img-fluid" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <footer class="col-md-12">
                        Footer Section
                    </footer>

                </div>
            </div>
        </>
    )
}