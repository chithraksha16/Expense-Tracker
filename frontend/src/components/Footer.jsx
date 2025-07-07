import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="bg-slate-900 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* App Description */}
        <div>
          <h2 className="text-xl font-semibold mb-1">Expense Tracking</h2>
          <p className="text-sm text-slate-300">
            Effortlessly manage your expenses, analyze your spending habits, and stay financially healthy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><a href="/reports" className="hover:underline">Reports</a></li>
            <li><a href="/settings" className="hover:underline">Settings</a></li>
            <li><a href="/help" className="hover:underline">Help</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
          <p className="text-sm text-slate-300">Email: support@expensetracking.com</p>
          <p className="text-sm text-slate-300">Phone: +91 1234567890</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-slate-700 pt-2 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Expense Tracking. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer
