import sendOtpEmail from "../middleware/mailer.js";
export const sendEmailToUser = async(req,res) =>{

    try{
        const { email } = req.body;
        
        
        if(!email){
            return res.status(400).json({
                status:"false",
                message : " Email is required."
            })
      
        }
    
    

        //Generate a random 6-digit OTP.
        const otp = Math.floor(10000 + Math.random()*900000);

    
        const info = await sendOtpEmail(email,otp);
        
        return res.status(200).json({
            status:"true",
            message:"Email sent successfully.",
            messageId : info.messageId,
        })

    }  
    catch(e){
        return res.status(500).json({
            status:"false",
            message : "Internal server error.",
            messageError:e.message
        })
    } 
}