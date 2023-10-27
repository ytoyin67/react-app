
// import logo from '../images/logo.jpg'
 import woman from '../images/image4.jpg'

function Hero() {
  return (
    <div className="hero pt-3 pb-4">
        <div className="bgBlue" style={{height:'130px', width: '210px', borderRadius: '50%', position: 'absolute', top: "-80px", right: '100px'}}/>
        <div className="d-flex align-items-center pt-5 ps-md-5 max-width">
          <span style={{backgroundColor: "#0fd2a8", width: "110px", height: '110px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',paddingRight: '10px', marginLeft: '28px'}}>

              <span style={{fontSize: '3.5rem', fontWeight: "bold", color: 'white', textShadow: '2px 2px 2px black'}}>S</span>
          </span>  
          {/* <img src={logo} alt="logo" /> */}
          <h1 className="ps-3">
            <span className="d-block blueText pb-1 h1">SKAINO</span>
            <span className="d-block greenText  h1">CORPORA</span>
          </h1>
        </div>

        <div className="grid p-3 mt-4 max-width mx-auto">
            <div className="largest">
                  <h6 className="blueText">
                    WE ARE HERE FOR
                  </h6>
                  <h1 className="blueText bold-h1 hero-h1">
                    THE LARGEST BUSINESS EXPERT
                  </h1>
                
                  <p className="text-dark pt-4 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis deserunt dicta vitae necessitatibus, nostrum placeat tempora ad minus mollitia!</p>

                  <div className="d-flex gap-4 mt-5">
                      <button className="btn btn-default bgGreen text-light py-2 px-4 border-radius">Get Started</button>
                      <button className="btn btn-default bgBlue text-light py-2 px-sm-4 border-radius ">Explore More</button>
                  </div>
            </div>

            <div className="image  p-3">
           
               <img src={woman} alt="woman" className='  woman'/>
            </div>
            
        </div>
    </div>
  )
}

export default Hero