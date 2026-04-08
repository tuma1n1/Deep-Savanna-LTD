import React from "react";

function Footer(){
  return(
    <footer>
      <div className="footer">

        <h3 style={{color: "#caffdeff", fontSize:"20px", marginBottom:"10px"}}>
          Deep Savanna LTD
        </h3>

        <p style={{color: "#caffdeff"}}>
          📍 Head Office: Chai House, 6th Floor, Koinange Street, Nairobi County, Kenya.
        </p>
        <p style={{color: "#caffdeff"}}>
          📞 
          <a
            href="https://wa.me/254715611591"
            target="_blank"
            rel="noopener noreferrer"
            style={{color:"#F2A32C", marginLeft:"5px"}}
          >
            +254 715 611 591 (WhatsApp)
          </a>
        </p>
        <p style={{color: "#caffdeff"}}>
          📞 
          <a
            href="https://wa.me/254716518916"
            target="_blank"
            rel="noopener noreferrer"
            style={{color:"#F2A32C", marginLeft:"5px"}}
          >
            +254 716 518 916 (WhatsApp)
          </a>
        </p>
        <p style={{color: "#caffdeff"}}>
          📧 Email: 
          <a 
            href="mailto:info@deepsavanna.co.ke"
            style={{color:"#F2A32C", marginLeft:"5px", textDecoration:"underline"}}
          >
            info@deepsavanna.co.ke
          </a>
        </p>
        <p style={{marginTop:"15px"}}>
          © {new Date().getFullYear()} Deep Savanna Limited — All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
export default Footer;
