
import { GoogleAuth } from 'google-auth-library';
import { DocumentProcessorServiceClient } from '@google-cloud/documentai';
import { VertexAI } from '@google-cloud/vertexai';

interface Requirement {
  id: string;
  type: string;
  description: string;
  pageReference?: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

interface RFPAnalysis {
  extractedText: string;
  analysis: string;
  requirements: Requirement[];
  checklist: any[]; // Define a proper type for checklist items
  metadata: {
    fileName: string;
    processedAt: Date;
    confidence: number;
  };
}

export class DocumentProcessor {
  private documentAI: DocumentProcessorServiceClient;
  private vertexAI: VertexAI;
  private generativeModel: any;

  constructor() {
    this.documentAI = new DocumentProcessorServiceClient();
    this.vertexAI = new VertexAI({
      project: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
      location: 'us-central1'
    });
    this.generativeModel = this.vertexAI.getGenerativeModel({
      model: 'gemini-2.5-flash'
    });
  }

  async processRFPDocument(fileBuffer: Buffer, fileName: string): Promise<RFPAnalysis> {
    // Step 1: Extract text using Document AI
    const extractedText = await this.extractTextFromDocument(fileBuffer, fileName);
    
    // Step 2: Analyze with Gemini
    const analysis = await this.analyzeRFPWithAI(extractedText);
    
    // Step 3: Extract structured requirements
    const requirements = await this.extractRequirements(analysis);
    
    // Step 4: Generate compliance checklist
    const checklist = await this.generateComplianceChecklist(requirements);
    
    return {
      extractedText,
      analysis,
      requirements,
      checklist,
      metadata: {
        fileName,
        processedAt: new Date(),
        confidence: 0.95
      }
    };
  }

  private async extractTextFromDocument(fileBuffer: Buffer, fileName: string): Promise<string> {
    const processorName = `projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/locations/us/processors/${process.env.DOCUMENT_AI_PROCESSOR_ID}`;
    
    const request = {
      name: processorName,
      rawDocument: {
        content: fileBuffer.toString('base64'),
        mimeType: this.getMimeType(fileName)
      }
    };

    const [result] = await this.documentAI.processDocument(request);
    return result.document?.text || '';
  }

  private async analyzeRFPWithAI(text: string): Promise<string> {
    const prompt = `Analyze this RFP document and provide a comprehensive analysis including:

1. **Funding Opportunity Overview**
   - Program name and funding agency
   - Total funding available and award amounts
   - Program goals and objectives

2. **Eligibility Requirements**
   - Organization type requirements
   - Geographic restrictions
   - Minimum/maximum award amounts
   - Required partnerships or collaborations

3. **Key Requirements**
   - Program activities that must be included
   - Required outcomes and metrics
   - Mandatory components or approaches
   - Evidence-based practice requirements

4. **Evaluation Criteria**
   - Scoring rubric and point allocations
   - Reviewer priorities and preferences
   - Required sections and page limits

5. **Submission Requirements**
   - Application deadline and submission process
   - Required attachments and supporting documents
   - Budget requirements and restrictions
   - Reporting and compliance obligations

6. **Strategic Recommendations**
   - Strengths to emphasize in application
   - Potential challenges or risks
   - Suggested partners or collaborators
   - Budget allocation recommendations

CRITICAL: Provide specific page references for all requirements using [Page X] format. Do not make claims without citing the source location in the document.

Document text:
${text}`;

    const result = await this.generativeModel.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 8000,
        topP: 0.8
      }
    });

    return result.response.text();
  }

  private getMimeType(fileName: string): string {
    const ext = fileName.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'pdf': return 'application/pdf';
      case 'docx': return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case 'doc': return 'application/msword';
      default: return 'application/pdf';
    }
  }

  private async extractRequirements(analysis: string): Promise<Requirement[]> {
    // This is a placeholder. In a real application, you would use a more sophisticated
    // approach to extract structured requirements from the AI's analysis.
    // For example, you could ask the AI to format the requirements as a JSON object.
    return [
      {
        id: '1',
        type: 'Eligibility',
        description: 'Organization must be a 501(c)(3) nonprofit.',
        pageReference: 'Page 3',
        priority: 'high',
        category: 'Eligibility'
      },
      {
        id: '2',
        type: 'Budget',
        description: 'Budget must not exceed $100,000.',
        pageReference: 'Page 12',
        priority: 'high',
        category: 'Submission'
      },
      {
        id: '3',
        type: 'Reporting',
        description: 'Quarterly progress reports are required.',
        pageReference: 'Page 15',
        priority: 'medium',
        category: 'Reporting'
      }
    ];
  }

  private async generateComplianceChecklist(requirements: Requirement[]): Promise<any[]> {
    // This is a placeholder. In a real application, you would generate a checklist
    // based on the extracted requirements.
    return requirements.map(req => ({
      id: req.id,
      description: req.description,
      completed: false
    }));
  }
}
