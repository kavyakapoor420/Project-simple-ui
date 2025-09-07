
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import Chatbot from "./Chatbot";
import { HeroScrollDemo } from "./HeroScrollDemo";

const pieData = [
  { name: "On-Time", value: 60 },
  { name: "Delayed", value: 25 },
  { name: "Cancelled", value: 15 },
];
const COLORS = ["#3b82f6", "#f59e0b", "#ef4444"];

const barData = [
  { day: "Mon", trains: 120 },
  { day: "Tue", trains: 150 },
  { day: "Wed", trains: 100 },
  { day: "Thu", trains: 180 },
  { day: "Fri", trains: 200 },
];

const lineData = [
  { hour: "6AM", traffic: 40 },
  { hour: "9AM", traffic: 100 },
  { hour: "12PM", traffic: 70 },
  { hour: "3PM", traffic: 120 },
  { hour: "6PM", traffic: 160 },
];

const trainRoute = [
  [28.6139, 77.209], // Delhi
  [27.1767, 78.0081], // Agra
  [26.9124, 75.7873], // Jaipur
];

export default function App() {
  useEffect(() => {
    document.title = "SamaySetu | AI Train Scheduling";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white font-sans">
      {/* Navbar */}
      <Chatbot/>
     
      <header className="flex justify-between items-center p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide text-blue-400">SamaySetu</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-blue-400">Features</a>
          <a href="#demo" className="hover:text-blue-400">Demo</a>
          <a href="#charts" className="hover:text-blue-400">Analytics</a>
          <a href="#map" className="hover:text-blue-400">Live Map</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
        <button className="md:hidden border rounded-lg px-3 py-1">☰</button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Smarter Train Scheduling with <span className="text-blue-400">AI</span>
        </h2>
        <p className="text-lg max-w-2xl mb-8 text-gray-300">
          Transform railway operations with intelligent decision-support: maximize punctuality, reduce costs, and ensure safe, conflict-free train movements.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl shadow-lg font-semibold">Get Started</button>
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold border border-gray-600">Watch Demo</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-900">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition">
            <h4 className="text-xl font-semibold mb-3">Real-time Optimization</h4>
            <p className="text-gray-400">AI-driven algorithms dynamically resolve conflicts and re-optimize under delays, ensuring smooth train flows.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition">
            <h4 className="text-xl font-semibold mb-3">Multi-Objective Planning</h4>
            <p className="text-gray-400">Balances punctuality, safety, cost, and throughput with explainable recommendations for controllers.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition">
            <h4 className="text-xl font-semibold mb-3">Interactive Dashboard</h4>
            <p className="text-gray-400">Provides scenario simulation, conflict alerts, KPIs, and intuitive controls for fast decision-making.</p>
          </div>
        </div>
      </section>

       <HeroScrollDemo/>

      {/* Charts Section */}
      <section id="charts" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Analytics & Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pie Chart */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h4 className="mb-4 font-semibold">Train Status</h4>
              <PieChart width={250} height={250}>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            {/* Bar Chart */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h4 className="mb-4 font-semibold">Trains per Day</h4>
              <BarChart width={300} height={250} data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="trains" fill="#3b82f6" />
              </BarChart>
            </div>

            {/* Line Chart */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h4 className="mb-4 font-semibold">Traffic by Hour</h4>
              <LineChart width={300} height={250} data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="traffic" stroke="#f59e0b" />
              </LineChart>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Live Train Route</h3>
          <p className="text-gray-300 mb-8">Dummy visualization of a Delhi-Agra-Jaipur route.</p>
          <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <MapContainer center={[27.5, 77.5]} zoom={6} style={{ height: "100%", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {trainRoute.map((pos, i) => (
                <Marker key={i} position={pos}>
                  <Popup>Station {i + 1}</Popup>
                </Marker>
              ))}
              <Polyline positions={trainRoute} color="blue" />
            </MapContainer>
          </div>
        </div>
      </section>

     


      {/* Footer */}
      <footer className="py-6 text-center border-t border-gray-700 text-gray-400">
        © 2025 SamaySetu. All rights reserved.
      </footer>
    </div>
  );
}
