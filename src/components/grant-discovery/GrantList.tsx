
import { Grant } from '@/types/grant';
import { GrantCard } from './GrantCard';

interface GrantListProps {
  grants: Grant[];
}

export function GrantList({ grants }: GrantListProps) {
  if (grants.length === 0) {
    return (
      <div className="text-center text-gray-500">
        <p>No grants found. Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {grants.map((grant) => (
        <GrantCard key={grant.id} grant={grant} />
      ))}
    </div>
  );
}
