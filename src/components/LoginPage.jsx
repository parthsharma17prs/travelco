import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Mail, Phone, Lock, User, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState('form'); // form, otp
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  // Form fields
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulate SMTP OTP sending
    // In a real app, you'd call a backend that uses nodemailer/resend
    console.log(`Sending OTP to ${email}`);

    setTimeout(() => {
      setLoading(false);
      setStep('otp');
      setMessage('OTP sent to your email (Demo: 123456)');
    }, 1500);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      const userData = {
        name: isLogin ? (email === 'demo@travelco.com' ? 'Demo User' : email.split('@')[0]) : name,
        email,
        phone
      };
      login(userData);
      navigate('/rooms');
    } else {
      setMessage('Invalid OTP. Please try again.');
    }
  };

  const handleDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      const userData = {
        name: 'Demo Guest',
        email: 'demo@travelco.com',
        phone: '+1 (555) 000-0000'
      };
      login(userData);
      setLoading(false);
      navigate('/rooms');
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden bg-[#0c0c0c]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto relative z-10"
      >
        <div className="glass-panel rounded-[2rem] p-8 border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {step === 'otp' ? 'Verify OTP' : (isLogin ? 'Welcome Back' : 'Join Travel Co.')}
            </h1>
            <p className="text-white/60 text-sm">
              {step === 'otp' ? `We've sent a code to ${email}` : (isLogin ? 'Sign in to continue your journey' : 'Start your luxury escape today')}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {step === 'form' ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSendOTP}
                className="space-y-4"
              >
                {!isLogin && (
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-gold/50 outline-none transition-all placeholder:text-white/20"
                      required
                    />
                  </div>
                )}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-gold/50 outline-none transition-all placeholder:text-white/20"
                    required
                  />
                </div>
                {!isLogin && (
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-gold/50 outline-none transition-all placeholder:text-white/20"
                      required
                    />
                  </div>
                )}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-gold/50 outline-none transition-all placeholder:text-white/20"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-white text-black font-bold hover:bg-brand-gold hover:text-white transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                    <>
                      {isLogin ? 'Sign In' : 'Create Account'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleVerifyOTP}
                className="space-y-6"
              >
                <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/20 focus:border-brand-gold outline-none transition-all text-center text-2xl tracking-[0.5em] font-mono"
                    required
                  />
                </div>

                {message && (
                  <p className={`text-center text-sm ${message.includes('Demo') ? 'text-brand-gold' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-brand-gold text-white font-bold hover:brightness-110 transition-all shadow-lg shadow-brand-gold/20"
                >
                  Verify & Continue
                </button>

                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="w-full text-white/40 text-sm hover:text-white transition-colors"
                >
                  Change Email or Details
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="px-4 bg-[#0c0c0c] text-white/20">or</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
                Facebook
              </button>
            </div>

            <button
              onClick={handleDemoLogin}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-brand-gold/10 text-brand-gold border border-brand-gold/20 hover:bg-brand-gold/20 transition-all font-bold text-sm"
            >
              Try Demo Account
            </button>
          </div>
        </div>

        <p className="text-center text-white/40 text-sm mt-8">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-white hover:text-brand-gold ml-2 font-bold underline-offset-4 hover:underline transition-all"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
