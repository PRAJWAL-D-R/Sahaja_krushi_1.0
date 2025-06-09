import { 
  User2, 
  Menu, 
  X, 
  Search, 
  Bell, 
  ChevronDown,
  Home,
  Cloud,
  FileText,
  History,
  Eye,
  MessageSquare,
  Newspaper,
  UserCircle,
  ExternalLink,
  Tractor,
  Sprout,
  BarChart3,
  Settings,
  LogOut
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const FarmerDashboardNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showReportsDropdown, setShowReportsDropdown] = useState(false);
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const reportsRef = useRef(null);
  const toolsRef = useRef(null);
  const notificationRef = useRef(null);
  const userRef = useRef(null);

  // Mock data
  const notifications = [
    { id: 1, message: "Weather alert: Heavy rainfall expected tomorrow", time: "1 hour ago", unread: true },
    { id: 2, message: "Your crop report has been approved", time: "3 hours ago", unread: true },
    { id: 3, message: "New subsidy scheme available for your region", time: "1 day ago", unread: false },
    { id: 4, message: "Feedback received on your last submission", time: "2 days ago", unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  // Reports dropdown items
  const reports = [
    { name: "Submit Report Form", icon: FileText, href: "#submit-report" },
    { name: "Submission History", icon: History, href: "#history" },
    { name: "Submission Details", icon: Eye, href: "#details" },
  ];

  // Tools dropdown items
  const tools = [
    { name: "Weather Widget", icon: Cloud, href: "#weather" },
    { name: "News Feed", icon: Newspaper, href: "#news" },
    { name: "Quick Links", icon: ExternalLink, href: "#quick-links" },
  ];

  // Navigation items for dashboard sections
  const dashboardSections = [
    { name: "Dashboard", icon: Home, href: "#dashboard", active: true },
    { name: "Profile Summary", icon: UserCircle, href: "#profile" },
    { name: "Feedback", icon: MessageSquare, href: "#feedback" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (reportsRef.current && !reportsRef.current.contains(event.target)) {
        setShowReportsDropdown(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(event.target)) {
        setShowToolsDropdown(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavLink = ({ href, children, onClick, className = "", active = false }) => (
    <a 
      href={href} 
      onClick={onClick}
      className={`text-white hover:text-amber-200 transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-white/10 ${active ? 'bg-white/15 text-amber-200' : ''} ${className}`}
    >
      {children}
    </a>
  );

  const DropdownItem = ({ icon: Icon, children, href }) => (
    <a 
      href={href}
      className="flex items-center space-x-3 px-4 py-3 hover:bg-green-50 transition-colors duration-200 text-gray-700 hover:text-green-700 border-b border-gray-50 last:border-b-0"
    >
      <Icon className="h-4 w-4 text-green-600 flex-shrink-0" />
      <span className="text-sm">{children}</span>
    </a>
  );

  return (
    <nav className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 shadow-xl sticky top-0 z-50">
      {/* Top Information Bar */}
      <div className="bg-green-800/40 backdrop-blur-sm border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0">
              <span className="flex items-center space-x-2 text-green-100 text-xs sm:text-sm">
                <User2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="font-medium">Welcome, Farmer Portal</span>
              </span>
              <span className="text-green-100 text-xs sm:text-sm hidden md:block">
                Last Login: Today, 09:30 AM
              </span>
            </div>
            <div className="flex items-center justify-between sm:justify-end space-x-4">
              <span className="text-green-100 text-xs sm:text-sm">
                Status: <span className="text-amber-200 font-medium">Active</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="bg-white/15 backdrop-blur-sm p-2 sm:p-2.5 lg:p-3 rounded-xl border border-white/20 shadow-lg">
              <div className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-amber-200" />
            </div>
            <div className="text-white min-w-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight truncate">
                FarmerDashboard
              </h1>
              <p className="text-xs sm:text-sm text-green-100 hidden sm:block lg:block truncate">
                <span className="hidden lg:inline">Agricultural Management System</span>
                <span className="lg:hidden">Farm Management</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2 flex-1 justify-center max-w-3xl mx-8">
            {dashboardSections.map((section, index) => (
              <NavLink key={index} href={section.href} active={section.active}>
                <div className="flex items-center space-x-2">
                  <section.icon className="h-4 w-4" />
                  <span>{section.name}</span>
                </div>
              </NavLink>
            ))}
            
            {/* Reports Dropdown */}
            <div className="relative" ref={reportsRef}>
              <button
                onClick={() => setShowReportsDropdown(!showReportsDropdown)}
                className="flex items-center space-x-1 text-white hover:text-amber-200 transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-white/10"
              >
                <div className="h-4 w-4" />
                <span>Reports</span>
                <ChevronDown className={`h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-200 ${showReportsDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showReportsDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-semibold text-gray-800 text-sm">Report Management</h3>
                  </div>
                  {reports.map((report, index) => (
                    <DropdownItem key={index} icon={report.icon} href={report.href}>
                      {report.name}
                    </DropdownItem>
                  ))}
                </div>
              )}
            </div>

            {/* Tools Dropdown */}
            <div className="relative" ref={toolsRef}>
              <button
                onClick={() => setShowToolsDropdown(!showToolsDropdown)}
                className="flex items-center space-x-1 text-white hover:text-amber-200 transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-white/10"
              >
                <div className="h-4 w-4" />
                <span>Tools</span>
                <ChevronDown className={`h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-200 ${showToolsDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showToolsDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-semibold text-gray-800 text-sm">Farmer Tools</h3>
                  </div>
                  {tools.map((tool, index) => (
                    <DropdownItem key={index} icon={tool.icon} href={tool.href}>
                      {tool.name}
                    </DropdownItem>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
            {/* Search Bar */}
            <div className="hidden lg:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-200" />
                <input
                  type="text"
                  placeholder="Search reports, tools..."
                  className="w-48 xl:w-64 pl-10 pr-4 py-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 text-sm"
                />
              </div>
            </div>

            {/* Search Icon for medium screens */}
            <button className="lg:hidden bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all duration-200 p-2 sm:p-2.5 rounded-lg border border-white/20">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all duration-200 p-2 sm:p-2.5 rounded-lg border border-white/20 group"
              >
                <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-amber-200" />
                {unreadCount > 0 && (
                  <>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
                      {unreadCount}
                    </span>
                    <span className="absolute -top-1 -right-1 bg-red-400 rounded-full h-4 w-4 sm:h-5 sm:w-5 animate-ping"></span>
                  </>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800 text-sm">Feedback Notifications</h3>
                      <span className="text-xs text-gray-500">{unreadCount} new</span>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 transition-colors duration-200 ${
                          notification.unread ? 'border-l-green-500 bg-green-50/30' : 'border-l-transparent'
                        }`}
                      >
                        <p className="text-sm text-gray-800 mb-1 font-medium leading-snug">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/30">
                    <button className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative" ref={userRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all duration-200 p-2 sm:p-2.5 rounded-lg border border-white/20 group"
              >
                <UserCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-amber-200" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <p className="text-sm font-semibold text-gray-800">John Farmer</p>
                    <p className="text-xs text-gray-500">farmer@example.com</p>
                  </div>
                  <a href="#profile" className="flex items-center space-x-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50">
                    <div className="h-4 w-4" />
                    <span>Profile Summary</span>
                  </a>
                  <a href="#settings" className="flex items-center space-x-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                  <a href="#logout" className="flex items-center space-x-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </a>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-all duration-200 p-2 sm:p-2.5 rounded-lg border border-white/20"
              >
                {showMobileMenu ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="xl:hidden bg-white/10 backdrop-blur-sm rounded-xl mt-3 mb-4 border border-white/20 overflow-hidden">
            {/* Mobile Search */}
            <div className="p-4 border-b border-white/20">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-200" />
                <input
                  type="text"
                  placeholder="Search dashboard, reports, tools..."
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-amber-400/50 text-sm"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="p-2">
              <div className="space-y-1">
                {dashboardSections.map((section, index) => (
                  <a key={index} href={section.href} className={`flex items-center space-x-2 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium ${section.active ? 'bg-white/15 text-amber-200' : 'text-white'}`}>
                    <section.icon className="h-4 w-4" />
                    <span>{section.name}</span>
                  </a>
                ))}
                
                {/* Mobile Reports Section */}
                <div className="px-4 py-2">
                  <p className="text-amber-200 font-semibold text-sm mb-2">Reports</p>
                  <div className="space-y-1 ml-2">
                    {reports.map((report, index) => (
                      <a key={index} href={report.href} className="flex items-center space-x-2 px-3 py-2 text-white/90 hover:bg-white/10 rounded-md transition-colors duration-200 text-sm">
                        <report.icon className="h-4 w-4" />
                        <span>{report.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Tools Section */}
                <div className="px-4 py-2">
                  <p className="text-amber-200 font-semibold text-sm mb-2">Tools</p>
                  <div className="space-y-1 ml-2">
                    {tools.map((tool, index) => (
                      <a key={index} href={tool.href} className="flex items-center space-x-2 px-3 py-2 text-white/90 hover:bg-white/10 rounded-md transition-colors duration-200 text-sm">
                        <tool.icon className="h-4 w-4" />
                        <span>{tool.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FarmerDashboardNavbar;