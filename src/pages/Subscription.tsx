import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  X, 
  CreditCard, 
  Shield, 
  Zap, 
  Bot,
  BarChart3,
  Headphones,
  Star
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { useAuth } from '../contexts/AuthContext';

export const Subscription: React.FC = () => {
  const { user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 0,
      period: 'Free Forever',
      description: 'Perfect for beginners to get started with automated trading',
      features: [
        'Up to 3 trading bots',
        'Basic trading strategies',
        '5 active trades',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      limitations: [
        'Limited to $1,000 trading volume',
        'No advanced strategies',
        'Standard execution speed'
      ],
      popular: false,
      color: 'gray'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 49,
      period: 'per month',
      description: 'Advanced features for serious traders',
      features: [
        'Up to 15 trading bots',
        'Advanced AI strategies',
        '50 active trades',
        'Priority support',
        'Advanced analytics & reports',
        'Risk management tools',
        'API access',
        'Custom indicators',
        'Backtesting tools'
      ],
      limitations: [],
      popular: true,
      color: 'primary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      period: 'per month',
      description: 'Complete solution for professional traders and institutions',
      features: [
        'Unlimited trading bots',
        'Custom AI strategies',
        'Unlimited active trades',
        '24/7 phone support',
        'White-label solution',
        'Dedicated account manager',
        'Advanced API access',
        'Custom integrations',
        'Priority execution',
        'Institutional-grade security'
      ],
      limitations: [],
      popular: false,
      color: 'success'
    }
  ];

  const handleSubscribe = async (planId: string) => {
    if (planId === 'starter') {
      // Free plan - no payment needed
      alert('Free plan activated!');
      return;
    }

    setSelectedPlan(planId);
    setShowPayment(true);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate PayPal payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Payment successful! Your subscription has been activated.');
      setShowPayment(false);
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Trading Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the full potential of automated trading with our flexible subscription plans
          </p>
        </motion.div>

        {/* Current Subscription Status */}
        {user?.subscription && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-primary-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Current Plan: {user.subscription.plan}
                  </h3>
                  <p className="text-gray-600">
                    Status: {user.subscription.status} • Expires: {new Date(user.subscription.expiresAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Manage Billing
              </button>
            </div>
          </motion.div>
        )}

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-primary-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-success-600" />
                  <span>Features Included</span>
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 flex items-center space-x-2 mb-3">
                      <X className="w-5 h-5 text-gray-400" />
                      <span>Limitations</span>
                    </h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start space-x-3">
                          <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleSubscribe(plan.id)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-glow'
                    : plan.id === 'enterprise'
                    ? 'bg-success-600 text-white hover:bg-success-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.price === 0 ? 'Get Started Free' : `Subscribe to ${plan.name}`}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose TradePro?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'AI-Powered Trading',
                description: 'Advanced machine learning algorithms analyze market patterns and execute trades automatically'
              },
              {
                icon: Shield,
                title: 'Bank-Level Security',
                description: 'Your funds and data are protected with institutional-grade security measures'
              },
              {
                icon: Zap,
                title: 'Lightning Fast Execution',
                description: 'Execute trades in milliseconds with our high-performance infrastructure'
              },
              {
                icon: BarChart3,
                title: 'Advanced Analytics',
                description: 'Comprehensive reporting and analytics to track your trading performance'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Get help whenever you need it with our dedicated support team'
              },
              {
                icon: CreditCard,
                title: 'Flexible Billing',
                description: 'Cancel anytime, upgrade or downgrade your plan as your needs change'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'Can I change my plan anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, our Starter plan is completely free forever. You can also try Pro features with a 14-day free trial.'
              },
              {
                question: 'How secure is my money?',
                answer: 'We use bank-level security and never hold your funds. All trading is done through secure, regulated exchanges.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for your convenience.'
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Subscription</h3>
              <p className="text-gray-600">
                Subscribe to {plans.find(p => p.id === selectedPlan)?.name} plan
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Plan:</span>
                <span className="font-semibold">{plans.find(p => p.id === selectedPlan)?.name}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Price:</span>
                <span className="font-semibold text-lg">
                  ${plans.find(p => p.id === selectedPlan)?.price}/month
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Pay with PayPal</span>
                    <CreditCard className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <button
                onClick={() => setShowPayment(false)}
                className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};