import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables";
import extractSkillsChain from './resumeExtractor.js';
import summarizeJobChain from './jobSummarizer.js';
import compareAndSuggestChain from './comparison.js';

const workflowChain = RunnableSequence.from([
  {
    extracted_skills: RunnableSequence.from([
      (input) => ({ resume: input.resume_text }),
      extractSkillsChain,
    ]),
    job_summary: RunnableSequence.from([
      (input) => ({ job_posting: input.job_posting }),
      summarizeJobChain,
    ]),
  },
  compareAndSuggestChain,
]);

export default workflowChain;