import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import llm from '../model.js';

const compareAndSuggestPrompt = PromptTemplate.fromTemplate(`
You are analyzing a candidate's extracted skills against a job summary.

Extracted Skills:
{extracted_skills}

Job Summary:
{job_summary}

Compare the candidate's skills with the job requirements and provide the following:

1. Summary paragraph that the candidate can include in the summary section of their resume representing their best skills and qualifications that match the job requirements - 3 to 4 sentences. Write the paragram speaking from the candidate's perspective.
2. Skills/qualifications the candidate already has that match the job requirements
3. Important skills/qualifications the candidate is missing
4. Specific suggestions for improvement to increase chances of getting this job
5. Suggestions to rephrase the existing skills/qualification and work experience responsibilities to better match the job requirements. Provide a list of 3-5 suggestions.
`);

const compareAndSuggestChain = compareAndSuggestPrompt
  .pipe(llm)
  .pipe(new StringOutputParser());

export default compareAndSuggestChain;