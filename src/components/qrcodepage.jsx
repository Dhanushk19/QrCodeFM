import QrImg from "../assets/image-qr-code.png";
import "../css/qrcode.css";
function Qrcodepage()
{
    return(
        <div className="full-card">
            
            <img src={QrImg} alt="qrcodeimage" width={"100%"} className="image"/>
            <div className="content">
                <div className="header-full">
                <h2 className="header">Improve your front-end </h2>
                <h2 className="header">skills by building projects</h2>
                </div>
                <div className="para">
                <p className="text">Scan the QR code to visit Frontend </p>
                <p className="text">Mentor and take your coding skills to</p>
                <p className="text">the next level</p>
                </div>
                
            </div>        
        </div>
    )
}

export default Qrcodepage;