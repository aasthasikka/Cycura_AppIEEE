import { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  name: string;
  email: string;
  lastPeriodDate: Date | null;
  cycleLength: number;
  periodLength: number;
}

interface CyclePhase {
  name: string;
  day: number;
  daysUntilPeriod: number;
  description: string;
}

interface UserContextType {
  userData: UserData;
  setUserData: (data: UserData) => void;
  updateUserName: (name: string) => void;
  updateLastPeriodDate: (date: Date) => void;
  getCurrentPhase: () => CyclePhase;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    lastPeriodDate: null,
    cycleLength: 28,
    periodLength: 5
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateUserName = (name: string) => {
    setUserData(prev => ({ ...prev, name }));
  };

  const updateLastPeriodDate = (date: Date) => {
    setUserData(prev => ({ ...prev, lastPeriodDate: date }));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    // Apply dark mode to document
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const getCurrentPhase = (): CyclePhase => {
    if (!userData.lastPeriodDate) {
      return {
        name: 'Follicular Phase',
        day: 8,
        daysUntilPeriod: 20,
        description: 'Rising energy and mood'
      };
    }

    const today = new Date();
    const lastPeriod = new Date(userData.lastPeriodDate);
    const daysSinceLastPeriod = Math.floor(
      (today.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24)
    );
    
    const cycleDay = (daysSinceLastPeriod % userData.cycleLength) + 1;
    const daysUntilPeriod = userData.cycleLength - cycleDay;

    // Determine phase based on cycle day
    let phase: CyclePhase;
    
    if (cycleDay <= userData.periodLength) {
      phase = {
        name: 'Menstrual Phase',
        day: cycleDay,
        daysUntilPeriod: 0,
        description: 'Rest and renewal time'
      };
    } else if (cycleDay <= 13) {
      phase = {
        name: 'Follicular Phase',
        day: cycleDay,
        daysUntilPeriod,
        description: 'Rising energy and mood'
      };
    } else if (cycleDay <= 16) {
      phase = {
        name: 'Ovulation Phase',
        day: cycleDay,
        daysUntilPeriod,
        description: 'Peak energy and confidence'
      };
    } else {
      phase = {
        name: 'Luteal Phase',
        day: cycleDay,
        daysUntilPeriod,
        description: 'Time for self-care'
      };
    }

    return phase;
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        updateUserName,
        updateLastPeriodDate,
        getCurrentPhase,
        isDarkMode,
        toggleDarkMode
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
