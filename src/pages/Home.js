// import React from "react";
// import Layout from "./../components/Layout/Layout";
// import { Link } from "react-router-dom";
// import Banner from "../images/banner.jpeg";
// import "../styles/HomeStyles.css";

// const Home = () => {
//   return (
//     <Layout>
//       <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
//         <div className="headerContainer">
//           <h1>Food Website</h1>
//           <p>Best Food In India</p>
//           <Link to="/menu">
//             <button>ORDER NOW</button>
//           </Link>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;


import React from 'react'
import Layout from "./../components/Layout/Layout";
import './Home.css'
function Home() {
  return (
    <div>
     <Layout>
 
<div className="image">
<div className='data'>
  <p>connecting dreams to reality</p>
  <p className='middle'> your premier</p>
  <p>real estate marketplace</p>
  
  </div>
  
  <div className='button'>
  <p className=''>where every search ends with a home</p>
    <button>find your home</button>
    <button>list your property</button>
  </div>
 <img src='https://pbs.twimg.com/media/FkZLSGHacAAsRUV.jpg:large'  />
 <div className='guide'>
 <h1>How IT works?</h1>
 <p>step by step guide</p>
 </div>
 <div class="container">
  <div class="row">
  <div class="col-sm-6">
      <img src='https://th.bing.com/th/id/OIP.90Jq8DIjcxxEKMXM4jIl2gHaFj?rs=1&pid=ImgDetMain'></img>
    </div>
    <div class="col-sm-6">
      <h3>Discover Your Perfect Home</h3>
      <p>use our advanced filters down your search specify everything from location to amenities ensuring you find the property that feels right </p>
    <p>Learn More</p>
    </div>

   
  </div>
  <div class="row">
    <div class="col-sm-6">
      <h3>Showcase Your Property </h3>
      <p>List your property with ease Fill in detailed froms to highlight every feature attracting the perfect buyer directly</p>
      <p>Learn more</p>
    </div>

    <div class="col-sm-6">
      <img src="https://d1umd1ua9snads.cloudfront.net/images/articles/bigstock-Real-Estate-House-Inspector-Ch-448963109.jpg"></img>
    </div>
  </div>
  <div class="row">
  <div class="col-sm-6">
      <img src='https://th.bing.com/th/id/OIP.jNagUwQcMLK98rQUlfunLQHaE8?rs=1&pid=ImgDetMain'></img>
    </div>
    <div class="col-sm-6">
      <h3>Seal the Deal Securely</h3>
      <p>Advance payments made safe secure your agreement with confidence and step closer to your dream property</p>

      <p>learn more</p>
    </div>

    
  </div>
  <div class="row">
    <div class="col-sm-6">
      <h3>Connect and communicate</h3>
      <p>our platform facilitates direct communication betweeb buyer and seller making negotiations transparent and straighforward</p>
      <p>learn more</p>
    </div>

    <div class="col-sm-6">
     <img src='data:image/jpeg;base64,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'></img>
    </div>
  </div>
</div>
   </div>
     </Layout>
   
    </div>
  )
}

export default Home