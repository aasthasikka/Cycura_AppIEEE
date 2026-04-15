import { motion } from 'motion/react';
import {
  ArrowLeft,
  Heart,
  Activity,
  Moon,
  Sparkles,
  Droplet,
  Brain,
  Smile,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface WellnessScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

const wellnessCategories = [
  {
    id: 'mental-health',
    title: 'Mental Wellness',
    icon: Brain,
    color: 'from-[#9C27B0] to-[#CE93D8]',
    description: 'Manage stress, anxiety, and emotional balance',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
  },
  {
    id: 'physical-health',
    title: 'Physical Health',
    icon: Activity,
    color: 'from-[#E91E63] to-[#F48FB1]',
    description: 'Exercise routines tailored to your cycle phase',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
  },
  {
    id: 'sleep-quality',
    title: 'Sleep & Rest',
    icon: Moon,
    color: 'from-[#7E57C2] to-[#9575CD]',
    description: 'Improve sleep quality and establish healthy routines',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80'
  },
  {
    id: 'nutrition',
    title: 'Nutrition Guide',
    icon: Sparkles,
    color: 'from-[#FF9800] to-[#FFB74D]',
    description: 'Phase-based meal plans and dietary recommendations',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80'
  }
];

const wellnessTips = [
  {
    icon: Droplet,
    title: 'Stay Hydrated',
    description: 'Drink 8-10 glasses of water daily for optimal health',
    color: '#2196F3'
  },
  {
    icon: Smile,
    title: 'Practice Gratitude',
    description: 'Write 3 things you\'re grateful for each morning',
    color: '#FF9800'
  },
  {
    icon: Heart,
    title: 'Self-Care Rituals',
    description: 'Set aside 15 minutes daily just for yourself',
    color: '#E91E63'
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Monitor your wellness journey to see improvements',
    color: '#9C27B0'
  }
];

const wellnessStats = [
  { label: 'Daily Check-ins', value: '24', unit: 'days' },
  { label: 'Wellness Score', value: '85', unit: '%' },
  { label: 'Goals Completed', value: '12', unit: '/15' }
];

export function WellnessScreen({ onNavigate }: WellnessScreenProps) {
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
          <h1 className="text-2xl text-white flex-1">Wellness Hub</h1>
        </div>
        <p className="text-white/90 text-sm">Your complete health & wellness companion</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Wellness Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-6">
            <h3 className="text-sm text-[#4A2C2A] mb-4">Your Wellness Journey</h3>
            <div className="grid grid-cols-3 gap-4">
              {wellnessStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl text-[#E91E63] mb-1">
                    {stat.value}
                    <span className="text-sm text-[#8E7C93] ml-1">{stat.unit}</span>
                  </div>
                  <p className="text-xs text-[#8E7C93]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Wellness Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Explore Wellness Areas</h3>
          <div className="space-y-4">
            {wellnessCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 p-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#4A2C2A] mb-1">{category.title}</h4>
                        <p className="text-xs text-[#8E7C93]">{category.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Daily Wellness Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Daily Wellness Tips</h3>
          <div className="grid grid-cols-2 gap-3">
            {wellnessTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <Card className="bg-white rounded-2xl shadow-md shadow-pink-100 p-4 h-full">
                    <Icon
                      className="h-6 w-6 mb-2"
                      style={{ color: tip.color }}
                    />
                    <h4 className="text-sm text-[#4A2C2A] mb-1">{tip.title}</h4>
                    <p className="text-xs text-[#8E7C93]">{tip.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Quick Actions</h3>
          <div className="space-y-3">
            <Button
              className="w-full rounded-full bg-gradient-to-r from-[#E91E63] to-[#F48FB1] hover:from-[#C2185B] hover:to-[#E91E63] shadow-lg justify-start px-6"
              onClick={() => onNavigate('chatbot')}
            >
              <Heart className="mr-3 h-5 w-5" />
              Chat with AI Wellness Coach
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full border-pink-200 hover:bg-[#FFF5F7] justify-start px-6"
              onClick={() => onNavigate('music')}
            >
              <Moon className="mr-3 h-5 w-5 text-[#E91E63]" />
              Relaxation Music & Meditation
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full border-pink-200 hover:bg-[#FFF5F7] justify-start px-6"
              onClick={() => onNavigate('education')}
            >
              <Sparkles className="mr-3 h-5 w-5 text-[#E91E63]" />
              Learn About Health & Wellness
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
