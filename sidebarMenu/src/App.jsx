import React, { useState } from 'react';

const menuItems = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Services' },
  { name: 'Contact' },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Simple Hamburger Button - Only show when sidebar is closed */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-30 p-2 rounded bg-gray-800 text-white shadow-lg hover:bg-gray-700"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <rect y="6" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="16" width="24" height="2" />
          </svg>
        </button>
      )}

      {/* Simple Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-20 shadow-xl`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="font-bold text-xl">Menu</span>
          <button
            className="p-1 rounded hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <ul className="mt-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`p-4 cursor-pointer hover:bg-gray-700 ${
                active === item.name ? 'bg-gray-700 font-semibold' : ''
              }`}
              onClick={() => {
                setActive(item.name);
                setIsOpen(false); // Close sidebar when menu item is clicked
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Simple Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Simple Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-gray-800 mb-4">
          {active} Section
        </div>
        <p className="text-gray-600 text-lg">
          Welcome to the {active} section!
        </p>
      </div>
    </div>
  );
};

export default App;