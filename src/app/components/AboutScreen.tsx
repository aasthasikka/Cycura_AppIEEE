import { motion } from 'motion/react';
import { ArrowLeft, Heart, Target, Users, Shield } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import logoImg from 'figma:asset/3bdd411bc32066ba16278360d29a2b0d52cc4d81.png';
import founder1Img from 'figma:asset/6392695cd96a27a093fd541b6b6aca4b23c59804.png';
import founder2Img from 'figma:asset/4844503a479956705428d00149535c25f84b52e0.png';

interface AboutScreenProps {
  onNavigate: (screen: string) => void;
}

const values = [
  {
    icon: Heart,
    title: 'Empathy First',
    description: 'We understand the challenges of menstrual health with compassion and care',
    color: 'from-[#E91E63] to-[#F48FB1]'
  },
  {
    icon: Target,
    title: 'Evidence-Based',
    description: 'All our guidance is rooted in scientific research and medical expertise',
    color: 'from-[#F48FB1] to-[#CE93D8]'
  },
  {
    icon: Users,
    title: 'Inclusive & Safe',
    description: 'A judgment-free space for all women and girls on their wellness journey',
    color: 'from-[#CE93D8] to-[#BA68C8]'
  },
  {
    icon: Shield,
    title: 'Privacy Protected',
    description: 'Your health data is encrypted and never shared without consent',
    color: 'from-[#BA68C8] to-[#AB47BC]'
  }
];

export function AboutScreen({ onNavigate }: AboutScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E91E63] to-[#F48FB1] rounded-b-[2.5rem] shadow-lg shadow-pink-200 pb-8 pt-6 px-6">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => onNavigate('settings')}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl text-white flex-1">About Cycura</h1>
        </div>
        <p className="text-white/90 text-sm">Where Balance Becomes a Breakthrough</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-8 text-center">
            <img src={logoImg} alt="Cycura Logo" className="w-48 mx-auto mb-4" />
            <p className="text-[#8E7C93] text-sm italic">
              "Empowering women with AI-driven, stigma-free menstrual health support"
            </p>
          </Card>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Our Mission</h3>
          <Card className="bg-gradient-to-br from-[#E91E63] to-[#F48FB1] rounded-3xl shadow-lg p-6 text-white">
            <p className="text-sm leading-relaxed">
              Cycura exists to break the silence around menstrual health. We provide 
              teen girls and women with PCOD, PCOS, irregular periods, and menstrual 
              discomfort a safe, AI-powered companion for awareness, wellness, and 
              emotional support—without judgment or stigma.
            </p>
          </Card>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Our Values</h3>
          <div className="space-y-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-white rounded-2xl shadow-md shadow-pink-100 overflow-hidden">
                    <div className={`h-1.5 bg-gradient-to-r ${value.color}`} />
                    <div className="p-4 flex gap-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-[#4A2C2A] mb-1">{value.title}</h4>
                        <p className="text-sm text-[#8E7C93]">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Meet the Founders</h3>
          <div className="space-y-4">
            <FounderCard
              name="Aastha Sikka"
              image={founder1Img}
              delay={0.7}
            />
            <FounderCard
              name="Vanshika Jain"
              image={founder2Img}
              delay={0.8}
            />
          </div>
        </motion.div>

        {/* Ethics & Disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Our Commitment</h3>
          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-6 space-y-4">
            <CommitmentItem
              emoji="⚕️"
              text="No medical diagnosis or prescription services"
            />
            <CommitmentItem
              emoji="🔒"
              text="Privacy-first approach with encrypted data"
            />
            <CommitmentItem
              emoji="📍"
              text="Location limited to city/state only—no real-time tracking"
            />
            <CommitmentItem
              emoji="👥"
              text="No nearby-user visibility features"
            />
            <CommitmentItem
              emoji="💗"
              text="Not intended for collecting PII or sensitive personal data beyond health tracking"
            />
          </Card>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-6"
        >
          <Card className="bg-gradient-to-br from-[#CE93D8] to-[#BA68C8] rounded-3xl shadow-lg p-6 text-white">
            <h3 className="text-lg mb-4 text-center">Our Impact</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl mb-1">10K+</p>
                <p className="text-sm opacity-90">Active Users</p>
              </div>
              <div>
                <p className="text-3xl mb-1">50K+</p>
                <p className="text-sm opacity-90">AI Chats</p>
              </div>
              <div>
                <p className="text-3xl mb-1">95%</p>
                <p className="text-sm opacity-90">Satisfaction</p>
              </div>
            </div>
            
            <Button
              className="w-full mt-4 bg-white text-[#BA68C8] hover:bg-pink-50 rounded-full"
              onClick={() => onNavigate('reviews')}
            >
              Read User Reviews
            </Button>
          </Card>
        </motion.div>

        <p className="text-center text-xs text-[#8E7C93] mt-6">
          Made with 💗 in India • Contact: hello@cycura.app
        </p>
      </div>
    </div>
  );
}

interface FounderCardProps {
  name: string;
  image: string;
  delay: number;
}

function FounderCard({ name, image, delay }: FounderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
    >
      <Card className="bg-white rounded-2xl shadow-md shadow-pink-100 p-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg text-[#4A2C2A] mb-1">{name}</h4>
            <p className="text-sm text-[#8E7C93]">Founder, Cycura</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

interface CommitmentItemProps {
  emoji: string;
  text: string;
}

function CommitmentItem({ emoji, text }: CommitmentItemProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-2xl flex-shrink-0">{emoji}</span>
      <p className="text-sm text-[#4A2C2A] pt-1">{text}</p>
    </div>
  );
}