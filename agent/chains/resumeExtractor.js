import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import llm from '../model.js';

const extractSkillsPrompt = PromptTemplate.fromTemplate(`
    Extract the following information from this resume WITHOUT making any assumptions or inferences. Only include information explicitly stated in the resume. For any category where information is not present, write "Not specified in resume."

1. Technical Skills: All technical skills mentioned
2. Education: Degrees, institutions, certificates
3. Work History: Companies, job titles, responsibilities (exactly as written)
4. Soft skills: All soft skills mentioned
5. Tools/Software: All tools and software mentioned
6. Projects: Names, descriptions, technologies used
7. Quantifiable Achievements: Any metrics or numbers mentioned (e.g., "increased sales by 30%")
8. Key Industry Terms: Specific keywords and industry terminology used

---
{resume}`);

const extractSkillsChain = extractSkillsPrompt
.pipe(llm)
.pipe(new StringOutputParser());

export default extractSkillsChain;

