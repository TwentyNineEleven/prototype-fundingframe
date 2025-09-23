'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { Application } from '@/lib/firebase/firestore';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'applications'), (snapshot) => {
      const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Application));
      setApplications(apps);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Applications</h1>
        <Link href="/dashboard/applications/new" className="p-2 bg-blue-500 text-white rounded">
          New Application
        </Link>
      </div>

      {loading ? (
        <p>Loading applications...</p>
      ) : (
        <div>
          {applications.map((app) => (
            <div key={app.id} className="p-4 mb-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-bold">{app.grantTitle}</h2>
              <p className="text-gray-600">from {app.foundationName}</p>
              <p className="text-lg font-semibold mt-2">${app.amount.toLocaleString()}</p>
              <p className={`mt-2 font-bold ${app.status === 'accepted' ? 'text-green-500' : 'text-yellow-500'}`}>
                {app.status.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}