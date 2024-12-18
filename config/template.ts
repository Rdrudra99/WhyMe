const template = [
 // BLOG TOOLS 🚀

 // Blog Title Generator
 {
  title: "Blog Title Generator",
  desc: "An AI tool that generates blog titles based on your blog information.",
  category: "Blog",
  icon: "blog-icon.png",
  prompt: `Generate a captivating blog title based on the following details. Blog niche: {niche}. Blog outline: {outline}. Type of title desired: {type}.`,
  slug: "generate-blog-title",
  form: [
   {
    label: "Blog Niche",
    field: "input",
    name: "niche",
    required: true,
   },
   {
    label: "Blog Outline",
    field: "textarea",
    name: "outline",
    required: false, // Optional field
   },
   {
    label: "Type",
    field: "select",
    name: "type",
    options: [
     "Clickbait 📢",
     "Funny 😄",
     "Educational 🎓",
     "News 📰",
     "Personal 🧑‍💻",
    ],
    required: true,
    initialValue: "Type",
   },
  ],
 },

 // Quick 1-Click Blog Post
 {
  title: "One-Click Blog Post",
  desc: "Generate detailed, SEO-friendly blog articles with an outline, engaging content, and FAQs.",
  category: "Content Generation",
  icon: "blog-post-icon.png",
  prompt: `Create a detailed, SEO-friendly blog post titled "{blogTitle}" in {language}. Include an outline, engaging content, and FAQs.`,
  slug: "generate-blog-post",
  form: [
   {
    label: "Blog Title",
    field: "input",
    name: "blogTitle",
    required: true,
   },
   {
    label: "Language",
    field: "select",
    name: "language",
    options: ["English", "Hindi", "Odia"],
    required: true,
   },
  ],
 },

 // Rewrite Article with Keywords
 {
  title: "Keyword Article Rewriter",
  desc: "Rewrite articles to be unique and SEO-optimized with your focus keywords.",
  category: "Content Optimization",
  icon: "article-rewrite-icon.png",
  prompt: `Rewrite the following article to ensure it's unique and SEO-friendly. Incorporate the provided keywords naturally.

**Existing Article:** 
{{existingArticle}}

**Focus Keyword:** 
{{focusKeyword1}}

**Second Focus Keyword (Optional):** 
{{focusKeyword2}}
`,
  slug: "rewrite-article-with-keywords",
  form: [
   {
    label: "Existing Article",
    field: "textarea",
    name: "existingArticle",
    placeholder: "Paste your article here",
    required: true,
   },
   {
    label: "Focus Keyword",
    field: "input",
    name: "focusKeyword1",
    placeholder: "Enter your main keyword",
    required: true,
   },
   {
    label: "Second Focus Keyword (Optional)",
    field: "input",
    name: "focusKeyword2",
    placeholder: "Enter an additional keyword (optional)",
    required: false,
   },
  ],
 },

 // Human Written Blog Post
 {
  title: "Human-Like Blog Post",
  desc: "Generate a unique, plagiarism-free blog post that bypasses AI detectors. For AI detection issues, use the 'Rewrite Article (Extreme AI Bypass)' tool.",
  category: "Content Generation",
  icon: "human-blog-icon.png",
  prompt: `Create an entirely original blog post based on the given title. Ensure the content is unique and engaging, designed to bypass AI detectors.

**Blog Title:** 
{{blogTitle}}
`,
  slug: "generate-human-blog-post",
  form: [
   {
    label: "Blog Title",
    field: "textarea",
    name: "blogTitle",
    placeholder: "Enter your blog title here",
    required: true,
   },
  ],
 },

 //  ECOMMERCE TOOLS 🚀

 // Product Description Generator
 {
  title: "AI Product Description Writer",
  desc: "Craft persuasive product descriptions highlighting key features and benefits",
  category: "E-commerce Tools",
  icon: "product-icon.png",
  prompt: `Generate a persuasive product description for the following product. The description should emphasize the key features, benefits, and target audience to effectively attract potential buyers. Ensure the description is engaging and tailored to the product's unique selling points.

**Product Name:** 
{{productName}}

**Product Features:**
{{features}}

**Target Audience (optional):**
{{targetAudience}}
`,
  slug: "generate-product-description",
  form: [
   {
    label: "Product Name",
    field: "input",
    name: "productName",
    required: true,
   },
   {
    label: "Product Features",
    field: "textarea",
    name: "features",
    required: true,
   },
   {
    label: "Target Audience",
    field: "input",
    name: "targetAudience",
    required: false,
   },
  ],
 },

 // SEO Product Title Optimizer
 {
  title: "SEO Product Title Enhancer",
  desc: "Boosts product titles for better search engine rankings and higher click-through rates.",
  category: "E-commerce Tools",
  icon: "seo-icon.png",
  prompt: `Optimize the product title for improved search engine visibility and click-through rates. The optimized title should effectively incorporate the provided keywords and be designed to attract both search engines and potential customers.

**Current Product Title:** 
{{currentTitle}}

**Keywords:**
{{keywords}}
`,
  slug: "seo-product-title-optimizer",
  form: [
   {
    label: "Current Product Title",
    field: "input",
    name: "currentTitle",
    required: true,
   },
   {
    label: "Keywords",
    field: "textarea",
    name: "keywords",
    required: true,
   },
  ],
 },


 // 🚀Tagline Generator
 {
  title: "Tagline Maker",
  desc: "Create a standout tagline for your brand.",
  category: "Marketing",
  icon: "tagline-icon.png",
  prompt: `Generate a memorable and impactful tagline for your product or brand. The tagline should effectively capture the essence of what you're selling or promoting and resonate with your target audience.

**Product/Brand Name:** 
{{productName}}

**Description of What You’re Selling or Promoting (Include Key Features):** 
{{productDescription}}
`,
  slug: "generate-tagline",
  form: [
   {
    label: "Brand Name",
    field: "input",
    name: "productName",
    required: true,
   },
   {
    label: "What are you promoting?",
    field: "textarea",
    name: "productDescription",
    required: true,
   },
  ],
 },

 // Amazon Product Description
 {
  title: "Amazon Description Writer",
  desc: "Quickly create appealing Amazon product descriptions.",
  category: "E-commerce",
  icon: "amazon-icon.png",
  prompt: `Create an engaging and effective product description for Amazon that highlights the key features and benefits of your product. Ensure the description is tailored to attract your target audience and improve visibility on the platform.

**Product Name:**
{{productName}}

**Product Description (Include Key Features, Benefits, and Relevant Details):**
{{productDescription}}

**Target Audience (Optional):**
{{targetAudience}}
`,
  slug: "generate-amazon-description",
  form: [
   {
    label: "Product Name",
    field: "input",
    name: "productName",
    placeholder: "e.g., iPhone 12, Samsung Galaxy Note 20",
    required: true,
   },
   {
    label: "Describe your product",
    field: "textarea",
    name: "productDescription",
    required: true,
   },
   {
    label: "Target Audience (Optional)",
    field: "input",
    name: "targetAudience",
    required: false,
   },
  ],
 },
 // Product Comparisons
 {
  title: "Product Compare",
  desc: "Easily compare products to find the best value.",
  category: "Comparison",
  icon: "comparison-icon.png",
  prompt: `Compare two products by outlining their key features, pros, and cons to determine which offers better value and suitability based on your needs.

**Product A Name:**
{{productNameA}}

**Details of Product A (Optional):**
{{productDetailsA}}

**Product B Name:**
{{productNameB}}

**Details of Product B (Optional):**
{{productDetailsB}}
`,
  slug: "compare-products",
  form: [
   {
    label: "Product A Name",
    field: "input",
    name: "productNameA",
    placeholder: "e.g., Samsung Galaxy S22",
    required: true,
   },
   {
    label: "Product A Details (Optional)",
    field: "textarea",
    name: "productDetailsA",
    placeholder: "e.g., 5G mobile phone",
    required: false,
   },
   {
    label: "Product B Name",
    field: "input",
    name: "productNameB",
    placeholder: "e.g., Google Pixel",
    required: true,
   },
   {
    label: "Product B Details (Optional)",
    field: "textarea",
    name: "productDetailsB",
    required: false,
   },
  ],
 },

 // Thank You Note Generator
 {
  title: "Thank You Note Maker",
  desc: "Generate heartfelt thank you notes with ease.",
  category: "Communication",
  icon: "thank-you-icon.png",
  prompt: `Create a personalized thank you note based on the details provided. This note will express your gratitude and make the recipient feel valued.

**Purchased Product/Service:**
{{purchasedProduct}}
`,
  slug: "generate-thank-you-note",
  form: [
   {
    label: "Purchased Product/Service",
    field: "input",
    name: "purchasedProduct",
    placeholder: "e.g., Product or service details",
    required: true,
   },
  ],
 },

 // Refund/Return/Exchange Response Email
 {
  title: "Return/Exchange Email Generator",
  desc: "Create professional responses for return or exchange requests.",
  category: "Customer Service",
  icon: "email-icon.png",
  prompt: `Generate a professional response email for handling return or exchange requests. Address the customer's message, provide relevant product information, and include your resolution.

**Product/Service Description:**
{{productDescription}}

**Customer's Message (Optional):**
{{customerMessage}}

**Your Response:**
{{responseMessage}}
`,
  slug: "generate-return-response-email",
  form: [
   {
    label: "Product/Service Description",
    field: "textarea",
    name: "productDescription",
    placeholder: "Describe its features and what makes it unique.",
    required: true,
   },
   {
    label: "Customer's Message (Optional)",
    field: "textarea",
    name: "customerMessage",
    placeholder: "e.g., I ordered the wrong product.",
    required: false,
   },
   {
    label: "Your Response",
    field: "textarea",
    name: "responseMessage",
    required: true,
   },
  ],
 },

 // S E O  T O O L S 🚀

 // Meta Title and Description
 {
  title: "Meta Title and Description",
  desc: "Get your perfect title and description for your blog or website. It's SEO-friendly and easy to use.",
  category: "SEO",
  icon: "meta-icon.png",
  prompt: `Create an SEO-friendly meta title and description for your blog or website. Use the target keyword to optimize for search engines and enhance visibility.

**Target Keyword:**
{{targetKeyword}}

**Meta Title:**
- Include the target keyword and ensure it's compelling and relevant to the content.

**Meta Description:**
- Use the target keyword and craft a concise, engaging description that highlights the content and encourages clicks.
`,
  slug: "generate-meta-title-description",
  form: [
   {
    label: "Enter your target keyword",
    field: "input",
    name: "targetKeyword",
    required: true,
   },
  ],
 },
 // Clickbait Title Generator
 {
  title: "Clickbait Title Generator",
  desc: "A tool that crafts catchy, clickbait-style blog post titles and enhance transactional search term visibility.",
  category: "SEO",
  icon: "clickbait-icon.png",
  prompt: `Generate engaging and attention-grabbing clickbait-style titles to enhance visibility and drive clicks. 

**Keywords:**
{{keywords}}

**Number of Titles:**
{{numberOfTitles}}

**Instructions:**
- Use the provided keywords to create compelling and click-worthy titles.
- Ensure the titles are intriguing and encourage users to click through.
- Provide the requested number of titles with varying approaches to capture interest.
`,
  slug: "clickbait-title-generator",
  form: [
   {
    label: "Enter your keyword(s)",
    field: "input",
    name: "keywords",
    required: true,
   },
   {
    label: "Number of Titles you need?",
    field: "input",
    name: "numberOfTitles",
    placeholder: "Example: 10",
    required: true,
   },
  ],
 },

 // HR TOOLS 🚀

 // Job Description Generator
 {
  title: "Job Description Generator",
  desc: "This AI-tool crafts comprehensive job descriptions for LinkedIn, based on the role, company, and requirements you specify.",
  category: "HR",
  icon: "job-description-icon.png",
  prompt: `Generate a detailed and engaging job description tailored for LinkedIn. 

**Role:**
{{role}}

**Company Name:**
{{companyName}}

**Company Description:**
{{companyDescription}}

**Requirements:**
{{requirements}}

**Instructions:**
- Use the provided role and company information to craft a comprehensive job description.
- Highlight key responsibilities, skills, and qualifications necessary for the position.
- Ensure the description is attractive to potential candidates and reflects the company's values and culture.
`,
  slug: "generate-job-description",
  form: [
   {
    label: "Role",
    field: "input",
    name: "role",
    placeholder: "Full Stack Developer",
    required: true,
   },
   {
    label: "Company Name",
    field: "input",
    name: "companyName",
    placeholder: "ABC company",
    required: true,
   },
   {
    label: "Tell about your Company?",
    field: "textarea",
    name: "companyDescription",
    placeholder: "We make SaaS products on AI-based content generation.",
    required: true,
   },
   {
    label: "Requirements",
    field: "textarea",
    name: "requirements",
    placeholder:
     "Specify the skills, qualifications, and experience required for the role.",
    required: true,
   },
  ],
 },

 // Interview Scheduling Email Generator
 {
  title: "Interview Scheduling Email Generator",
  desc: "Organize your interviews smoothly with MeetEase. It's an AI tool that helps you draft professional interview scheduling emails in no time.",
  category: "HR",
  icon: "interview-email-icon.png",
  prompt: `Compose a professional email to schedule an interview. 

**Company Name:**
{{companyName}}

**Role:**
{{role}}

**Interview Date and Time:**
{{interviewDateTime}}

**Interview Address (Optional):**
{{interviewAddress}}

**Interview Mode:**
{{interviewMode}}

**Instructions:**
- Use the provided details to draft a clear and concise email inviting the candidate to an interview.
- Include all relevant information such as the date, time, and location or link for the interview.
- Ensure the tone is professional and welcoming.
- If the interview is online, include the necessary link or platform details.
`,
  slug: "generate-interview-email",
  form: [
   {
    label: "Company Name",
    field: "input",
    name: "companyName",
    required: true,
   },
   {
    label: "Role",
    field: "input",
    name: "role",
    placeholder: "Full Stack Developer",
    required: true,
   },
   {
    label: "Interview date and time",
    field: "input",
    name: "interviewDateTime",
    placeholder: "Eg: October 19, 11:00AM",
    required: true,
   },
   {
    label: "Interview address (Optional)",
    field: "input",
    name: "interviewAddress",
    placeholder: "Eg: 1600 Pennsylvania Avenue NW, Washington, DC, 20500",
    required: false,
   },
   {
    label: "Interview mode",
    field: "select",
    name: "interviewMode",
    options: ["Offline", "Online"],
    required: true,
   },
  ],
 },

 // Job Rejection Email Generator
 {
  title: "Job Rejection Email Generator",
  desc: "An AI tool designed to generate kind yet firm job rejection emails.",
  category: "HR",
  icon: "job-rejection-icon.png",
  "prompt": "Compose a polite and professional job rejection email.\n\n**Company Name:**\n{{companyName}}\n\n**Role:**\n{{role}}\n\n**Instructions:**\n- Use the provided details to draft a respectful and clear job rejection email.\n- Ensure the tone is courteous and professional, acknowledging the candidate's effort and interest.\n- Offer any constructive feedback if appropriate or simply express your appreciation for their application.",
  slug: "generate-job-rejection-email",
  form: [
   {
    label: "Company Name",
    field: "input",
    name: "companyName",
    required: true,
   },
   {
    label: "Role",
    field: "input",
    name: "role",
    placeholder: "Enter the job role",
    required: true,
   },
  ],
 },

 // Relieving Letter Generator
 {
  title: "Relieving Letter Maker",
  desc: "Generate a formal relieving letter to confirm an employee's resignation and last working day.",
  category: "HR",
  icon: "relieving-letter-icon.png",
  prompt: `Compose a formal relieving letter to acknowledge the acceptance of an employee's resignation.

**Job Title:**
{{jobTitle}}

**Last Working Date:**
{{lastWorkingDate}}

**Additional Details (Optional):**
{{additionalDetails}}
`,
  slug: "generate-relieving-letter",
  form: [
   {
    label: "Job Title",
    field: "input",
    name: "jobTitle",
    placeholder: "e.g., Developer",
    required: true,
   },
   {
    label: "Last Working Date",
    field: "input",
    name: "lastWorkingDate",
    placeholder: "e.g., 10-12-2021",
    required: true,
   },
   {
    label: "Additional Details (Optional)",
    field: "textarea",
    name: "additionalDetails",
    placeholder: "e.g., Any specific sections to include",
    required: false,
   },
  ],
 },


 // EDUCATION TOOLS  🚀

 // Concept Simplifier
 {
  title: "Concept Simplifier",
  desc: "Simplify complex topics to make them easy to understand at any level.",
  category: "Education",
  icon: "concept-simplifier-icon.png",
  prompt: `Explain the concept or topic based on the selected difficulty level.

**Concept/Topic:**
{{concept}}

**Difficulty Level:**
{{difficultyLevel}}
`,
  slug: "generate-concept-simplifier",
  form: [
   {
    label: "Concept/Topic",
    field: "input",
    name: "concept",
    placeholder: "e.g., Quantum Physics",
    required: true,
   },
   {
    label: "Difficulty Level",
    field: "select",
    name: "difficultyLevel",
    options: ["Beginner", "Intermediate", "Advanced", "Expert"],
    required: true,
   },
  ],
 },


 // Reading Passage Generator
 {
  title: "Reading Passage Creator",
  desc: "Effortlessly create engaging and informative reading passages for any grade level.",
  category: "Education",
  icon: "reading-passage-icon.png",
  prompt: `Generate a reading passage based on the given details.

**Grade Level:**
{{gradeLevel}}

**Topic:**
{{topic}}

**Preferences/Requirements (Optional):**
{{preferences}}
`,
  slug: "generate-reading-passage",
  form: [
   {
    label: "Grade Level",
    field: "input",
    name: "gradeLevel",
    placeholder: "e.g., 5th grade",
    required: true,
   },
   {
    label: "Topic",
    field: "input",
    name: "topic",
    placeholder: "e.g., The moon landing",
    required: true,
   },
   {
    label: "Preferences/Requirements (Optional)",
    field: "textarea",
    name: "preferences",
    placeholder: "e.g., Passage length",
    required: false,
   },
  ],
 },


 // SUPPORT TOOLS  🚀

 // FAQ Generator
 {
  title: "FAQ Creator",
  desc: "Easily create tailored FAQs for any topic with clear and relevant questions and answers.",
  category: "Customer Support",
  icon: "faq-icon.png",
  prompt: `Generate FAQs based on the provided details.

**Topic:**
{{topic}}

**Usage:**
{{usage}}
`,
  slug: "generate-faqs",
  form: [
   {
    label: "Main Topic",
    field: "input",
    name: "topic",
    placeholder: "e.g., Online Payment Methods",
    required: true,
   },
   {
    label: "Usage Context",
    field: "input",
    name: "usage",
    placeholder: "e.g., E-commerce website help section",
    required: true,
   },
  ],
 },


 // CODE GENERATOR TOOLS 🚀

 {
  title: "Code Generator",
  desc: "An AI tool that generates code snippets based on your input specifications.",
  category: "Development",
  icon: "code-icon.png",
  prompt: `Give Me The Code For the following functionality in {{language}} programming language.
`,
  slug: "generate-code",
  form: [
   {
    label: "Programming Language",
    field: "input",
    name: "language",
    required: true,
   },
   {
    label: "Functionality Description",
    field: "textarea",
    name: "description",
    required: true,
   },
  ],
 },
 // Text Rewriter Tool
 {
  title: "Text Rewriter Tool",
  desc: "AI tool to rewrite text for improved clarity and coherence.",
  category: "Text Rewriting",
  icon: "text-rewriter-icon.png",
  prompt: `Rewrite the provided text to enhance clarity and coherence.

**Text to Rewrite:**
{{textToRewrite}}

**Desired Tone:**
{{tone}}
`,
  slug: "text-rewriter",
  form: [
   {
    label: "Text to Rewrite",
    field: "textarea",
    name: "textToRewrite",
    placeholder: "Paste your text here...",
    required: true,
   },
   {
    label: "Tone",
    field: "select",
    name: "tone",
    options: [
     "Professional",
     "Friendly",
     "Casual",
     "Formal",
     "Humorous",
     "Academic",
     "Technical",
    ],
    required: true,
   },
  ],
 }

];

export default template;

