import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ExecutiveDashboard from './pages/ExecutiveDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The identity foundation engine is provisioning this module. Access will be available shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ExecutiveDashboard />} />
          <Route path="/identities" element={<Placeholder name="Identity Portfolio" />} />
          <Route path="/tenants" element={<Placeholder name="Tenant Factory" />} />
          <Route path="/federation" element={<Placeholder name="Federation & Trust Control" />} />
          <Route path="/mfa" element={<Placeholder name="MFA Posture Dashboard" />} />
          <Route path="/pam" element={<Placeholder name="PAM Foundation Console" />} />
          <Route path="/analytics" element={<Placeholder name="Risk Insights & Analytics" />} />
          <Route path="/compliance" element={<Placeholder name="Compliance Evidence Center" />} />
          <Route path="/settings" element={<Placeholder name="Platform Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
