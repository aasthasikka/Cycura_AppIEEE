import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Bell,
  Globe,
  Lock,
  MapPin,
  Moon,
  User,
  Award,
  Info,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';
import { Badge } from '@/app/components/ui/badge';
import { useUser } from '@/app/contexts/UserContext';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
}

const badges = [
  { name: 'Bronze', color: '#CD7F32', unlocked: true },
  { name: 'Silver', color: '#C0C0C0', unlocked: true },
  { name: 'Gold', color: '#FFD700', unlocked: false },
  { name: 'Diamond', color: '#B9F2FF', unlocked: false }
];

export function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const [notifications, setNotifications] = useState(true);
  const { userData, isDarkMode, toggleDarkMode } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white pb-24 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E91E63] to-[#F48FB1] rounded-b-[2.5rem] shadow-lg shadow-pink-200 pb-8 pt-6 px-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl text-white flex-1">Settings</h1>
        </div>

        {/* Profile Card */}
        <Card className="bg-white/20 backdrop-blur-sm rounded-3xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-pink-100 flex items-center justify-center">
              <User className="h-8 w-8 text-[#E91E63]" />
            </div>
            <div className="flex-1 text-white">
              <h3 className="text-lg mb-1">{userData.name || 'User'}</h3>
              <p className="text-sm opacity-90">{userData.email || 'user@email.com'}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              Edit
            </Button>
          </div>
        </Card>
      </div>

      <div className="px-6 -mt-4">
        {/* Wellness Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Your Wellness Journey</h3>
          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-[#4A2C2A] mb-1">Wellness Badges</h4>
                <p className="text-xs text-[#8E7C93]">Track your progress</p>
              </div>
              <Award className="h-6 w-6 text-[#E91E63]" />
            </div>
            <div className="flex gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  className="flex-1 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`w-14 h-14 rounded-full mx-auto mb-2 flex items-center justify-center ${
                      badge.unlocked ? 'shadow-lg' : 'opacity-30'
                    }`}
                    style={{
                      backgroundColor: badge.color,
                      boxShadow: badge.unlocked ? `0 0 20px ${badge.color}50` : 'none'
                    }}
                  >
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-xs text-[#8E7C93]">{badge.name}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-pink-100">
              <div className="flex justify-between text-sm">
                <span className="text-[#8E7C93]">Current Streak</span>
                <span className="text-[#E91E63]">12 days 🔥</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Settings Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 mb-6"
        >
          <h3 className="text-sm text-[#4A2C2A]">Preferences</h3>
          
          <Card className="bg-white rounded-2xl shadow-md shadow-pink-100 overflow-hidden">
            <SettingItem
              icon={Bell}
              label="Notifications"
              hasSwitch
              switchValue={notifications}
              onSwitchChange={setNotifications}
            />
            <Divider />
            <SettingItem
              icon={Moon}
              label="Dark Mode"
              hasSwitch
              switchValue={isDarkMode}
              onSwitchChange={toggleDarkMode}
            />
            <Divider />
            <SettingItem
              icon={Globe}
              label="Language"
              value="English"
              onClick={() => alert('Language settings coming soon! Currently supports English only.')}
            />
            <Divider />
            <SettingItem
              icon={MapPin}
              label="Location"
              value="Mumbai, India"
              subtitle="City/State only (no tracking)"
              onClick={() => alert('Location settings coming soon! Your privacy is protected - we only collect city/state info for better health recommendations.')}
            />
          </Card>
        </motion.div>

        {/* Account & Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 mb-6"
        >
          <h3 className="text-sm text-[#4A2C2A]">Account & Privacy</h3>
          
          <Card className="bg-white rounded-2xl shadow-md shadow-pink-100 overflow-hidden">
            <SettingItem
              icon={User}
              label="Account Settings"
              onClick={() => alert('Account settings coming soon! Manage your profile, password, and preferences here.')}
            />
            <Divider />
            <SettingItem
              icon={Lock}
              label="Privacy & Data"
              onClick={() => alert('Privacy & Data settings coming soon! Your data is encrypted and never shared with third parties. Learn more about our privacy commitment.')}
            />
            <Divider />
            <SettingItem
              icon={Info}
              label="About Cycura"
              onClick={() => onNavigate('about')}
            />
          </Card>
        </motion.div>

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="outline"
            className="w-full rounded-full border-pink-200 text-[#C2185B] hover:bg-red-50"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </motion.div>

        <p className="text-xs text-center text-[#8E7C93] mt-6">
          Cycura v1.0.0 • Made with 💗 for women's wellness
        </p>
      </div>
    </div>
  );
}

interface SettingItemProps {
  icon: React.ElementType;
  label: string;
  subtitle?: string;
  value?: string;
  hasSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  onClick?: () => void;
  disabled?: boolean;
}

function SettingItem({
  icon: Icon,
  label,
  subtitle,
  value,
  hasSwitch,
  switchValue,
  onSwitchChange,
  onClick,
  disabled
}: SettingItemProps) {
  return (
    <div
      className={`flex items-center gap-4 p-4 ${
        !hasSwitch && !disabled ? 'cursor-pointer hover:bg-[#FFF5F7]' : ''
      } transition-colors`}
      onClick={!hasSwitch && !disabled ? onClick : undefined}
    >
      <div className="p-2 bg-[#FCE4EC] rounded-xl">
        <Icon className="h-5 w-5 text-[#E91E63]" />
      </div>
      <div className="flex-1">
        <p className={`text-[#4A2C2A] ${disabled ? 'opacity-50' : ''}`}>{label}</p>
        {subtitle && (
          <p className="text-xs text-[#8E7C93] mt-0.5">{subtitle}</p>
        )}
      </div>
      {hasSwitch && (
        <Switch
          checked={switchValue}
          onCheckedChange={onSwitchChange}
          disabled={disabled}
        />
      )}
      {value && (
        <>
          <span className="text-sm text-[#8E7C93]">{value}</span>
          <ChevronRight className="h-5 w-5 text-[#8E7C93]" />
        </>
      )}
      {!hasSwitch && !value && !disabled && (
        <ChevronRight className="h-5 w-5 text-[#8E7C93]" />
      )}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-pink-100 mx-4" />;
}