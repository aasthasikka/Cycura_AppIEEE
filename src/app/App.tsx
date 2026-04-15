import { useState } from 'react';
import { UserProvider } from '@/app/contexts/UserContext';
import { SplashScreen } from '@/app/components/SplashScreen';
import { AuthScreen } from '@/app/components/AuthScreen';
import { OnboardingScreen } from '@/app/components/OnboardingScreen';
import { HomeScreen } from '@/app/components/HomeScreen';
import { TrackerScreen } from '@/app/components/TrackerScreen';
import { MusicScreen } from '@/app/components/MusicScreen';
import { ChatbotScreen } from '@/app/components/ChatbotScreen';
import { TherapistScreen } from '@/app/components/TherapistScreen';
import { EducationScreen } from '@/app/components/EducationScreen';
import { PremiumScreen } from '@/app/components/PremiumScreen';
import { SettingsScreen } from '@/app/components/SettingsScreen';
import { AboutScreen } from '@/app/components/AboutScreen';
import { RecommendationDetailScreen } from '@/app/components/RecommendationDetailScreen';
import { EducationArticleScreen } from '@/app/components/EducationArticleScreen';
import { WellnessScreen } from '@/app/components/WellnessScreen';
import { ReviewsScreen } from '@/app/components/ReviewsScreen';

type Screen = 
  | 'splash'
  | 'auth'
  | 'onboarding'
  | 'home'
  | 'tracker'
  | 'music'
  | 'chatbot'
  | 'therapist'
  | 'education'
  | 'premium'
  | 'settings'
  | 'about'
  | 'recommendation-detail'
  | 'education-article'
  | 'wellness'
  | 'reviews';

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [recommendationDetail, setRecommendationDetail] = useState<{ title: string; type: 'yoga' | 'facemask' | 'meditation' } | null>(null);
  const [educationArticle, setEducationArticle] = useState<{ id: string; title: string } | null>(null);

  const handleNavigation = (screen: string, data?: any) => {
    if (screen === 'recommendation-detail' && data) {
      setRecommendationDetail(data);
      setCurrentScreen('recommendation-detail');
    } else if (screen === 'education-article' && data) {
      setEducationArticle(data);
      setCurrentScreen('education-article');
    } else {
      setCurrentScreen(screen as Screen);
    }
  };

  // Render the appropriate screen based on current state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={() => handleNavigation('auth')} />;
      case 'auth':
        return <AuthScreen onComplete={() => handleNavigation('onboarding')} />;
      case 'onboarding':
        return <OnboardingScreen onComplete={() => handleNavigation('home')} />;
      case 'home':
        return <HomeScreen onNavigate={handleNavigation} />;
      case 'tracker':
        return <TrackerScreen onNavigate={handleNavigation} />;
      case 'music':
        return <MusicScreen onNavigate={handleNavigation} />;
      case 'chatbot':
        return <ChatbotScreen onNavigate={handleNavigation} />;
      case 'therapist':
        return <TherapistScreen onNavigate={handleNavigation} />;
      case 'education':
        return <EducationScreen onNavigate={handleNavigation} />;
      case 'premium':
        return <PremiumScreen onNavigate={handleNavigation} />;
      case 'settings':
        return <SettingsScreen onNavigate={handleNavigation} />;
      case 'about':
        return <AboutScreen onNavigate={handleNavigation} />;
      case 'recommendation-detail':
        return recommendationDetail ? (
          <RecommendationDetailScreen recommendation={recommendationDetail} onNavigate={handleNavigation} />
        ) : (
          <HomeScreen onNavigate={handleNavigation} />
        );
      case 'education-article':
        return educationArticle ? (
          <EducationArticleScreen article={educationArticle} onNavigate={handleNavigation} />
        ) : (
          <EducationScreen onNavigate={handleNavigation} />
        );
      case 'wellness':
        return <WellnessScreen onNavigate={handleNavigation} />;
      case 'reviews':
        return <ReviewsScreen onNavigate={handleNavigation} />;
      default:
        return <HomeScreen onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {renderScreen()}
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}