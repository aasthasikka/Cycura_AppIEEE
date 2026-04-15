import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Card } from '@/app/components/ui/card';

interface ChatbotScreenProps {
  onNavigate: (screen: string) => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickQuestions = [
  "What is PCOS?",
  "How to reduce period cramps?",
  "Is it normal to have irregular periods?",
  "Period myths explained"
];

const botResponses: Record<string, string> = {
  "What is PCOS?": "PCOS (Polycystic Ovary Syndrome) is a hormonal disorder common among women of reproductive age. It can cause irregular periods, excess androgen levels, and polycystic ovaries. While I can provide information, please consult a healthcare professional for proper diagnosis and treatment. 💙",
  "How to reduce period cramps?": "Here are some natural ways to reduce period cramps:\n\n• Apply heat (heating pad or warm bath)\n• Gentle exercise or yoga\n• Stay hydrated\n• Try herbal teas (ginger, chamomile)\n• Practice relaxation techniques\n• Consider magnesium-rich foods\n\nIf cramps are severe, please consult a doctor. 🌸",
  "Is it normal to have irregular periods?": "Irregular periods can be normal in some cases, especially:\n\n• During first few years after menstruation starts\n• During perimenopause\n• Due to stress, diet changes, or exercise\n\nHowever, consistently irregular periods might indicate conditions like PCOS or thyroid issues. If you're concerned, it's best to consult a healthcare provider. 💗",
  "Period myths explained": "Let me bust some common period myths:\n\n❌ Myth: You can't exercise during periods\n✅ Fact: Exercise can actually help reduce cramps!\n\n❌ Myth: Periods sync when women live together\n✅ Fact: This is not scientifically proven\n\n❌ Myth: You shouldn't wash your hair\n✅ Fact: Totally safe to maintain hygiene!\n\nWant to know more myths? Ask me! 🎯"
};

export function ChatbotScreen({ onNavigate }: ChatbotScreenProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Cycura AI, your judgment-free menstrual health companion. 💗 How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = botResponses[inputText] || "That's a great question! While I can provide general information about menstrual health, I'm not a medical professional. For specific concerns, please consult with a healthcare provider. Is there anything else I can help you with? 🌸";
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#FFF5F7] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E91E63] to-[#F48FB1] rounded-b-[2.5rem] shadow-lg shadow-pink-200 pb-6 pt-6 px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl text-white">Cycura AI Chat</h1>
            <p className="text-white/90 text-sm">Stigma-free support 24/7</p>
          </div>
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <motion.div
        className="px-6 mt-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-[#FFF8E1] border-[#FFB74D] rounded-2xl p-3 flex items-start gap-3">
          <AlertCircle className="h-4 w-4 text-[#F57C00] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[#E65100]">
            I provide general wellness info, not medical diagnosis. Consult a doctor for health concerns.
          </p>
        </Card>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-3xl px-5 py-3 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-[#E91E63] to-[#F48FB1] text-white rounded-br-md'
                  : 'bg-white shadow-md shadow-pink-100 text-[#4A2C2A] rounded-bl-md'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-white/70' : 'text-[#8E7C93]'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <motion.div
          className="px-6 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs text-[#8E7C93] mb-3">Quick questions to get started:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <motion.button
                key={question}
                onClick={() => handleQuickQuestion(question)}
                className="px-4 py-2 bg-white rounded-full text-sm text-[#E91E63] border border-pink-200 hover:bg-[#FFF5F7] transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {question}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Input */}
      <div className="px-6 pb-6 pt-4 bg-white border-t border-pink-100">
        <div className="flex gap-3">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 rounded-full bg-[#FFF5F7] border-pink-200"
          />
          <Button
            onClick={handleSend}
            disabled={!inputText.trim()}
            size="icon"
            className="rounded-full bg-gradient-to-r from-[#E91E63] to-[#F48FB1] hover:from-[#C2185B] hover:to-[#E91E63] shadow-lg"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
