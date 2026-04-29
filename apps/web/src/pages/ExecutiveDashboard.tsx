import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie 
} from 'recharts';
import { 
  Shield, 
  Users, 
  Globe, 
  Activity,
  CheckCircle2,
  Lock,
  ArrowUpRight
} from 'lucide-react';

const federationData = [
  { name: 'Active', value: 85, color: '#14b8a6' },
  { name: 'Pending', value: 10, color: '#2dd4bf' },
  { name: 'Error', value: 5, color: '#f43f5e' },
];

const provisionTrends = [
  { month: 'Jan', tenants: 5 },
  { month: 'Feb', tenants: 8 },
  { month: 'Mar', tenants: 12 },
  { month: 'Apr', tenants: 15 },
  { month: 'May', tenants: 22 },
];

const KPI_CARDS = [
  { title: 'Identity Tenants', value: '42', trend: '+4 this month', color: 'teal', icon: Globe },
  { title: 'Global Sync Health', value: '99.8%', trend: 'Stable', color: 'emerald', icon: Activity },
  { title: 'MFA Coverage', value: '94%', trend: '+2.1%', color: 'cyan', icon: Shield },
  { title: 'Privileged Vaults', value: '18', trend: 'Healthy', color: 'teal', icon: Lock },
];

const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Identity Landing Zone Console</h1>
          <p className="text-slate-400">Enterprise blueprint orchestration and foundation governance.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Federation Trust Report
          </button>
          <button className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Provision New Tenant
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className="text-xs font-medium text-slate-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tenant Provisioning Trends */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Foundation Scaling Trends</h3>
            <div className="flex items-center gap-1 text-teal-400 text-sm font-medium">
              <ArrowUpRight size={16} />
              <span>+18% Scaling</span>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={provisionTrends}>
                <defs>
                  <linearGradient id="colorTenants" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="tenants" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorTenants)" name="Identity Tenants" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Federation Health */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl lg:col-span-1">
          <h3 className="text-lg font-bold text-white mb-6">Federation Trust Status</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={federationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {federationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-teal-500 w-5 h-5" />
                <span className="text-sm font-medium">SSO Rollout: 85%</span>
              </div>
              <span className="text-xs text-teal-400">On Track</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <Shield className="text-rose-500 w-5 h-5" />
                <span className="text-sm font-medium">MFA Gaps Found</span>
              </div>
              <span className="text-xs text-rose-400">12 Tenants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
