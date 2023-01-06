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
            error: "Generate SEO Failed",
            message: error.message
          });
    }
}

const createAds = async (req, res) => {
    const { prompt } = req.body

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a creative facebook ad for ${prompt} a ${prompt}`,
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

const createEmail = async (req, res) => {
    const { prompt } = req.body

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a ${prompt} email about ${prompt} with my email address ${prompt}`,
            temperature: 0.7,
            max_tokens: 512,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });

        const email = response.data.choices

        res.status(200).json({
            prompt,
            success: true,
            data: email,
            message: "Email Created"
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
          error: "Email Creation Failed",
          message: error.message
        });
    }
}

module.exports = {
    generateSEO,
    createAds,
    createTagline,
    createBlog,
    createEmail
}