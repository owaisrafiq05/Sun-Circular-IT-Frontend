'use client';

export default function DashboardLayout({ children }) {
  return (
    <div>
      {/* Dashboard-specific UI elements */}
      <div>
        {children}
      </div>
    </div>
  );
}