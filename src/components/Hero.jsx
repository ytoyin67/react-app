

function Hero() {
  return (
    <div className="hero py-3">
        <div className="bgBlue" style={{height:'110px', width: '130px', borderRadius: '50%', position: 'absolute', top: "-90px", right: '100px'}}/>
        <div className="d-flex align-items-center pt-5" style={{paddingLeft:"28px"}}>
          <span style={{backgroundColor: "#0fd2a8", width: "110px", height: '110px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',paddingRight: '10px'}}>

              <span style={{fontSize: '3.5rem', fontWeight: "bold", color: 'white', textShadow: '2px 2px 2px black'}}>S</span>
          </span>  
          <h1 className="ps-3">
            <span className="d-block blueText pb-1 h1">SKAINO</span>
            <span className="d-block greenText  h1">CORPORA</span>
          </h1>
        </div>
    </div>
  )
}

export default Hero