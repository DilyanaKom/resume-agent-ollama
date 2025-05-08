import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import llm from '../model.js';

const compareAndSuggestPrompt = PromptTemplate.fromTemplate(`
Compare the candidate's skills with the job requirements and provide the following.

1. Summary paragraph of the candidate's skills and qualifications in relation to the job requirements - 3 to 4 sentences.
2. Skills/qualifications the candidate already has that match the job requirements
2. Important skills/qualifications the candidate is missing
3. Specific suggestions for improvement to increase chances of getting this job
4. Suggestions to rephrase the existing skills/qualification and work experience responsibilities to better match the job requirements. Provide a list of 3-5 suggestions.
`);

const compareAndSuggestChain = compareAndSuggestPrompt
  .pipe(llm)
  .pipe(new StringOutputParser);

export default compareAndSuggestChain;