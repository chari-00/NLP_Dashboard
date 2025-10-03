import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar, Legend
} from "recharts";

const dataLine = [
  { year: "2020", count: 30, total: 30 },
  { year: "2021", count: 40, total: 70 },
  { year: "2022", count: 25, total: 95 },
  { year: "2023", count: 15, total: 110 },
  { year: "2024", count: 10, total: 120 },
];

const dataPie = [
  { name: "Artificial Intelligence", value: 25 },
  { name: "Machine Learning", value: 20 },
  { name: "Internet of Things", value: 18 },
  { name: "Renewable Energy", value: 15 },
  { name: "Automation", value: 12 },
  { name: "Data Analytics", value: 10 },
  { name: "Sustainability", value: 8 },
  { name: "Others", value: 12 },
];

const dataBar = [
  { dept: "CSE", projects: 35 },
  { dept: "ECE", projects: 25 },
  { dept: "EEE", projects: 20 },
  { dept: "ME", projects: 18 },
  { dept: "IT", projects: 15 },
  { dept: "AI/DS", projects: 12 },
  { dept: "CE", projects: 10 },
  { dept: "CHE", projects: 8 },
  { dept: "AE", projects: 6 },
  { dept: "BT", projects: 5 },
  { dept: "MA", projects: 4 },
  { dept: "MN", projects: 3 },
];

const COLORS = ["#7F00FF", "#DA70D6", "#BA55D3", "#DDA0DD", "#9932CC", "#9400D3", "#8A2BE2", "#7B68EE"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-primaryPurple text-white p-3 rounded-lg shadow-lg border-none">
        <p className="font-medium">{`Department: ${label}`}</p>
        <p className="text-sm">{`Total Projects: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

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

const GraphSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-darkText mb-4">Projects over the Last 5 Years</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dataLine}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<LineChartTooltip />} />
            <Line yAxisId="left" type="monotone" dataKey="count" stroke="#7F00FF" strokeWidth={3} />
            <Line yAxisId="right" type="monotone" dataKey="total" stroke="#DA70D6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-darkText mb-4">Domain Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={dataPie}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#7F00FF"
              dataKey="value"
              label
            >
              {dataPie.map((entry, index) => (
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
          <BarChart data={dataBar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dept" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="projects" fill="#7F00FF" />
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

export default GraphSection;
