import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar as CalendarIcon,
  Heart,
  Droplet,
  Activity,
  Moon,
  ArrowLeft,
  Plus,
  Info,
  Zap,
  Sun,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Calendar } from '@/app/components/ui/calendar';

interface TrackerScreenProps {
  onNavigate: (screen: string) => void;
}

const phaseDetails = {
  menstrual: {
    name: 'Menstrual Phase',
    icon: Droplet,
    color: 'from-[#E91E63] to-[#F48FB1]',
    description: 'Your period is here. Focus on rest, comfort, and gentle self-care.',
    insights: [
      { title: 'Energy Levels', detail: 'Lower than usual - prioritize rest and recovery' },
      { title: 'Exercise', detail: 'Gentle stretching, restorative yoga, light walks' },
      { title: 'Diet', detail: 'Iron-rich foods (spinach, lentils), warm soups, herbal teas' },
      { title: 'Skincare', detail: 'Minimal routine with calming, hydrating products' },
      { title: 'Wellness Tips', detail: 'Use heat therapy for cramps, practice meditation, journal your thoughts' },
      { title: 'What to Avoid', detail: 'Intense workouts, caffeine excess, salty foods' }
    ]
  },
  follicular: {
    name: 'Follicular Phase',
    icon: Zap,
    color: 'from-[#9C27B0] to-[#CE93D8]',
    description: 'Rising energy and optimism. Great time to start new projects and socialize.',
    insights: [
      { title: 'Energy Levels', detail: 'Increasing steadily - you\'ll feel more motivated' },
      { title: 'Exercise', detail: 'High-intensity workouts, strength training, cardio' },
      { title: 'Diet', detail: 'Lean proteins, whole grains, fresh vegetables, probiotic foods' },
      { title: 'Skincare', detail: 'Exfoliation, brightening treatments, vitamin C serums' },
      { title: 'Wellness Tips', detail: 'Perfect for goal-setting, learning new skills, networking' },
      { title: 'What to Embrace', detail: 'New challenges, social activities, creative projects' }
    ]
  },
  ovulation: {
    name: 'Ovulation Phase',
    icon: Sun,
    color: 'from-[#FF9800] to-[#FFB74D]',
    description: 'Peak energy and confidence. You\'re at your most social and communicative.',
    insights: [
      { title: 'Energy Levels', detail: 'At peak - you\'ll feel your absolute best' },
      { title: 'Exercise', detail: 'Group fitness classes, dance, HIIT, competitive sports' },
      { title: 'Diet', detail: 'Antioxidant-rich foods, berries, leafy greens, colorful vegetables' },
      { title: 'Skincare', detail: 'Hydrating masks, sun protection (SPF!), glowing skin boosters' },
      { title: 'Wellness Tips', detail: 'Schedule important meetings, dates, presentations' },
      { title: 'What to Embrace', detail: 'Social gatherings, public speaking, decision making' }
    ]
  },
  luteal: {
    name: 'Luteal Phase',
    icon: Moon,
    color: 'from-[#7E57C2] to-[#9575CD]',
    description: 'Energy begins to wane. Time to slow down and focus on self-care routines.',
    insights: [
      { title: 'Energy Levels', detail: 'Gradually decreasing - listen to your body' },
      { title: 'Exercise', detail: 'Moderate yoga, pilates, swimming, gentle walks' },
      { title: 'Diet', detail: 'Complex carbs, magnesium-rich foods, dark chocolate (yes!), nuts' },
      { title: 'Skincare', detail: 'Oil control products, gentle cleansing, spot treatments' },
      { title: 'Wellness Tips', detail: 'Journaling, cozy nights in, self-care rituals, boundaries' },
      { title: 'What to Avoid', detail: 'Over-scheduling, excessive commitments, stressful situations' }
    ]
  }
};

const phaseRecommendations = {
  follicular: {
    exercise: 'High-intensity workouts, strength training',
    diet: 'Lean proteins, whole grains, fresh vegetables',
    skincare: 'Exfoliation, brightening treatments',
    wellness: 'Great time to start new projects'
  },
  ovulation: {
    exercise: 'Group fitness, cardio, dance',
    diet: 'Antioxidant-rich foods, berries, leafy greens',
    skincare: 'Hydrating masks, sun protection',
    wellness: 'Social activities, networking'
  },
  luteal: {
    exercise: 'Moderate yoga, pilates, walking',
    diet: 'Complex carbs, magnesium-rich foods, dark chocolate',
    skincare: 'Oil control, gentle cleansing',
    wellness: 'Journaling, self-care rituals'
  },
  menstrual: {
    exercise: 'Gentle stretching, restorative yoga',
    diet: 'Iron-rich foods, warm soups, herbal teas',
    skincare: 'Calming masks, minimal products',
    wellness: 'Rest, heat therapy, meditation'
  }
};

