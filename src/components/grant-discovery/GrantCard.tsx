
import { Grant } from '@/types/grant';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GrantCardProps {
  grant: Grant;
}

export function GrantCard({ grant }: GrantCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{grant.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">Funder: {grant.funder}</p>
        <p className="text-sm text-gray-600 mb-2">Amount: ${grant.amount.toLocaleString()}</p>
        <p className="text-sm text-gray-600 mb-4">Deadline: {new Date(grant.deadline).toLocaleDateString()}</p>
        <p className="text-sm text-gray-800 mb-4">{grant.description}</p>
        <Button>View Details</Button>
      </CardContent>
    </Card>
  );
}
