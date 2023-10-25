
// import logo from '../images/logo.jpg'

function Hero() {
  return (
    <div className="hero py-3">
        <div className="bgBlue" style={{height:'110px', width: '150px', borderRadius: '50%', position: 'absolute', top: "-85px", right: '100px'}}/>
        <div className="d-flex align-items-center pt-4 ps-md-5 max-width">
          <span style={{backgroundColor: "#0fd2a8", width: "110px", height: '110px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',paddingRight: '10px', marginLeft: '28px'}}>

              <span style={{fontSize: '3.5rem', fontWeight: "bold", color: 'white', textShadow: '2px 2px 2px black'}}>S</span>
          </span>  
          {/* <img src={logo} alt="logo" /> */}
          <h1 className="ps-3">
            <span className="d-block blueText pb-1 h1">SKAINO</span>
            <span className="d-block greenText  h1">CORPORA</span>
          </h1>
        </div>

        <div className="grid p-3 pt-5 max-width mx-auto">
            <div className="p-3">
                  <h6 className="blueText">
                    WE ARE HERE FOR
                  </h6>
                  <h1 className="blueText bold-h1">
                    THE LARGEST
                  </h1>
                  <h1 className="blueText bold-h1">
                    BUSINESS EXPERT
                  </h1>
                  <p className="text-dark w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis deserunt dicta vitae necessitatibus, nostrum placeat tempora ad minus mollitia!</p>
            </div>
            <div className="p-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse, dolores odit fugit ipsum eum odio impedit quae. Ullam, sapiente?
            </div>
        </div>
    </div>
  )
}

export default Hero