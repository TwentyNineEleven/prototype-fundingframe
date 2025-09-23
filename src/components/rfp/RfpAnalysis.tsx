
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DocumentProcessor } from '@/lib/ai/document-processor';

const rfpUploadSchema = z.object({
  rfpDocument: z.any()
});

type RfpUploadFormData = z.infer<typeof rfpUploadSchema>;

export function RfpAnalysis() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  const form = useForm<RfpUploadFormData>({
    resolver: zodResolver(rfpUploadSchema),
  });

  const onSubmit = async (data: RfpUploadFormData) => {
    setIsLoading(true);
    setAnalysis(null);
    setProgress(0);
    
    const file = data.rfpDocument[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const fileBuffer = Buffer.from(e.target?.result as ArrayBuffer);
      const processor = new DocumentProcessor();
      
      try {
        // Simulate progress
        for (let i = 0; i <= 100; i += 10) {
          await new Promise(resolve => setTimeout(resolve, 100));
          setProgress(i);
        }

        const result = await processor.processRFPDocument(fileBuffer, file.name);
        setAnalysis(result);
      } catch (error) {
        console.error("Error processing document:", error);
      } finally {
        setIsLoading(false);
        setProgress(100);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>RFP Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Input
            {...form.register('rfpDocument')}
            type="file"
            label="Upload RFP Document"
            accept=".pdf,.doc,.docx"
          />
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Analyzing...' : 'Analyze RFP'}
          </Button>
        </form>

        {isLoading && <Progress value={progress} className="mt-4" />}

        {analysis && (
          <div className="mt-8 space-y-6">
            <h2 className="text-xl font-bold">Analysis Results</h2>
            <pre className="p-4 bg-gray-100 rounded-md whitespace-pre-wrap font-mono text-sm">
              {analysis.analysis}
            </pre>
            
            <h3 className="text-lg font-bold">Extracted Requirements</h3>
            <div className="space-y-4">
              {analysis.requirements.map((req: any) => (
                <Card key={req.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold">{req.description}</p>
                      <Badge variant={req.priority === 'high' ? 'destructive' : 'secondary'}>
                        {req.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">Category: {req.category}</p>
                    <p className="text-sm text-gray-500">Reference: {req.pageReference}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
