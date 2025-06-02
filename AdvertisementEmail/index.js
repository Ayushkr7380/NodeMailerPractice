import app from "./app.js"

const LOCALHOST = process.env.LOCALHOST || "127.0.0.1";
const PORT = process.env.PORT || 4003;

app.listen(PORT,LOCALHOST,()=>{
    console.log(`${LOCALHOST} is running at port ${PORT}`);
});