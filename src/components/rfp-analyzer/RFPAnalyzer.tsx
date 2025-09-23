
'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, CheckCircle, AlertCircle } from 'lucide-react';

interface Requirement {
  id: string;
  type: string;
  description: string;
  pageReference?: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export function RFPAnalyzer() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysis, setAnalysis] = useState<any>(null);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setIsProcessing(true);
    setProgress(0);

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      // In a real application, you would make an API call to your backend to process the document.
      // For this example, we'll simulate the process.
      setTimeout(() => {
        clearInterval(progressInterval);
        setProgress(100);
        setAnalysis({
          analysis: 'This is a simulated analysis of the RFP document.',
          requirements: [
            {
              id: '1',
              type: 'Eligibility',
              description: 'Organization must be a 501(c)(3) nonprofit.',
              pageReference: 'Page 2',
              priority: 'high',
              category: 'Eligibility',
            },
            {
              id: '2',
              type: 'Deadline',
              description: 'Proposals must be submitted by 5:00 PM EST on October 26, 2024.',
              pageReference: 'Page 1',
              priority: 'high',
              category: 'Submission',
            },
          ],
        });
        setRequirements([
          {
            id: '1',
            type: 'Eligibility',
            description: 'Organization must be a 501(c)(3) nonprofit.',
            pageReference: 'Page 2',
            priority: 'high',
            category: 'Eligibility',
          },
          {
            id: '2',
            type: 'Deadline',
            description: 'Proposals must be submitted by 5:00 PM EST on October 26, 2024.',
            pageReference: 'Page 1',
            priority: 'high',
            category: 'Submission',
          },
        ]);
        setIsProcessing(false);
      }, 5000);

    } catch (error) {
      console.error('Error processing RFP:', error);
      setIsProcessing(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">RFP Analyzer</h1>
        <p className="text-lg text-gray-600 mt-2">
          Upload an RFP document to get AI-powered analysis and requirements extraction
        </p>
      </div>

      {/* File Upload Area */}
      <Card>
        <CardContent className="p-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input {...getInputProps()} />
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            {isDragActive ? (
              <p className="text-lg text-blue-600">Drop the RFP document here...</p>
            ) : (
              <div>
                <p className="text-lg text-gray-600 mb-2">
                  Drag & drop an RFP document here, or click to select
                </p>
                <p className="text-sm text-gray-500">
                  Supports PDF, DOC, and DOCX files up to 50MB
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Processing Progress */}
      {isProcessing && (
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Processing RFP Document</h3>
                <span className="text-sm text-gray-500">{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
              <div className="text-sm text-gray-600">
                {progress < 30 && "Extracting text from document..."}
                {progress >= 30 && progress < 60 && "Analyzing requirements with AI..."}
                {progress >= 60 && progress < 90 && "Generating compliance checklist..."}
                {progress >= 90 && "Finalizing analysis..."}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Analysis Results */}
      {analysis && !isProcessing && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Requirements Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge
                      >
                        {req.priority} priority
                      </Badge>
                      {req.pageReference && (
                        <span className="text-xs text-gray-500">{req.pageReference}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      {req.type}
                    </h4>
                    <p className="text-sm text-gray-600">{req.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Analysis Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Strategic Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <div dangerouslySetInnerHTML={{ 
                  __html: analysis.analysis.replace(/\n/g, '<br/>') 
                }} />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
