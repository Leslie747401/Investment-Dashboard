"use client"

import { useState, useMemo } from "react"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const generateRandomData = (points: number, startValue: number, timeUnit: 'hour' | 'day') => {
  const data = []
  let currentValue = startValue
  const now = new Date()

  for (let i = points - 1; i >= 0; i--) {
    const date = new Date(now)
    if (timeUnit === 'hour') {
      date.setHours(date.getHours() - i)
    } else {
      date.setDate(date.getDate() - i)
    }
    currentValue += Math.random() * 1000 - 500 // Random change between -500 and 500
    currentValue = Math.max(0, currentValue) // Ensure value doesn't go below 0
    data.push({
      date: timeUnit === 'hour' 
        ? date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })
        : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Math.round(currentValue)
    })
  }
  return data
}

const timePeriodsData = {
  "1D": generateRandomData(24, 10000, 'hour'),
  "7D": generateRandomData(7, 9000, 'day'),
  "1M": generateRandomData(30, 8000, 'day'),
  "1Y": generateRandomData(12, 5000, 'day'), // Using 12 points for year view
  "All": generateRandomData(5, 1000, 'day') // Using 5 points for All time view
}

export default function PortfolioChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("1M")
  const data = useMemo(() => timePeriodsData[selectedPeriod as keyof typeof timePeriodsData], [selectedPeriod])

  const formatYAxis = (value: number) => `$${(value / 1000).toFixed(1)}K`
  const formatTooltipValue = (value: number) => `$${value.toLocaleString()}`

  const maxValue = Math.max(...data.map(item => item.value))
  const minValue = Math.min(...data.map(item => item.value))
  const yAxisDomain = [minValue * 0.9, maxValue * 1.1] // Add some padding

  return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-black text-sm">Portfolio Return</h2>
          <RadioGroup 
            value={selectedPeriod} 
            onValueChange={setSelectedPeriod}
            className="flex items-center gap-2"
          >
            {Object.keys(timePeriodsData).map((period) => (
              <div key={period} className="flex items-center">
                <RadioGroupItem
                  value={period}
                  id={period}
                  className="peer hidden"
                />
                <Label
                  htmlFor={period}
                  className="px-3 py-1 rounded-full text-sm text-zinc-400 peer-data-[state=checked]:bg-zinc-800 peer-data-[state=checked]:text-zinc-100 cursor-pointer hover:bg-[#ebebeb] transition-all duration-300"
                >
                  {period}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="h-[150px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#71717a', fontSize: 12 }}
                dy={10}
                interval="preserveStartEnd"
              />
              <YAxis
                domain={yAxisDomain}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#71717a', fontSize: 12 }}
                tickFormatter={formatYAxis}
                dx={-10}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#27272a', border: 'none', borderRadius: '6px' }}
                labelStyle={{ color: '#d4d4d8' }}
                formatter={formatTooltipValue}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#22c55e' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
  )
}

