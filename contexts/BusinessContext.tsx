import { collection, onSnapshot } from 'firebase/firestore';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

// 🔒 Define a Business type (optional but helps with autocompletion)
type Business = {
  id?: string;
  name: string;
  category: string;
  location: string;
  founder: string;
  about: string;
  email?: string;
  profilePic?: string;
  products?: { name: string; price: string; image?: string }[];
};

type BusinessContextType = {
  businesses: Business[];
  setBusinesses: React.Dispatch<React.SetStateAction<Business[]>>;
};

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

type BusinessProviderProps = {
  children: ReactNode;
};

export function BusinessProvider({ children }: BusinessProviderProps) {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  // ✅ Fetch businesses in real-time from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'businesses'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Business[];

      setBusinesses(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BusinessContext.Provider value={{ businesses, setBusinesses }}>
      {children}
    </BusinessContext.Provider>
  );
}

export function useBusiness(): BusinessContextType {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
}
