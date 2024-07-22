import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>UrbanAttire</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer






// import React from 'react'
// import './Footer.css'

// import footer_logo from '../Assets/logo_big.png'
// import instagram_icon from '../Assets/instagram_icon.png'
// import pintrest_icon from '../Assets/pintester_icon.png'
// import whatsapp_icon from '../Assets/whatsapp_icon.png'
// import facebook_icon from '../Assets/facebook_icon.png'
// import twitter_icon from '../Assets/twitter_icon.png'
// import About from '../About/About'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className="footer-top">
//         <div className="footer-logo">
//           <img src={footer_logo} alt="Shopper Logo" />
//           <p>UrbanAttire</p>
//         </div>
//         <div className="footer-newsletter">
//           <h3>Subscribe to our Newsletter</h3>
//           <form>
//             <input type="email" placeholder="Enter your email" />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>
//       </div>
//       <ul className="footer-links">
//         <li>Company</li>
//         <li>Products</li>
//         <li>Offices</li>
//         {/* <li><About/></li> */}
//         <Link to={<About/>}></Link>
//         <li>Contact</li>
//         <li>Privacy Policy</li>
//         <li>Terms of Service</li>
//       </ul>
//       <div className="footer-social-icons">
//         <div className="footer-icons-container">
//           <img src={instagram_icon} alt="Instagram" />
//         </div>
//         <div className="footer-icons-container">
//           <img src={pintrest_icon} alt="Pinterest" />
//         </div>
//         <div className="footer-icons-container">
//           <img src={whatsapp_icon} alt="WhatsApp" />
//         </div>
//         <div className="footer-icons-container">
//           <img src={facebook_icon} alt="Facebook" />
//         </div>
//         <div className="footer-icons-container">
//           <img src={twitter_icon} alt="Twitter" />
//         </div>
//       </div>
//       <div className="footer-copyright">
//         <hr />
//         <p>Copyright @ 2023 - All Rights Reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer
