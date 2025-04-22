import { Request, Response } from "express";
import { sendMessageToNemotron } from "../../AIModels/Nvidia/Nemotron";
import { formatMessage } from "../../utils/messageFormatter";
import Chat, { IChat } from "../../models/Chat";

export async function chatAIController(req: Request, res: Response): Promise<void> {
  try {
    const { message,authorId,authorName } = req.body; // Expecting the user's message in the request body
 
  
    if (!message) {
     res.status(400).json({ error: 'Message is required' });
    }
 console.log(message,authorId)
    
   const previousMessages = await Chat.find({authorId});
    // Send the message to Nemotron
    let  prevMessage='' ;
    previousMessages.forEach((message:IChat)=>{
      
      prevMessage = prevMessage+`{
      ${message.authorName}:${message.message}
      },`;
    })
 console.log(prevMessage)
    const completion = await sendMessageToNemotron(message,prevMessage);
   
    // Extract content from the comnetion response
    const responseText = completion?.choices?.[0]?.message?.content;

    if (!responseText) {
       res.status(500).json({ error: 'Failed to generate a valid response' });
    }

    // Send the result back as a response
 
    const messageModel = new Chat({authorId,message,authorName});
    messageModel.save();
    const replymessageModel = new Chat({authorId,message:responseText,authorName:"Nemotron"});
    replymessageModel.save();
    res.json({ 
      authorId:'nemotron',
      authorName:'Nemotron',
      message: formatMessage(responseText!)});
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: 'Failed to generate text' });
  }
}
