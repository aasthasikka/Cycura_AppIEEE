import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Chrome } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { useUser } from '@/app/contexts/UserContext';
import logoImg from 'figma:asset/3bdd411bc32066ba16278360d29a2b0d52cc4d81.png';

interface AuthScreenProps {
  onComplete: () => void;
}

export function AuthScreen({ onComplete }: AuthScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { updateUserName } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the user's name to context
    updateUserName(name);
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white flex flex-col items-center justify-center p-6">
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#F48FB1] opacity-20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#CE93D8] to-[#F48FB1] opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logoImg} alt="Cycura" className="w-48 h-auto" />
        </div>

        <div className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-8">
          <h1 className="text-2xl text-center mb-2 text-[#4A2C2A]">Welcome to Cycura</h1>
          <p className="text-center text-sm text-[#8E7C93] mb-6">
            Your journey to balanced wellness starts here
          </p>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-full bg-[#FFF5F7] border-pink-200"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-full bg-[#FFF5F7] border-pink-200"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-full bg-[#FFF5F7] border-pink-200"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#E91E63] to-[#F48FB1] hover:from-[#C2185B] hover:to-[#E91E63] shadow-lg"
                >
                  Continue
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="phone">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-full bg-[#FFF5F7] border-pink-200"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-full bg-[#FFF5F7] border-pink-200"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-full bg-[#FFF5F7] border-pink-200"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#E91E63] to-[#F48FB1] hover:from-[#C2185B] hover:to-[#E91E63] shadow-lg"
                >
                  Continue
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-pink-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#8E7C93]">Or continue with</span>
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              variant="outline"
              className="w-full mt-4 rounded-full border-pink-200 hover:bg-[#FFF5F7]"
            >
              <Chrome className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>

          <p className="text-xs text-center mt-6 text-[#8E7C93]">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </motion.div>
    </div>
  );
}