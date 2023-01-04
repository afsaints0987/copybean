const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const generateSEO = async (req, res) => {
    const { prompt } = req.body

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Create a title, description and keywords for ${prompt} a ${prompt}`,
            temperature: 0.8,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0.2,
        }); 

        const data = response.data.choices

        res.status(200).json({
            prompt,
            success: true,
            data: data,
            message: 'Generate Successful'
        })
    } catch(error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
  
          res.status(400).json({
            success: false,
            error: "Generate Tagline Failed",
            message: error.message
          });
    }
}

const extractKeywords = async (req, res) => {
    const { prompt } = req.body 

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Extract keywords from this text: \n\n${prompt}`,
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.8,
            presence_penalty: 0.0,
        });

        const keywords = response.data.choices

        res.status(200).json({
            prompt,
            success: true,
            data: keywords,
            message: 'Extract Successful!'
        })

    } catch(error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
  
          res.status(400).json({
            success: false,
            error: "Extract Failed",
            message: error.message
          });
    }
}

const createAds = async (req, res) => {
    const { prompt } = req.body

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Create a facebook ads for ${prompt} a ${prompt}`,
            temperature: 0.8,
            max_tokens: 256,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.1
        });

        const ads = response.data.choices

        res.status(200).json({
            prompt,
            success: true,
            data: ads,
            message: "Generate Ads Successful"
        })
    } catch(error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
  
          res.status(400).json({
            success: false,
            error: "Generate Ads Failed",
            message: error.message
          });
    }
}

const createTagline = async (req, res) => {
    const {prompt} = req.body
    try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Write 10 tagline for ${prompt}`,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0.5,
          presence_penalty: 0,
        }); 

        const tagLine = response.data.choices

        res.status(200).json({
            prompt,
            success: true,
            data: tagLine,
            message: "Generate Successful!"
        })

    } catch(error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }

        res.status(400).json({
          success: false,
          error: "Generate Tagline Failed",
          message: error.message
        });
    }
}

const createBlog = async (req, res) => {
    const { prompt } = req.body

    try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Write a blog and keywords about ${prompt}`,
          temperature: 0.8,
          max_tokens: 1000,
          top_p: 1,
          frequency_penalty: 0.3,
          presence_penalty: 0.2,
        }); 

        const blog = response.data.choices

        res.status(200).json({
            prompt,
            success: true,
            data: blog,
            message: "Blog Created"
        })

    } catch(error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }

        res.status(400).json({
          success: false,
          error: "Blog Creation Failed",
          message: error.message
        });
    }
}

module.exports = {
    generateSEO,
    extractKeywords,
    createAds,
    createTagline,
    createBlog
}