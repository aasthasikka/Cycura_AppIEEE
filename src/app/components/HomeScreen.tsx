import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Heart,
  Moon,
  Sparkles,
  MessageCircle,
  Music,
  BookOpen,
  Award,
  ChevronRight,
  Smile,
  Meh,
  Frown,
  Users,
  Crown,
  Star,
  Play
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { useUser } from '@/app/contexts/UserContext';
import logoImg from 'figma:asset/3bdd411bc32066ba16278360d29a2b0d52cc4d81.png';

interface HomeScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

const moodOptions = [
  { icon: Smile, label: 'Great', color: '#4CAF50' },
  { icon: Smile, label: 'Good', color: '#8BC34A' },
  { icon: Meh, label: 'Okay', color: '#FFC107' },
  { icon: Meh, label: 'Low', color: '#FF9800' },
  { icon: Frown, label: 'Sad', color: '#F44336' }
];

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const { userData, getCurrentPhase } = useUser();
  const phaseInfo = getCurrentPhase();
  const userName = userData.name || "Friend";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E91E63] to-[#F48FB1] rounded-b-[2.5rem] shadow-lg shadow-pink-200 pb-8 pt-6 px-6">
        <div className="flex items-center justify-between mb-6">
          <img src={logoImg} alt="Cycura" className="w-24 h-auto" />
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => onNavigate('settings')}
          >
            <Award className="h-6 w-6" />
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl text-white mb-1">Hello, {userName} ✨</h1>
          <p className="text-white/90 text-sm">How are you feeling today?</p>
        </motion.div>

        {/* Current Cycle Phase */}
        <motion.div
          className="mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-xs mb-1">Current Phase</p>
              <p className="text-white text-lg">{phaseInfo.name}</p>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-xs mb-1">Next Period</p>
              <p className="text-white text-lg">{phaseInfo.daysUntilPeriod} days</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="px-6 -mt-4">
        {/* Quick Mood Log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-6 mb-6">
            <h3 className="text-sm mb-4 text-[#4A2C2A]">Quick Mood Check</h3>
            <div className="flex justify-between gap-2">
              {moodOptions.map((mood, index) => {
                const Icon = mood.icon;
                return (
                  <motion.button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.label)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${
                      selectedMood === mood.label
                        ? 'bg-gradient-to-br from-[#FFB6C1] to-[#F48FB1] shadow-lg'
                        : 'bg-[#FFF5F7] hover:bg-[#FCE4EC]'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: selectedMood === mood.label ? 'white' : mood.color }}
                    />
                    <span
                      className={`text-xs ${
                        selectedMood === mood.label ? 'text-white' : 'text-[#8E7C93]'
                      }`}
                    >
                      {mood.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* Daily Wellness Cards */}
        <div className="space-y-4 mb-6">
          <h3 className="text-sm text-[#8E7C93]">Today's Recommendations</h3>
          
          <WellnessCard
            icon={Heart}
            title="Gentle Yoga Flow"
            description="Perfect for your follicular phase"
            color="from-[#E91E63] to-[#F48FB1]"
            delay={0.5}
            onClick={() => onNavigate('recommendation-detail', { title: 'Gentle Yoga Flow', type: 'yoga' })}
          />
          
          <WellnessCard
            icon={Sparkles}
            title="Anti-Acne Face Mask"
            description="DIY recipe with turmeric & honey"
            color="from-[#F48FB1] to-[#CE93D8]"
            delay={0.6}
            onClick={() => onNavigate('recommendation-detail', { title: 'Anti-Acne Face Mask', type: 'facemask' })}
          />
          
          <WellnessCard
            icon={Moon}
            title="Sleep Meditation"
            description="7-minute guided relaxation"
            color="from-[#CE93D8] to-[#BA68C8]"
            delay={0.7}
            onClick={() => onNavigate('recommendation-detail', { title: 'Sleep Meditation', type: 'meditation' })}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <QuickAction
            icon={MessageCircle}
            label="AI Chat"
            color="bg-gradient-to-br from-[#E91E63] to-[#F48FB1]"
            onClick={() => onNavigate('chatbot')}
          />
          <QuickAction
            icon={Music}
            label="Music Therapy"
            color="bg-gradient-to-br from-[#F48FB1] to-[#CE93D8]"
            onClick={() => onNavigate('music')}
          />
          <QuickAction
            icon={Calendar}
            label="Period Tracker"
            color="bg-gradient-to-br from-[#CE93D8] to-[#BA68C8]"
            onClick={() => onNavigate('tracker')}
          />
          <QuickAction
            icon={BookOpen}
            label="Learn & Myths"
            color="bg-gradient-to-br from-[#BA68C8] to-[#AB47BC]"
            onClick={() => onNavigate('education')}
          />
        </div>

        {/* User Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm text-[#8E7C93]">What Our Users Say</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#E91E63] hover:text-[#C2185B] text-xs"
              onClick={() => onNavigate('reviews')}
            >
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 overflow-hidden">
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0]">
              <iframe
                src="https://drive.google.com/file/d/1HqJX8M7PBFU85ITOkcCUnzQ7-NKCbAaC/preview"
                className="w-full h-full"
                allow="autoplay"
                title="User Review Video"
              />
            </div>

            {/* Review Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[#4A2C2A] text-sm">User Testimonial</h4>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#8E7C93] mb-3">
                "Cycura changed my life! Managing PCOS has never been easier."
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8E7C93]">Anonymous User</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#E91E63] border-[#E91E63] hover:bg-[#FFF5F7] rounded-full h-7 px-3"
                  onClick={() => onNavigate('reviews')}
                >
                  <Play className="h-3 w-3 mr-1" />
                  Watch More
                </Button>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-[#FFF5F7] to-[#FCE4EC] rounded-2xl p-3 text-center">
                <p className="text-lg text-[#E91E63] mb-0.5">10K+</p>
                <p className="text-xs text-[#8E7C93]">Users</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85 }}
            >
              <Card className="bg-gradient-to-br from-[#FFF5F7] to-[#FCE4EC] rounded-2xl p-3 text-center">
                <p className="text-lg text-[#E91E63] mb-0.5">4.8★</p>
                <p className="text-xs text-[#8E7C93]">Rating</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Card className="bg-gradient-to-br from-[#FFF5F7] to-[#FCE4EC] rounded-2xl p-3 text-center">
                <p className="text-lg text-[#E91E63] mb-0.5">2.5K+</p>
                <p className="text-xs text-[#8E7C93]">Stories</p>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Expert Support & Premium */}
        <div className="space-y-3 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className="bg-gradient-to-br from-[#F48FB1] to-[#CE93D8] rounded-2xl shadow-lg p-4 cursor-pointer text-white"
              onClick={() => onNavigate('therapist')}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Users className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1">Talk to Expert</h4>
                  <p className="text-xs opacity-90">Certified therapists available</p>
                </div>
                <ChevronRight className="h-5 w-5" />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-2xl shadow-lg p-4 cursor-pointer text-white"
              onClick={() => onNavigate('premium')}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Crown className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1">Go Premium</h4>
                  <p className="text-xs opacity-90">Unlock all features from ₹199/mo</p>
                </div>
                <ChevronRight className="h-5 w-5" />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 px-6 py-4 rounded-t-3xl shadow-lg">
        <div className="flex justify-around items-center">
          <NavButton icon={Calendar} label="Tracker" active onClick={() => onNavigate('tracker')} />
          <NavButton icon={Heart} label="Wellness" onClick={() => onNavigate('wellness')} />
          <NavButton icon={MessageCircle} label="Chat" onClick={() => onNavigate('chatbot')} />
          <NavButton icon={Award} label="Profile" onClick={() => onNavigate('settings')} />
        </div>
      </div>
    </div>
  );
}

interface WellnessCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay: number;
  onClick: () => void;
}

function WellnessCard({ icon: Icon, title, description, color, delay, onClick }: WellnessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className="bg-white rounded-2xl shadow-md shadow-pink-100 p-4 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${color} shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-[#4A2C2A] mb-1">{title}</h4>
            <p className="text-xs text-[#8E7C93]">{description}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-[#8E7C93]" />
        </div>
      </Card>
    </motion.div>
  );
}

interface QuickActionProps {
  icon: React.ElementType;
  label: string;
  color: string;
  onClick: () => void;
}

function QuickAction({ icon: Icon, label, color, onClick }: QuickActionProps) {
  return (
    <motion.button
      className={`${color} rounded-2xl p-6 shadow-lg text-white flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="h-7 w-7" />
      <span className="text-sm">{label}</span>
    </motion.button>
  );
}

interface NavButtonProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavButton({ icon: Icon, label, active, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 ${
        active ? 'text-[#E91E63]' : 'text-[#8E7C93]'
      }`}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xs">{label}</span>
    </button>
  );
}