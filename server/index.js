const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors())
app.use(express.json())

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);
app.get('/hi',async(req,res)=>{
  res.status(200).send({
      message:'Hello world'
  })
})

app.post("/", async(req,res)=>{
  try{
    const prompt=req.body.prompt;
    console.log(prompt)
    const response = await openai.createCompletion({
        model: "text-ada-001",
        prompt: `${prompt}`,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
    });
    // console.log(req.body.prompt)

    console.log(response.data)
    res.status(200).send({
        bot:response.data.choices[0].text
    })


  }
  catch(error){
      res.status(500).send("Error captured");
  }
})
const port = process.env.PORT||5000;

app.listen(port, ()=>console.log(`Server listening on port ${port}`));
