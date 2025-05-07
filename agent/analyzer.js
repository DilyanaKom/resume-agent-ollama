import workflowChain from "./chains/workflow.js";

async function analyzeResumeText(resumeText, jobPostingText) {
    console.log("Starting analysis...");
    try {
      const result = await workflowChain.invoke({
        resume_text: resumeText,
        job_posting: jobPostingText,
      });
      
      return result;
    } catch (error) {
      console.error("Error in workflow:", error);
      throw error;
    }
  }
  
  export { analyzeResumeText };