import React, { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, TimeSeriesScale } from "chart.js";
import { CandlestickController, CandlestickElement } from "chartjs-chart-financial";
import { Chart } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeSeriesScale,
  CandlestickController,
  CandlestickElement,
  annotationPlugin
);

const allData = {
  BTCUSDT: [
    { o: 65000, h: 65500, l: 64500, c: 65200, t: "2025-04-20" }, 
    { o: 65200, h: 66000, l: 65000, c: 65800, t: "2025-04-21" }, 
    { o: 65800, h: 66200, l: 65500, c: 66000, t: "2025-04-22" }, 
    { o: 66000, h: 66500, l: 65800, c: 66300, t: "2025-04-23" }, 
  ],
  ETHUSDT: [
    { o: 3200, h: 3250, l: 3150, c: 3220, t: "2025-04-20" }, 
    { o: 3220, h: 3300, l: 3200, c: 3280, t: "2025-04-21" }, 
    { o: 3280, h: 3320, l: 3250, c: 3300, t: "2025-04-22" }, 
    { o: 3300, h: 3350, l: 3280, c: 3340, t: "2025-04-23" }, 
  ],
  ADAUSDT: [
    { o: 1.2, h: 1.25, l: 1.18, c: 1.24, t: "2025-04-20" }, 
    { o: 1.24, h: 1.28, l: 1.22, c: 1.27, t: "2025-04-21" }, 
    { o: 1.27, h: 1.30, l: 1.25, c: 1.29, t: "2025-04-22" }, 
    { o: 1.29, h: 1.33, l: 1.27, c: 1.31, t: "2025-04-23" }, 
  ]
};

