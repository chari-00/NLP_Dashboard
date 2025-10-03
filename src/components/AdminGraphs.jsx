import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const dataYears = [
  { year: "2020", count: 20, cumulative: 20 },
  { year: "2021", count: 30, cumulative: 50 },
  { year: "2022", count: 25, cumulative: 75 },
  { year: "2023", count: 35, cumulative: 110 },
  { year: "2024", count: 40, cumulative: 150 },
];

const pieData = [
  { name: "Artificial Intelligence", value: 25 },
  { name: "Machine Learning", value: 20 },
  { name: "Internet of Things", value: 18 },
  { name: "Renewable Energy", value: 15 },
  { name: "Automation", value: 12 },
  { name: "Data Analytics", value: 10 },
  { name: "Sustainability", value: 8 },
  { name: "Others", value: 12 },
];

const barData = [
  { dept: "CSE", count: 35 },
  { dept: "ECE", count: 25 },
  { dept: "EEE", count: 20 },
  { dept: "ME", count: 18 },
  { dept: "IT", count: 15 },
  { dept: "AI/DS", count: 12 },
  { dept: "CE", count: 10 },
  { dept: "CHE", count: 8 },
  { dept: "AE", count: 6 },
  { dept: "BT", count: 5 },
  { dept: "MA", count: 4 },
  { dept: "MN", count: 3 },
];

const COLORS = ["#7F00FF", "#DA70D6", "#BA55D3", "#DDA0DD", "#9932CC", "#9400D3", "#8A2BE2", "#7B68EE"];

const LineChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-3 rounded-lg shadow-lg">
        <p className="font-medium text-gray-900">{`Year: ${label}`}</p>
        <p className="text-sm text-gray-700">{`Projects: ${payload[0].value}`}</p>
        <p className="text-sm text-gray-500">{`Total Projects: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const AdminGraphs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-darkText mb-4">Projects over the Last 5 Years</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dataYears}>
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<LineChartTooltip />} />
            <Line yAxisId="left" type="monotone" dataKey="count" stroke="#7F00FF" strokeWidth={3} />
            <Line yAxisId="right" type="monotone" dataKey="cumulative" stroke="#DA70D6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-darkText mb-4">Domain Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#7F00FF"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
            contentStyle={{
              backgroundColor: '#7F00FF',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontFamily: 'Roboto'
            }}
            labelStyle={{ color: 'white', fontFamily: 'Roboto' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-darkText mb-4">Projects by Department</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="dept" />
            <YAxis />
            <Tooltip 
            contentStyle={{
              backgroundColor: '#7F00FF',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontFamily: 'Roboto'
            }}
            labelStyle={{ color: 'white', fontFamily: 'Roboto' }}
            />
            <Bar dataKey="count" fill="#7F00FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-darkText mb-4">Keyword Trends</h3>
        <table className="min-w-full border border-borderGrey">
          <thead>
            <tr className="bg-lightGrey">
              <th className="px-3 py-2">Domain</th>
              <th className="px-3 py-2">2020</th>
              <th className="px-3 py-2">2021</th>
              <th className="px-3 py-2">2022</th>
              <th className="px-3 py-2">2023</th>
              <th className="px-3 py-2">2024</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-tableHover">
              <td className="px-3 py-2">Artificial Intelligence</td>
              <td className="px-3 py-2">3</td>
              <td className="px-3 py-2">6</td>
              <td className="px-3 py-2">9</td>
              <td className="px-3 py-2">12</td>
              <td className="px-3 py-2">15</td>
            </tr>
            <tr className="hover:bg-tableHover">
              <td className="px-3 py-2">Machine Learning</td>
              <td className="px-3 py-2">2</td>
              <td className="px-3 py-2">5</td>
              <td className="px-3 py-2">8</td>
              <td className="px-3 py-2">10</td>
              <td className="px-3 py-2">12</td>
            </tr>
            <tr className="hover:bg-tableHover">
              <td className="px-3 py-2">Internet of Things</td>
              <td className="px-3 py-2">4</td>
              <td className="px-3 py-2">7</td>
              <td className="px-3 py-2">10</td>
              <td className="px-3 py-2">13</td>
              <td className="px-3 py-2">16</td>
            </tr>
            <tr className="hover:bg-tableHover">
              <td className="px-3 py-2">Renewable Energy</td>
              <td className="px-3 py-2">1</td>
              <td className="px-3 py-2">3</td>
              <td className="px-3 py-2">5</td>
              <td className="px-3 py-2">7</td>
              <td className="px-3 py-2">9</td>
            </tr>
            <tr className="hover:bg-tableHover">
              <td className="px-3 py-2">Automation</td>
              <td className="px-3 py-2">2</td>
              <td className="px-3 py-2">4</td>
              <td className="px-3 py-2">6</td>
              <td className="px-3 py-2">8</td>
              <td className="px-3 py-2">10</td>
            </tr>
            <tr className="hover:bg-tableHover">
              <td className="px-3 py-2">Data Analytics</td>
              <td className="px-3 py-2">1</td>
              <td className="px-3 py-2">3</td>
              <td className="px-3 py-2">5</td>
              <td className="px-3 py-2">7</td>
              <td className="px-3 py-2">9</td>
            </tr>
            <tr className="hover:bg-tableHover">
              <td className="px-3 py-2">Sustainability</td>
              <td className="px-3 py-2">0</td>
              <td className="px-3 py-2">2</td>
              <td className="px-3 py-2">4</td>
              <td className="px-3 py-2">6</td>
              <td className="px-3 py-2">8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminGraphs;
