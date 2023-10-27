
// import logo from '../images/logo.jpg'
 import woman from '../images/image4.jpg'

function Hero() {
  return (
    <div className="hero pt-3 pb-4">
        <div className="bgBlue top-circle" />
        <div className="d-flex align-items-center pt-5 ps-md-4 max-width mobile-pad ">
          <span style={{backgroundColor: "#0fd2a8", width: "110px", height: '110px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',paddingRight: '10px', marginLeft: '28px'}}>

              <span style={{fontSize: '3.5rem', fontWeight: "bold", color: 'white', textShadow: '2px 2px 2px black'}}>S</span>
          </span>  
          {/* <img src={logo} alt="logo" /> */}
          <h1 className="ps-3">
            <span className="d-block blueText pb-1 h1">SKAINO</span>
            <span className="d-block greenText  h1">CORPORA</span>
          </h1>
        </div>

        <div className="grid p-3 mt-4 max-width mx-auto hero-container">
            <div className="largest ">
                  <h4 className="blueText text-center mobile-center">
                    WE ARE HERE FOR
                  </h4>
                  <h1 className="blueText bold-h1 hero-h1 mobile-center ">
                    THE LARGEST BUSINESS EXPERT
                  </h1>
                
                  <p className="text-dark pt-4 pb-3 mobile-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis deserunt dicta vitae necessitatibus, nostrum placeat tempora ad minus mollitia!</p>

                  <div className="d-sm-flex gap-4 mt-5 flex-col">
                      <button className="btn btn-default bgGreen text-light py-2 px-4 border-radius">Get Started</button>
                      <button className="btn btn-default  bgBlue text-light py-2 px-sm-4 border-radius">Explore More</button>
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