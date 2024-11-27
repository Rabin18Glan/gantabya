import axios from "axios";

export async function verifyEmailExists(email:string){
    
    const apiKey = process.env.HUNTER_API_KEY || "8e5605f59dc9a51f4f50d7bfaac2604bd40aa4c1"; // Replace with your API key
  const url = `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
   if(response.data.data.status=="valid"){
    return true;
   }
  
   return false;

  } catch (error) {
    console.error('Error verifying email:', error);
    return 'error';
  }

  }