import { ChatOllama } from '@langchain/ollama';

const llm = new ChatOllama({
    baseUrl: 'http://localhost:11434',
    model: 'gemma:2b'
});

export default llm;

