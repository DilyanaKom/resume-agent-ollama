import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import llm from '../model.js';

const compareAndSuggestPrompt = PromptTemplate.fromTemplate(`
You are analyzing a candidate's extracted skills against a job summary.

Extracted Skills:
{extracted_skills}

Job Summary:
{job_summary}

Compare the candidate's skills with the job requirements and provide the following as separate :

1. Summary paragraph that the candidate can include in the summary section of their resume representing their best skills and qualifications that match the job requirements - 3 to 4 sentences. Write the paragram speaking from the candidate's perspective. Use professional tone. Do not use any greetings, jargon words.
2. List skills/qualifications the candidate already has that match the job requirements extracted from the job posting summary. Use bullet points. 
3. List important skills/qualifications the candidate is missing from their resume. use bullet points.
4. Compare key industry terms and keywords from the job posting with the candidate's resume. List any important terms or keywords that are missing from the candidate's resume. Use bullet points.
5. Specific suggestions for improvement to increase chances of getting this job. use bullet points. Speak from the analyzer's perspective. Use professional tone. 
6. Rephrase the existing skills/qualification and work experience responsibilities to better match the job requirements. Do not make any assumptions or inferences. Only include information explicitly stated in the resume and job posting. Explain shortly what changes you made.
`);

const compareAndSuggestChain = compareAndSuggestPrompt
  .pipe(llm)
  .pipe(new StringOutputParser());

export default compareAndSuggestChain;