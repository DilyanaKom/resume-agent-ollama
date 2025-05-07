import { ChatOllama } from '@langchain/ollama';

const llm = new ChatOllama({
    baseUrl: 'http://localhost:11434',
    model: 'llama3.2'
});

export default llm;

