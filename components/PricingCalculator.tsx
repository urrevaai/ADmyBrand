'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, DollarSign } from 'lucide-react';
import Card from './Card';

const PricingCalculator = () => {
  const [users, setUsers] = useState(10);
  const basePrice = 29;
  const pricePerUser = 10;
  const totalPrice = basePrice + (users * pricePerUser);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Investment
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See exactly what your team will pay with our transparent pricing calculator. 
            No hidden fees, no surprises.
          </p>
        </motion.div>

        <Card className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Your Custom Price</h3>
            <p className="text-white/70">Adjust the slider to see pricing for your team size</p>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-white font-medium flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Team Size
                </label>
                <span className="text-white font-bold">{users} users</span>
              </div>
              
              <input
                type="range"
                min="1"
                max="50"
                value={users}
                onChange={(e) => setUsers(parseInt(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(users / 50) * 100}%, rgb(255 255 255 / 0.2) ${(users / 50) * 100}%, rgb(255 255 255 / 0.2) 100%)`
                }}
              />
            </div>

            <motion.div
              key={totalPrice}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl p-6 text-center"
            >
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-6 h-6 text-green-400 mr-1" />
                <span className="text-4xl font-bold text-white">${totalPrice}</span>
                <span className="text-white/70 ml-2">/month</span>
              </div>
              
              <div className="text-sm text-white/60">
                Base: ${basePrice} + ${pricePerUser} × {users} users
              </div>
            </motion.div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingCalculator;