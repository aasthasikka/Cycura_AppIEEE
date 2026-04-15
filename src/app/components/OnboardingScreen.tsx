import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';
import { Progress } from '@/app/components/ui/progress';
import { Calendar } from '@/app/components/ui/calendar';
import { useUser } from '@/app/contexts/UserContext';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const questions = [
  {
    id: 1,
    question: "What brings you to Cycura? (Select all that apply)",
    type: "checkbox",
    options: [
      "Period tracking",
      "Managing PCOD/PCOS",
      "Irregular cycles",
      "Menstrual discomfort",
      "Emotional wellness",
      "General health awareness"
    ]
  },
  {
    id: 2,
    question: "When did your last period start?",
    type: "calendar",
    options: []
  },
  {
    id: 3,
    question: "What's your age group?",
    type: "radio",
    options: ["13-17 years", "18-24 years", "25-34 years", "35-44 years", "45+ years"]
  },
  {
    id: 4,
    question: "How regular is your menstrual cycle?",
    type: "radio",
    options: [
      "Very regular (every 28-30 days)",
      "Mostly regular",
      "Somewhat irregular",
      "Very irregular",
      "Not sure / Just started"
    ]
  },
  {
    id: 5,
    question: "Do you experience any of these symptoms? (Select all that apply)",
    type: "checkbox",
    options: [
      "Severe cramps",
      "Heavy bleeding",
      "Mood swings",
      "Acne or skin issues",
      "Fatigue",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "Have you experienced any of these recently? (Select all that apply)",
    type: "checkbox",
    options: [
      "Sudden or unexplained weight gain",
      "Acne or persistent skin issues",
      "Hair growth on face or body",
      "Hair thinning or hair loss",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "How would you describe your current mood?",
    type: "radio",
    options: ["Great", "Good", "Okay", "Not great", "Struggling"]
  },
  {
    id: 8,
    question: "How many hours do you sleep on average?",
    type: "radio",
    options: ["Less than 5 hours", "5-6 hours", "7-8 hours", "More than 8 hours"]
  },
  {
    id: 9,
    question: "How often do you exercise?",
    type: "radio",
    options: ["Daily", "3-4 times a week", "1-2 times a week", "Rarely", "Never"]
  },
  {
    id: 10,
    question: "How would you rate your stress levels?",
    type: "radio",
    options: ["Very high", "High", "Moderate", "Low", "Very low"]
  },
  {
    id: 11,
    question: "What's your primary goal with Cycura?",
    type: "radio",
    options: [
      "Better understand my cycle",
      "Manage symptoms",
      "Improve overall wellness",
      "Track mental health",
      "Get personalized recommendations"
    ]
  },
  {
    id: 12,
    question: "Have you been diagnosed with PCOD/PCOS?",
    type: "radio",
    options: ["Yes, diagnosed", "Suspected but not diagnosed", "No", "Not sure"]
  }
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [direction, setDirection] = useState(1);
  const { updateLastPeriodDate } = useUser();

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    } else {
      if (answers[2]) updateLastPeriodDate(new Date(answers[2] as string));
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSelect = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleCheckboxToggle = (value: string) => {
    setAnswers(prev => {
      const current = (prev[currentQuestion.id] as string[]) || [];
      const isSelected = current.includes(value);
      
      if (isSelected) {
        return { ...prev, [currentQuestion.id]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [currentQuestion.id]: [...current, value] };
      }
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      // Store date in local timezone to avoid date shifting issues
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const localDateString = `${year}-${month}-${day}`;
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: localDateString }));
    }
  };

  const isAnswered = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === 'checkbox') {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] via-white to-[#FCE4EC] flex flex-col p-6">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[#8E7C93]">Question {currentStep + 1} of {questions.length}</span>
          <span className="text-sm font-medium text-[#E91E63]">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full max-w-md pointer-events-auto"
          >
            <div className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-8 overflow-visible">
              <h2 className="text-xl mb-6 text-[#4A2C2A] text-center">
                {currentQuestion.question}
              </h2>

              {/* Checkbox Options */}
              {currentQuestion.type === "checkbox" && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = ((answers[currentQuestion.id] as string[]) || []).includes(option);
                    return (
                      <motion.div
                        key={option}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => handleCheckboxToggle(option)}
                          className={`w-full flex items-center space-x-3 p-4 rounded-2xl border-2 transition-all ${
                            isSelected
                              ? 'border-[#E91E63] bg-gradient-to-br from-[#FFF5F7] to-[#FCE4EC]'
                              : 'border-pink-100 hover:border-pink-300 hover:bg-[#FFF5F7]'
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                              isSelected
                                ? 'border-[#E91E63] bg-[#E91E63]'
                                : 'border-pink-200'
                            }`}
                          >
                            {isSelected && <Check className="h-4 w-4 text-white" />}
                          </div>
                          <span className="flex-1 text-left text-[#4A2C2A]">{option}</span>
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Radio Options */}
              {currentQuestion.type === "radio" && (
                <RadioGroup
                  value={answers[currentQuestion.id] as string || ''}
                  onValueChange={handleSelect}
                  className="space-y-3"
                >
                  {currentQuestion.options.map((option, index) => (
                    <motion.div
                      key={option}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-center space-x-3 p-4 rounded-2xl border-2 border-pink-100 hover:border-pink-300 hover:bg-[#FFF5F7] transition-all cursor-pointer">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="flex-1 cursor-pointer text-[#4A2C2A]">
                          {option}
                        </Label>
                      </div>
                    </motion.div>
                  ))}
                </RadioGroup>
              )}

              {/* Calendar */}
              {currentQuestion.type === "calendar" && (
                <div className="flex items-center justify-center overflow-visible w-full">
                  <Calendar
                    mode="single"
                    selected={answers[currentQuestion.id] ? new Date(answers[currentQuestion.id] as string) : undefined}
                    onSelect={handleDateSelect}
                    className="w-full max-w-md pointer-events-auto"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        {currentStep > 0 && (
          <Button
            onClick={handleBack}
            variant="outline"
            className="flex-1 rounded-full border-pink-200 hover:bg-[#FFF5F7]"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        )}
        <Button
          onClick={handleNext}
          disabled={!isAnswered()}
          className="flex-1 rounded-full bg-gradient-to-r from-[#E91E63] to-[#F48FB1] hover:from-[#C2185B] hover:to-[#E91E63] shadow-lg"
        >
          {currentStep === questions.length - 1 ? 'Finish' : 'Next'}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}