/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { data } from "react-router";



dotenv.config();



const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend's origin
  methods: 'GET, POST, PUT, DELETE, OPTIONS', // Allowed HTTP methods
  allowedHeaders: 'Content-Type, Authorization', // Allowed headers
};



const app= express();
const port=3000;
const uri=process.env.MONGO_URL
app.use(bodyParser.json())
app.use(express.static('public'))
const client= new MongoClient( uri,{
  serverApi:{
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors:true
  }
})

app.set('trust proxy', true);
app.use(cors(corsOptions));

const localIp = '0.0.0.0';

const db=client.db('AgroAdvisors');
const users=db.collection("users");

//  function to register thr user 
async function register(data,res){
  try {
    await client.connect();
    const {username,password}=data;
    const query={
      email:username,
      password:password
    }
    const existinguser= await users.findOne({'email':username})
    console.log(existinguser)
    if(existinguser){
      return res.status(400).json({message: 'User already registerd'})
    }else{
      const result= await users.insertOne(query)
      if(result.insertedId){
        return res.status(200).json({message:`User Registered UID: ${result.insertedId} .`})
      }
    } 
  } catch (error) {
    console.log(error)
  } finally{
    await client.close();
  }
}

const LoginUser=async (data,res)=>{
  const {username,password}=data;
  try{
    await client.connect();
    const existinguser= await users.findOne({'email': username})
    console.log(existinguser)
    if(!existinguser){
      return res.status(400).json({message:"User not found Please Register "})
    }else{
      if(existinguser.password===password){
        return res.status(200).json({message:`UId ;${existinguser._id}`})
      }else{
        return res.status(400).json({message: "Please enter the correct password"})
      }
    }

  }
  catch(error){
    console.log(error)
  }
  finally{
    client.close();
  }

}

// app.post('/signup')

app.post('/api/predict-fertilizer', async (req, res) => {
  console.log(req.body);
  try {
    const result= await axios.post('http://localhost:5000/predict-fertilizer',req.body)
    console.log(result.data)
    res.status(200).json({ data:result.data });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error:error });
  }
  
});


app.post('/api/predict-irrigation',async (req,res)=>{
    const data = (req.body)
    try{
      const result =await axios.post('http://localhost:5000/predict-irrigation',data)
      console.log(result)
      res.status(200).json({data:result?.data});

    }catch(error){
      console.log(error)
      res.status(400).json({error:error})
    }

})



app.get('/api/signup', (req, res) => {
  // Get the forwarded IP from the X-Forwarded-For header
  const forwardedIps = req.headers['x-forwarded-for'];
  let remoteIp = req.ip; // Default to req.ip if no X-Forwarded-For header
  
  // If the X-Forwarded-For header is present, extract the first IP in the list
  if (forwardedIps) {
    remoteIp = forwardedIps.split(',')[0]; // The first IP in the list is the client's real IP
  }

  res.json({ ip: remoteIp });
});

app.post('/api/signup',(req,res)=>{
    
    const { username, password } = req.body;
  // function to register the user  
  register(req.body,res);
})
app.post('/api/login',(req,res)=>{
  const{username,password}=req.body;
  LoginUser(req.body,res);
})

// Weather Data Fetching Function
const getWeatherData = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;  
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
      params: {
        key: apiKey,
        q: `${latitude || 31.39609029214801},${longitude || 75.53686703551487}`,  
        days: 3,
        aqi: 'no',
        alerts: 'no',
      },
    });

    if (response.data) {
      return res.json(response.data);
    } else {
      return res.status(404).json({ error: 'No weather data found' });
    }
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};


app.post('/api/weather', getWeatherData);




app.listen(port,localIp,()=>{
    console.log(`server is running on port ${port} `)
})

