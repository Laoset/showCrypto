'use client';
import { formatCurrency, formatPercentage } from '@/utils/formatter';
import {
  Award,
  BarChart3,
  TrendingDown,
  TrendingUp,
  DollarSign,
} from 'lucide-react';
const CryptoCard = ({ cryptoData }) => {
  const {
    name,
    symbol,
    image,
    current_price,
    price_change_percentage_24h,
    market_cap,
    market_cap_rank,
    total_volume,
    high_24h,
    low_24h,
  } = cryptoData;

  const isPriceUp = price_change_percentage_24h >= 0;

  return (
    <div className="w-full h-full perspective-1000">
      <div className="relative w-full shadow-xl border border-gray-700/50 transform transition-all duration-300 rounded-lg group">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <img
                  src={image}
                  alt={`${name} logo`}
                  className="w-full h-full object-contain rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold textColor">
                  {name}
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm md:text-base uppercase">
                    {symbol}
                  </span>
                  <div className="flex items-center">
                    <Award size={14} className="text-amber-400 mr-1" />
                    <span className="text-amber-400 text-xs">{`#${market_cap_rank}`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-xl md:text-2xl font-bold textColor">
                {formatCurrency(current_price)}
              </div>
              <div
                className={`flex items-center ${
                  isPriceUp ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {isPriceUp ? (
                  <TrendingUp size={16} className="mr-1" />
                ) : (
                  <TrendingDown size={16} className="mr-1" />
                )}
                <span className="text-sm font-medium">
                  {formatPercentage(price_change_percentage_24h)}
                </span>
              </div>
            </div>
          </div>

          {/* Card content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 size={18} className="text-purple-400" />
                <h3 className="text-gray-300 font-semibold">Market Cap</h3>
              </div>
              <p className="textColor font-medium">
                {formatCurrency(market_cap)}
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign size={18} className="text-blue-400" />
                <h3 className="text-gray-300 font-semibold">Volume (24h)</h3>
              </div>
              <p className="textColor font-medium">
                {formatCurrency(total_volume)}
              </p>
            </div>
          </div>

          {/* Price range */}
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>24h Low</span>
              <span>24h High</span>
            </div>
            <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-green-500"
                style={{ width: '100%' }}
              ></div>
              <div
                className="absolute top-0 h-full w-2 bg-white rounded-full transform -translate-x-1/2"
                style={{
                  left: `${
                    ((current_price - low_24h) / (high_24h - low_24h)) * 100
                  }%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-red-400">{formatCurrency(low_24h)}</span>
              <span className="text-green-400">{formatCurrency(high_24h)}</span>
            </div>
          </div>

          {/* Swipe indicator */}
          <div className="mt-8 flex justify-center">
            <div className="text-gray-500 text-sm flex items-center animate-pulse">
              <span className="mr-2">Swipe to see more coins</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
