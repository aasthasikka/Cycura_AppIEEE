import { motion } from 'motion/react';
import { ArrowLeft, Star, Calendar, Video, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface TherapistScreenProps {
  onNavigate: (screen: string) => void;
}

const therapists = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialization: 'Women\'s Health & PCOS',
    experience: '12 years',
    rating: 4.9,
    reviews: 234,
    price: '₹799',
    duration: '45 min',
    available: 'Today, 4:00 PM',
    image: 'https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGhlcmFwaXN0JTIwY291bnNlbG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTc3ODM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    languages: ['English', 'Hindi'],
    certified: true
  },
  {
    id: 2,
    name: 'Dr. Anjali Mehta',
    specialization: 'Mental Health & Wellness',
    experience: '8 years',
    rating: 4.8,
    reviews: 189,
    price: '₹699',
    duration: '45 min',
    available: 'Tomorrow, 10:00 AM',
    image: 'https://images.unsplash.com/photo-1768823222378-737a34d93bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIweW91bmclMjB3b21hbiUyMHlvZ2ElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3Njk3NzgzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    languages: ['English', 'Marathi'],
    certified: true
  },
  {
    id: 3,
    name: 'Dr. Neha Patel',
    specialization: 'Hormonal Balance & Nutrition',
    experience: '10 years',
    rating: 4.9,
    reviews: 312,
    price: '₹899',
    duration: '60 min',
    available: 'Today, 6:30 PM',
    image: 'https://images.unsplash.com/photo-1644222643716-38f3b2828de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNraW5jYXJlJTIwbmF0dXJhbCUyMGJlYXV0eXxlbnwxfHx8fDE3Njk3MTg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    languages: ['English', 'Gujarati'],
    certified: true
  }
];

export function TherapistScreen({ onNavigate }: TherapistScreenProps) {
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
          <h1 className="text-2xl text-white flex-1">Expert Support</h1>
        </div>
        <p className="text-white/90 text-sm">Connect with certified therapists & counselors</p>
      </div>

      <div className="px-6 mt-6">
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Card className="bg-gradient-to-br from-[#F48FB1] to-[#CE93D8] rounded-3xl shadow-lg p-6 text-white">
            <h3 className="text-lg mb-2">Why Talk to an Expert?</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>Personalized guidance for your unique needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>Professional support for PCOD/PCOS management</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>Safe space to discuss emotional well-being</span>
              </li>
            </ul>
          </Card>
        </motion.div>

        {/* Session Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Session Type</h3>
          <div className="grid grid-cols-2 gap-3">
            <SessionTypeCard
              icon={Video}
              label="Video Call"
              color="from-[#E91E63] to-[#F48FB1]"
              popular
            />
            <SessionTypeCard
              icon={MessageSquare}
              label="Chat Session"
              color="from-[#F48FB1] to-[#CE93D8]"
            />
          </div>
        </motion.div>

        {/* Therapists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Available Therapists</h3>
          <div className="space-y-4">
            {therapists.map((therapist, index) => (
              <motion.div
                key={therapist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex gap-4 mb-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                          <ImageWithFallback
                            src={therapist.image}
                            alt={therapist.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {therapist.certified && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                            <Star className="h-3 w-3 text-white fill-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="text-[#4A2C2A]">{therapist.name}</h4>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            Certified
                          </Badge>
                        </div>
                        <p className="text-sm text-[#E91E63] mb-1">{therapist.specialization}</p>
                        <div className="flex items-center gap-3 text-xs text-[#8E7C93] mb-2">
                          <span>{therapist.experience} exp</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{therapist.rating}</span>
                            <span>({therapist.reviews})</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {therapist.languages.map(lang => (
                            <Badge
                              key={lang}
                              variant="outline"
                              className="text-xs border-pink-200 text-[#8E7C93]"
                            >
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 p-3 bg-[#FFF5F7] rounded-2xl">
                      <div className="flex items-center gap-2 flex-1">
                        <Clock className="h-4 w-4 text-[#E91E63]" />
                        <div>
                          <p className="text-xs text-[#8E7C93]">Next Available</p>
                          <p className="text-sm text-[#4A2C2A]">{therapist.available}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[#8E7C93]">{therapist.duration}</p>
                        <p className="text-lg text-[#E91E63]">{therapist.price}</p>
                      </div>
                    </div>

                    <Button className="w-full rounded-full bg-gradient-to-r from-[#E91E63] to-[#F48FB1] hover:from-[#C2185B] hover:to-[#E91E63] shadow-lg">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Session
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-[#CE93D8] to-[#BA68C8] rounded-3xl shadow-lg p-6 text-white text-center">
            <h3 className="text-lg mb-2">Premium Members Get Priority</h3>
            <p className="text-sm opacity-90 mb-4">
              Skip the queue & get 20% off all sessions
            </p>
            <Button
              className="bg-white text-[#BA68C8] hover:bg-white/90"
              onClick={() => onNavigate('premium')}
            >
              Upgrade to Premium
            </Button>
          </Card>
        </motion.div>

        <p className="text-xs text-center text-[#8E7C93] mt-6">
          💳 Cycura charges 15-25% commission per consultation
        </p>
      </div>
    </div>
  );
}

interface SessionTypeCardProps {
  icon: React.ElementType;
  label: string;
  color: string;
  popular?: boolean;
}

function SessionTypeCard({ icon: Icon, label, color, popular }: SessionTypeCardProps) {
  return (
    <div className={`relative bg-gradient-to-br ${color} rounded-2xl p-4 text-white shadow-lg cursor-pointer hover:scale-105 transition-transform`}>
      {popular && (
        <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-[#4A2C2A] text-xs">
          Popular
        </Badge>
      )}
      <Icon className="h-6 w-6 mb-2" />
      <p className="text-sm">{label}</p>
    </div>
  );
}
