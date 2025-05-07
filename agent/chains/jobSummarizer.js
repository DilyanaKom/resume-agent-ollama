import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import llm from '../model.js';


const summarizeJobPrompt = PromptTemplate.fromTemplate(`
Extract the following information from this job posting WITHOUT making any assumptions or inferences. Only include information explicitly stated in the job posting. For any category where information is not present, write "Not specified in job posting."

1. Required Technical Skills: All technical skills listed as required
2. Preferred/Desired Skills: Skills mentioned as "nice to have" or preferred
3. Education Requirements: Degrees, certifications, or educational backgrounds required
4. Experience Requirements: Years of experience or specific experience types required
5. Job Responsibilities: Main duties and responsibilities (exactly as written)
6. Tools/Software: Specific tools, platforms, or software mentioned
7. Industry Knowledge: Specific domain or industry knowledge required
8. Soft Skills: Communication, teamwork, or other soft skills mentioned
9. Company Benefits: Compensation, perks, or benefits mentioned
10. Location/Remote Policy: Office location or remote work options

---
{job_posting}`);

const summarizeJobChain = summarizeJobPrompt
  .pipe(llm)
  .pipe(new StringOutputParser());

export default summarizeJobChain;