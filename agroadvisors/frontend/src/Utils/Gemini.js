import {GoogleGenAI} from '@google/genai'
import { GEN_AI_API_KEY } from './SecretConstants';

const client = new GoogleGenAI({
    apiKey:GEN_AI_API_KEY
})

export default client;