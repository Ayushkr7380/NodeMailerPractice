export const otpEmailTemplate = (otp) =>{
    return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          font-family: 'Segoe UI', sans-serif;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
          background-color: #2c3e50;
          color: #ffffff;
          text-align: center;
          padding: 20px 0;
        }
        .content {
          padding: 30px;
          color: #333;
          text-align: center;
        }
        .otp {
          font-size: 32px;
          font-weight: bold;
          color: #e67e22;
          letter-spacing: 4px;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #999;
          padding: 20px;
          border-top: 1px solid #eee;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🛒 ShopNow</h1>
        </div>
        <div class="content">
          <h2>Verify Your Account</h2>
          <p>Use the OTP below to complete your verification process:</p>
          <div class="otp">${otp}</div>
          <p>This OTP is valid for 5 minutes. Please do not share it with anyone.</p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} ShopNow. All rights reserved.
        </div>
      </div>
    </body>
  </html>
  `;
}