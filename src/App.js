import React from 'react';
import './App.css';
class App extends React.Component
{
  
  render()
  {
    return (
      <div>
        <div id="Welcome">            
          <nav class="navbar navbar-expand-lg navbar fixed-top  navbar-light bg-light">
          <a class="navbar-brand" href="#Welcome">
              <img src="assets/images/logo.png" width="50" height="50" class="d-inline-block" alt="img" /> The Cake Fairy
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#Welcome">Welcome</a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Bakery">Bakery</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Menu">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Login">Login/Sign Up</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#OurLocation">Our Location</a>
                </li>
              
              </ul>
          </div>
        </nav>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider1.jpeg" alt="First slide" />
                <div class="carousel-caption">
                  <h2 style={{fontSize:55}}>Welcome To The Cake Fairy !</h2>
                <p style={{fontSize:30}}>...Where all your wishes of desserts are fulfilled</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider2.jpg" alt="Second slide" />
                  <div class="carousel-caption">
                  <h2 style={{fontSize:45}}>Our Cake Bakes</h2>
                <p style={{fontSize:25}}>...Delicious cakes for every special occasion</p>
              </div>
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100 img-fluid img-slider" src="assets/images/slider3.jpg" alt="Third slide" />
                  <div class="carousel-caption">
                  <h2 style={{fontSize:45}}>Other Delicacies</h2>
                <p style={{fontSize:25}}>...Enjoy our Ice Creams,Muffins,Milkshakes</p>
              </div>
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
        <div class="container">
        <div class="row" id="Bakery">
            <div class="col navMenu">
                <h2 class="text-center" >~ Bakery ~</h2>
            </div>
          </div>
          <div class="row bg-light" >
            <div class="col-md-6">
              <h3>About us</h3>
              <p>Involving the team of pastry chefs and talented management board, we are collectively concentrating our effort on the further expansion of the cakes,
                 as well as the company. Over the course of the production, we have been challenging every single step. In search for a unique experience, 
                 our sweet team has been sharing and discussing the tastes and knowledge with our quality-demanding food experts from numerous cafés, 
                 restaurants, and hotels worldwide. We are trying to smoothly build  a healthy, medium-sized company </p>
              <h5>Exotic Experience</h5>
              <p>The pastries at the Cake Fairy are superior and mouthwatering.
                They are elegant in looks and delicious in taste.
                Our chefs bake with love and care to give you the best experience in all our desserts</p>
            </div>
            <div class="col-md-6" data-aos="fade-up">
              <img class="img-fluid" src="assets/images/bakery.jpg" />
            </div>
          </div>
          <div class="row bg-light"><br /></div>
          <div class="row bg-light">
            <div class="col-md-6 order-md-1 order-2" data-aos="fade-up">
              <img class="img-fluid " src="assets/images/dessert.jpg" />
            </div>
            <div class="col-md-6 order-md-12 order-1">
              <h2>Our Unique Desserts</h2>
              <p>The Cake Fairy is among the few bakeries which offers the best customised cakes and much more then that.
              We have some very unique recipes exclusively available only here.An indelible experience of delicious deserts like
              ice creams,chocolaty sundaes, freshly prepared milkshakes like no where else </p>
              <h3>Timings</h3>
              <p>We are open for you from </p>
               <p> Monday to Friday :9:30 am to 4:00 pm</p>
              <p>On Weekends: 10:00 am to 2 pm</p>
            </div>
          </div>
        
        <div class="row" id="Menu">
          <div class="col navMenu">
                <h2 class="text-center" >~ Menu ~</h2>
          </div>
        </div>
        <div class="row bg-light">
          <div class="col-md-4" data-aos="slide-up">
            <div class="card view zoom">
                <img class="card-img-top img-fluid " src="assets/images/cakemenu.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Cakie Cakes ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Black Forest</li>
                    <li class="list-group-item">Pineapple</li>
                  <li class="list-group-item">Butterscotch</li>
                  <li class="list-group-item">Cheesecake</li>
                  <li class="list-group-item">Red Velvet</li>
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid " src="assets/images/icecream.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Ice Creams and Sundaes ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Brownie Fudge Sundae</li>
                    <li class="list-group-item">Royal Almond Fudge Sundae.</li>
                  <li class="list-group-item">Ice-creams of your choice</li>
                  <li class="list-group-item">Kulfis</li>
                  <li class="list-group-item">Popsicles</li>
                </ul>
                </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="slide-up">
            <div class="card">
                <img class="card-img-top img-fluid" src="assets/images/ourspecial.jpg" />
                <div class="card-body">
                  <h5 class="card-title">~ Our Specials ~</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Brownie Tiramasu</li>
                    <li class="list-group-item">Almond torte</li>
                  <li class="list-group-item">Luscious Cherry Jublie</li>
                  <li class="list-group-item">Candied cream puffs</li>
                  <li class="list-group-item">Expresso amor</li>
                </ul>
                </div>
            </div>
          </div>
        </div>       
        <div class="row" id="OurLocation">
          <div class="col navMenu">
            <h2 class="text-center">~ Our Location ~</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <h3>Address:</h3>
            <p>2, Anantha Nagar Rd, Phase 1, Kammasandra,</p>
              <p>Electronic City, Bengaluru,</p>
                <p> Karnataka 560100</p>
            <h3>Email:</h3>
            <p>thecakefairy@gmail.com</p>
          </div>
          <div class="col-md-3">
            <h3>Perfect Getaway</h3>
            <p>Located in the most scenic place to enjoy our delicious sweets with beautiful ambience</p>
            <br></br>
             <h4>Visit us now</h4>
          </div>
         
          <div class="col-md-3">
            <h3>Services</h3>
            <p>Home delivery Available</p>
              <p>Pick your favourite sweets at your doorstep</p>
            <p>Most exotic and delicious cakes @TheCakeFairy</p>
          </div>
          <div class="col-md-3">
           <h2>Contact us:</h2>
            <p>080-2345678</p>
            <p>080-2345889</p>
          </div>
         
        </div>
        <div class="row footer bg-light">
          <div class="col">
            <p class="text-center">Follow us: 
              <a class="social-icon" href="#"><i class="fab fa-facebook"></i></a> 
              <a class="social-icon" href="#"><i class="fab fa-instagram"></i></a></p>
          </div>
          <div class="col">
            <p class="text-center">Powered by: <a href="#">with love</a></p>
          </div>
        </div>
    </div>
  </div>
) } }
 export default App;
 