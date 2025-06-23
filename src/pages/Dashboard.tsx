import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Bot, 
  DollarSign, 
  Activity, 
  Settings,
  Play,
  Pause,
  BarChart3,
  Wallet,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { useAuth } from '../contexts/AuthContext';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeBots, setActiveBots] = useState(6);

  const stats = [
    {
      title: 'Total Balance',
      value: '$24,847.32',
      change: '+12.5%',
      trend: 'up',
      icon: Wallet,
      color: 'primary'
    },
    {
      title: 'Today\'s Profit',
      value: '$1,247.89',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'success'
    },
    {
      title: 'Active Bots',
      value: activeBots.toString(),
      change: '6 running',
      trend: 'neutral',
      icon: Bot,
      color: 'primary'
    },
    {
      title: 'Success Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: BarChart3,
      color: 'success'
    }
  ];

  const tradingBots = [
    {
      id: 1,
      name: 'Scalping Pro',
      status: 'active',
      profit: '+$2,847.32',
      trades: 156,
      successRate: 89.7,
      pair: 'BTC/USD'
    },
    {
      id: 2,
      name: 'Trend Follower',
      status: 'active',
      profit: '+$1,923.45',
      trades: 89,
      successRate: 92.1,
      pair: 'ETH/USD'
    },
    {
      id: 3,
      name: 'Grid Master',
      status: 'paused',
      profit: '+$856.78',
      trades: 234,
      successRate: 87.3,
      pair: 'ADA/USD'
    },
    {
      id: 4,
      name: 'Arbitrage Hunter',
      status: 'active',
      profit: '+$3,124.67',
      trades: 67,
      successRate: 96.8,
      pair: 'SOL/USD'
    }
  ];

  const recentTrades = [
    {
      id: 1,
      pair: 'BTC/USD',
      type: 'BUY',
      amount: '0.0234',
      price: '$42,847.32',
      profit: '+$124.56',
      time: '2 min ago',
      status: 'completed'
    },
    {
      id: 2,
      pair: 'ETH/USD',
      type: 'SELL',
      amount: '1.2456',
      price: '$2,847.89',
      profit: '+$89.23',
      time: '5 min ago',
      status: 'completed'
    },
    {
      id: 3,
      pair: 'ADA/USD',
      type: 'BUY',
      amount: '1000',
      price: '$0.4567',
      profit: '+$23.45',
      time: '8 min ago',
      status: 'completed'
    }
  ];

  const toggleBot = (botId: number) => {
    // Toggle bot status logic would go here
    console.log(`Toggling bot ${botId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's your trading performance overview
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  stat.color === 'success' ? 'bg-success-100' : 'bg-primary-100'
                }`}>
                  <stat.icon className={`w-6 h-6 ${
                    stat.color === 'success' ? 'text-success-600' : 'text-primary-600'
                  }`} />
                </div>
                {stat.trend !== 'neutral' && (
                  <div className={`flex items-center space-x-1 ${
                    stat.trend === 'up' ? 'text-success-600' : 'text-danger-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Trading Bots */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Trading Bots</h2>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Manage All
              </button>
            </div>
            
            <div className="space-y-4">
              {tradingBots.map((bot, index) => (
                <motion.div
                  key={bot.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        bot.status === 'active' ? 'bg-success-500' : 'bg-gray-400'
                      }`}></div>
                      <h3 className="font-semibold text-gray-900">{bot.name}</h3>
                      <span className="text-sm text-gray-500">{bot.pair}</span>
                    </div>
                    <button
                      onClick={() => toggleBot(bot.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        bot.status === 'active'
                          ? 'bg-danger-100 text-danger-600 hover:bg-danger-200'
                          : 'bg-success-100 text-success-600 hover:bg-success-200'
                      }`}
                    >
                      {bot.status === 'active' ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Profit</p>
                      <p className="font-semibold text-success-600">{bot.profit}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Trades</p>
                      <p className="font-semibold text-gray-900">{bot.trades}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Success</p>
                      <p className="font-semibold text-gray-900">{bot.successRate}%</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Trades */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Trades</h2>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {recentTrades.map((trade, index) => (
                <motion.div
                  key={trade.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      trade.type === 'BUY' ? 'bg-success-100' : 'bg-danger-100'
                    }`}>
                      {trade.type === 'BUY' ? (
                        <TrendingUp className={`w-4 h-4 ${
                          trade.type === 'BUY' ? 'text-success-600' : 'text-danger-600'
                        }`} />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-danger-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{trade.pair}</p>
                      <p className="text-sm text-gray-500">
                        {trade.type} {trade.amount} @ {trade.price}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-success-600">{trade.profit}</p>
                    <p className="text-sm text-gray-500">{trade.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Subscription Status */}
        {user?.subscription && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {user.subscription.plan} Plan Active
                  </h3>
                  <p className="text-gray-600">
                    Your subscription expires on {new Date(user.subscription.expiresAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Manage Subscription
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};