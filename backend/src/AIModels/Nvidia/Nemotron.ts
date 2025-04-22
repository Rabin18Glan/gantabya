import OpenAI from "openai"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:"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",
})

export async function sendMessageToNemotron(message:string,previousMessages:String) {

  message = `Current message "${message}".And these are previos chat history:[${previousMessages}].
  Now Give the reponse according to the given message.And Don't mention as you are giving reponse just act normally.Give me short and simple answer like normal conversation. Whatever the current message is , Only give the response only`;
  const completion = await openai.chat.completions.create({
    model: "nvidia/llama-3.1-nemotron-70b-instruct",
    messages: [
      {

        "role": "user",
        "content":message,
      
      }
    ],
    // stream:true
  })

  return completion;
}





