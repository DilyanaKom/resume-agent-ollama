import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import llm from '../model.js';

const compareAndSuggestPrompt = PromptTemplate.fromTemplate(`
Compare the candidate's skills with the job requirements and provide improvement suggestions.

Candidate Skills:
{extracted_skills}

Job Requirements:
{job_summary}

Please provide:
1. Skills/qualifications the candidate already has that match the job requirements
2. Important skills/qualifications the candidate is missing
3. Specific suggestions for improvement to increase chances of getting this job
4. Overall assessment of match percentage
`);

const compareAndSuggestChain = compareAndSuggestPrompt
  .pipe(llm)
  .pipe(new StringOutputParser);

export default compareAndSuggestChain;