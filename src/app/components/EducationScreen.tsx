import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

interface EducationScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

const myths = [
  {
    myth: "You can't exercise during periods",
    fact: "Exercise can actually help reduce cramps and improve mood",
    impact: "Avoiding exercise can lead to increased discomfort and reduced fitness",
    safe: "Light to moderate exercise like yoga, walking, or swimming is beneficial"
  },
  {
    myth: "Periods sync when women live together",
    fact: "There's no scientific evidence supporting menstrual synchrony",
    impact: "Believing this myth can cause unnecessary anxiety about cycle changes",
    safe: "Everyone's cycle is unique and influenced by individual factors"
  },
  {
    myth: "You shouldn't wash your hair during periods",
    fact: "There's absolutely no reason to avoid washing your hair",
    impact: "Poor hygiene can lead to scalp issues and discomfort",
    safe: "Maintain your regular hygiene routine throughout your cycle"
  },
  {
    myth: "PMS is all in your head",
    fact: "PMS is caused by real hormonal changes in your body",
    impact: "Dismissing PMS can prevent women from seeking proper support",
    safe: "Track symptoms and consult a doctor if PMS significantly affects your life"
  }
];

const educationTopics = [
  {
    id: 'cycle',
    title: "Understanding Your Cycle",
    icon: "🔄",
    description: "Learn about the 4 phases and what happens in your body",
    color: "from-[#E91E63] to-[#F48FB1]"
  },
  {
    id: 'first-period',
    title: "First Period Guide",
    icon: "🌸",
    description: "Everything teens need to know about menstruation",
    color: "from-[#F48FB1] to-[#CE93D8]"
  },
  {
    id: 'pcos',
    title: "PCOS & PCOD",
    icon: "💡",
    description: "Understanding hormonal disorders and management",
    color: "from-[#CE93D8] to-[#BA68C8]"
  },
  {
    id: 'nutrition',
    title: "Nutrition & Wellness",
    icon: "🥗",
    description: "Phase-wise diet tips for hormonal balance",
    color: "from-[#BA68C8] to-[#AB47BC]"
  }
];

export function EducationScreen({ onNavigate }: EducationScreenProps) {
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
          <h1 className="text-2xl text-white flex-1">Learn & Grow</h1>
        </div>
        <p className="text-white/90 text-sm">Evidence-based menstrual health education</p>
      </div>

      <div className="px-6 mt-6">
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="myths">Myth Buster</TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="space-y-4">
            {educationTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="bg-white rounded-2xl shadow-md shadow-pink-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => onNavigate('education-article', { id: topic.id, title: topic.title })}
                >
                  <div className={`h-2 bg-gradient-to-r ${topic.color}`} />
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{topic.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg text-[#4A2C2A] mb-1">{topic.title}</h3>
                        <p className="text-sm text-[#8E7C93]">{topic.description}</p>
                      </div>
                      <BookOpen className="h-5 w-5 text-[#E91E63]" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Teen Guide Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-[#F48FB1] to-[#CE93D8] rounded-3xl shadow-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg">First Period Guide for Teens</h3>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  A comprehensive, judgment-free guide covering everything from what to expect, 
                  how to use products, managing school days, and talking to trusted adults.
                </p>
                <Button 
                  className="w-full bg-white text-[#E91E63] hover:bg-white/90"
                  onClick={() => onNavigate('education-article', { id: 'first-period', title: 'First Period Guide for Teens' })}
                >
                  Read Guide
                </Button>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="myths" className="space-y-4">
            {myths.map((item, index) => (
              <motion.div
                key={item.myth}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-6">
                  {/* Myth */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-red-100 rounded-full">
                      <XCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#8E7C93] mb-1">MYTH</p>
                      <p className="text-[#4A2C2A]">{item.myth}</p>
                    </div>
                  </div>

                  {/* Fact */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#8E7C93] mb-1">FACT</p>
                      <p className="text-[#4A2C2A]">{item.fact}</p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#8E7C93] mb-1">HEALTH IMPACT</p>
                      <p className="text-sm text-[#4A2C2A]">{item.impact}</p>
                    </div>
                  </div>

                  {/* Safe Practice */}
                  <div className="bg-[#E8F5E9] rounded-2xl p-4">
                    <p className="text-xs text-green-800 mb-1">✅ SAFE PRACTICE</p>
                    <p className="text-sm text-green-900">{item.safe}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}