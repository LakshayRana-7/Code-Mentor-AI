exports.reviewCode = async (code, language) => {
  // Replace with OpenAI/Gemini integration in production.
  return {
    summary: "Code analyzed successfully.",
    bugs: ["No critical issues detected in demo mode."],
    improvements: [
      "Use meaningful variable names.",
      "Add error handling.",
      "Write unit tests."
    ],
    language
  };
};