const symptoms = [
  { icon: Droplet, label: 'Heavy Flow', color: '#E91E63' },
  { icon: Activity, label: 'Cramps', color: '#F48FB1' },
  { icon: Moon, label: 'Fatigue', color: '#CE93D8' },
  { icon: Heart, label: 'Mood Swings', color: '#BA68C8' }
];

export function TrackerScreen({ onNavigate }: TrackerScreenProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showGuide, setShowGuide] = useState(false);
  const [expandedPhase, setExpandedPhase] = useState<keyof typeof phaseDetails | null>(null);
  const currentPhase = 'follicular';

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E91E63] to-[#F48FB1] rounded-b-[2.5rem] shadow-lg shadow-pink-200 pb-6 pt-6 px-6">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl text-white flex-1">Period Tracker</h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setShowGuide(!showGuide)}
          >
            <Info className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="px-6 -mt-4">
        {/* Usage Guide */}
        {showGuide && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6"
          >
            <Card className="bg-gradient-to-br from-[#9C27B0] to-[#CE93D8] rounded-3xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-6 w-6" />
                <h3 className="text-lg">How to Use Your Tracker</h3>
              </div>
              <ul className="space-y-3 text-sm opacity-90">
                <li className="flex gap-3">
                  <span className="text-xl flex-shrink-0">📅</span>
                  <span><strong>Select dates</strong> on the calendar to track your cycle and log data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl flex-shrink-0">✅</span>
                  <span><strong>Log symptoms</strong> daily to identify patterns in your cycle</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl flex-shrink-0">🔄</span>
                  <span><strong>Track 3+ cycles</strong> for accurate predictions and insights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl flex-shrink-0">💡</span>
                  <span><strong>View phase insights</strong> below to optimize your wellness routine</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        )}

        {/* Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-6 mb-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </Card>
        </motion.div>

        {/* Current Phase Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-[#E91E63] to-[#F48FB1] rounded-3xl shadow-lg p-6 mb-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <CalendarIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Current Phase</p>
                <h3 className="text-xl">Follicular Phase</h3>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Day 8 of your cycle • Next period in 20 days
            </p>
          </Card>
        </motion.div>

        {/* Log Symptoms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Log Today's Symptoms</h3>
          <div className="grid grid-cols-2 gap-3">
            {symptoms.map((symptom, index) => {
              const Icon = symptom.icon;
              const isSelected = selectedSymptoms.includes(symptom.label);
              return (
                <motion.button
                  key={symptom.label}
                  onClick={() => toggleSymptom(symptom.label)}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#FFB6C1] to-[#F48FB1] border-transparent shadow-lg'
                      : 'bg-white border-pink-100 hover:border-pink-200'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    className="h-6 w-6 mb-2"
                    style={{ color: isSelected ? 'white' : symptom.color }}
                  />
                  <p className={`text-sm ${isSelected ? 'text-white' : 'text-[#4A2C2A]'}`}>
                    {symptom.label}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Comprehensive Phase Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Complete Cycle Guide</h3>
          <div className="space-y-3">
            {(Object.keys(phaseDetails) as Array<keyof typeof phaseDetails>).map((phase) => {
              const phaseInfo = phaseDetails[phase];
              const PhaseIcon = phaseInfo.icon;
              const isExpanded = expandedPhase === phase;
              
              return (
                <Card
                  key={phase}
                  className="bg-white rounded-2xl shadow-md shadow-pink-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setExpandedPhase(isExpanded ? null : phase)}
                >
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${phaseInfo.color}`}>
                        <PhaseIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#4A2C2A]">{phaseInfo.name}</h4>
                        <p className="text-xs text-[#8E7C93]">{phaseInfo.description}</p>
                      </div>
                      <ChevronRight
                        className={`h-5 w-5 text-[#8E7C93] transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-pink-100 space-y-3"
                      >
                        {phaseInfo.insights.map((insight, idx) => (
                          <div key={idx} className="pl-2">
                            <p className="text-sm text-[#E91E63] mb-1">{insight.title}</p>
                            <p className="text-sm text-[#8E7C93]">{insight.detail}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Phase Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Today's Quick Tips</h3>
          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-6 space-y-4">
            <RecommendationItem
              icon="💪"
              title="Exercise"
              description={phaseRecommendations[currentPhase].exercise}
            />
            <RecommendationItem
              icon="🥗"
              title="Diet"
              description={phaseRecommendations[currentPhase].diet}
            />
            <RecommendationItem
              icon="✨"
              title="Skincare"
              description={phaseRecommendations[currentPhase].skincare}
            />
            <RecommendationItem
              icon="🧘‍♀️"
              title="Wellness"
              description={phaseRecommendations[currentPhase].wellness}
            />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

interface RecommendationItemProps {
  icon: string;
  title: string;
  description: string;
}

function RecommendationItem({ icon, title, description }: RecommendationItemProps) {
  return (
    <div className="flex gap-4">
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <h4 className="text-sm text-[#4A2C2A] mb-1">{title}</h4>
        <p className="text-sm text-[#8E7C93]">{description}</p>
      </div>
    </div>
  );
}