const Hero=()=>{
    return <main className="Hero">

        <div className="Herocontent">
          <h1>YOUR FEET DESERVES THE BEST</h1>
          <p>
            YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES.DON'T LOOK HERE AND THERE FOCUS ON YOUR GOAL LIKE YOU FOCUS 
            ON YOUR SHOES.
          </p>
        
           <div className="herobtn">
            <button>Shop Now</button>
            <button className="secondbtn">Category</button>
           </div>
           <div className="shopping">
            <p>Also Available on</p>
           </div>
           <div className="brandicons">
            <img src="/images/shops.png" alt="shops"></img>
           </div>
        </div>
        <div className="Heroimage">
          <img src="/images/shoe_image.png" alt="shoe_image"></img>
        </div>
    </main>;



}

export default Hero;