const patternAnnotations = {
  BTCUSDT: {
    bullishEngulfing: {
      type: 'label',
      xValue: '2025-04-20',
      yValue: 65500,
      backgroundColor: 'rgba(34,197,94,0.9)',
      color: '#fff',
      font: { size: 12, weight: 'bold' },
      content: ['Bullish Engulfing'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    },
    doji: {
      type: 'label',
      xValue: '2025-04-21',
      yValue: 66000,
      backgroundColor: 'rgba(251,191,36,0.9)',
      color: '#222',
      font: { size: 12, weight: 'bold' },
      content: ['Doji'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    },
    shootingStar: {
      type: 'label',
      xValue: '2025-04-22',
      yValue: 66200,
      backgroundColor: 'rgba(239,68,68,0.9)',
      color: '#fff',
      font: { size: 12, weight: 'bold' },
      content: ['Shooting Star'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    },
    hammer: {
      type: 'label',
      xValue: '2025-04-23',
      yValue: 66500,
      backgroundColor: 'rgba(34,197,94,0.8)',
      color: '#fff',
      font: { size: 12, weight: 'bold' },
      content: ['Hammer'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    }
  },
  ETHUSDT: {
    bearishEngulfing: {
      type: 'label',
      xValue: '2025-04-20',
      yValue: 3250,
      backgroundColor: 'rgba(239,68,68,0.9)',
      color: '#fff',
      font: { size: 12, weight: 'bold' },
      content: ['Bearish Engulfing'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    },
    doji: {
      type: 'label',
      xValue: '2025-04-21',
      yValue: 3300,
      backgroundColor: 'rgba(251,191,36,0.9)',
      color: '#222',
      font: { size: 12, weight: 'bold' },
      content: ['Doji'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    },
    morningStar: {
      type: 'label',
      xValue: '2025-04-22',
      yValue: 3320,
      backgroundColor: 'rgba(59,130,246,0.9)',
      color: '#fff',
      font: { size: 12, weight: 'bold' },
      content: ['Morning Star'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    },
    hammer: {
      type: 'label',
      xValue: '2025-04-23',
      yValue: 3350,
      backgroundColor: 'rgba(34,197,94,0.8)',
      color: '#fff',
      font: { size: 12, weight: 'bold' },
      content: ['Hammer'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    }
  },
  ADAUSDT: {
    doji: {
      type: 'label',
      xValue: '2025-04-20',
      yValue: 1.25,
      backgroundColor: 'rgba(251,191,36,0.9)',
      color: '#222',
      font: { size: 12, weight: 'bold' },
      content: ['Doji'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    },
    bullishEngulfing: {
      type: 'label',
      xValue: '2025-04-21',
      yValue: 1.28,
      backgroundColor: 'rgba(34,197,94,0.9)',
      color: '#fff',
      font: { size: 12, weight: 'bold' },
      content: ['Bullish Engulfing'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    },
    shootingStar: {
      type: 'label',
      xValue: '2025-04-22',
      yValue: 1.30,
      backgroundColor: 'rgba(239,68,68,0.9)',
      color: '#fff',
      font: { size: 12, weight: 'bold' },
      content: ['Shooting Star'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    },
    hammer: {
      type: 'label',
      xValue: '2025-04-23',
      yValue: 1.33,
      backgroundColor: 'rgba(34,197,94,0.8)',
      color: '#fff',
      font: { size: 12, weight: 'bold' },
      content: ['Hammer'],
      padding: 6,
      cornerRadius: 4,
      yAdjust: -20
    }
  }
};

const assetOptions = [
  { value: 'BTCUSDT', label: 'BTC/USDT' },
  { value: 'ETHUSDT', label: 'ETH/USDT' },
  { value: 'ADAUSDT', label: 'ADA/USDT' }
];

const patternOptions = [
  { value: 'all', label: 'All Patterns' },
  { value: 'bullishEngulfing', label: 'Bullish Engulfing' },
  { value: 'bearishEngulfing', label: 'Bearish Engulfing' },
  { value: 'doji', label: 'Doji' },
  { value: 'hammer', label: 'Hammer' },
  { value: 'shootingStar', label: 'Shooting Star' },
  { value: 'morningStar', label: 'Morning Star' }
];

export default function CandlestickChart() {
  const [selectedAsset, setSelectedAsset] = useState('BTCUSDT');
  const [selectedPattern, setSelectedPattern] = useState('all');

  const candlestickData = {
    labels: allData[selectedAsset].map(d => d.t),
    datasets: [
      {
        label: assetOptions.find(a => a.value === selectedAsset).label,
        data: allData[selectedAsset],
        borderColor: "#4ade80",
        color: {
          up: "#22c55e",
          down: "#ef4444",
          unchanged: "#64748b"
        }
      }
    ]
  };

  let filteredAnnotations = {};
  if (selectedPattern === 'all') {
    filteredAnnotations = patternAnnotations[selectedAsset];
  } else if (patternAnnotations[selectedAsset][selectedPattern]) {
    filteredAnnotations[selectedPattern] = patternAnnotations[selectedAsset][selectedPattern];
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: `${assetOptions.find(a => a.value === selectedAsset).label} Candlestick Chart`, color: "#fff" },
      tooltip: { enabled: true },
      annotation: {
        annotations: filteredAnnotations
      }
    },
    scales: {
      x: {
        type: 'timeseries',
        time: { unit: 'day' },
        ticks: { color: "#cbd5e1" },
        grid: { color: "#334155" }
      },
      y: { ticks: { color: "#cbd5e1" }, grid: { color: "#334155" } }
    }
  };

  return (
    <div className="bg-[#24262B] rounded-xl p-4 shadow">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <label htmlFor="asset-select" className="text-gray-300 text-sm font-semibold">Asset:</label>
        <select
          id="asset-select"
          value={selectedAsset}
          onChange={e => setSelectedAsset(e.target.value)}
          className="bg-[#18181b] text-gray-100 px-2 py-1 rounded border border-gray-700 focus:outline-none"
        >
          {assetOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <label htmlFor="pattern-select" className="text-gray-300 text-sm font-semibold">Pattern:</label>
        <select
          id="pattern-select"
          value={selectedPattern}
          onChange={e => setSelectedPattern(e.target.value)}
          className="bg-[#18181b] text-gray-100 px-2 py-1 rounded border border-gray-700 focus:outline-none"
        >
          {patternOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <Chart type="candlestick" data={candlestickData} options={options} />
    </div>
  );
}
