import { 
  Wheat, 
  Menu, 
  X, 
  Search, 
  Bell, 
  User, 
  ChevronDown,
  Sprout,
  Tractor,
  BookOpen,
  Phone,
  Globe,
  FileText
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const AgricultureNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const servicesRef = useRef(null);
  const resourcesRef = useRef(null);
  const notificationRef = useRef(null);
  const userRef = useRef(null);

  // Mock data
  const notifications = [
    { id: 1, message: "New agricultural subsidy program launched", time: "2 hours ago", unread: true },
    { id: 2, message: "Weather advisory: Heavy rainfall alert", time: "4 hours ago", unread: true },
    { id: 3, message: "Crop insurance deadline reminder", time: "1 day ago", unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  // Services dropdown items
  const services = [
    { name: "Crop Management", icon: Sprout, href: "#" },
    { name: "Equipment & Machinery", icon: Tractor, href: "#" },
    { name: "Soil Testing", icon: Globe, href: "#" },
    { name: "Agricultural Loans", icon: FileText, href: "#" },
  ];

  // Resources dropdown items
  const resources = [
    { name: "Research Publications", icon: BookOpen, href: "#" },
    { name: "Farming Guides", icon: FileText, href: "#" },
    { name: "Weather Updates", icon: Globe, href: "#" },
    { name: "Market Prices", icon: Wheat, href: "#" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setShowResourcesDropdown(false);
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

  const NavLink = ({ href, children, onClick, className = "" }) => (
    <a 
      href={href} 
      onClick={onClick}
      className={`text-white hover:text-amber-200 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-white/10 ${className}`}
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
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="font-medium">Helpline: 1800-XXX-XXXX</span>
              </span>
              <span className="text-green-100 text-xs sm:text-sm hidden md:block">
                Ministry of Agriculture & Farmers Welfare
              </span>
            </div>
            <div className="flex items-center justify-between sm:justify-end space-x-4">
              <select className="bg-transparent text-green-100 text-xs sm:text-sm border border-green-500/30 rounded px-2 py-1 outline-none cursor-pointer hover:bg-green-700/30 transition-colors duration-200">
                <option value="en" className="bg-green-700 text-white">English</option>
                <option value="hi" className="bg-green-700 text-white">हिंदी</option>
              </select>
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
              <Wheat className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-amber-200" />
            </div>
            <div className="text-white min-w-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight truncate">
                AgroGov
              </h1>
              <p className="text-xs sm:text-sm text-green-100 hidden sm:block lg:block truncate">
                <span className="hidden lg:inline">Ministry of Agriculture & Farmers Welfare</span>
                <span className="lg:hidden">Agriculture Ministry</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2 flex-1 justify-center max-w-2xl mx-8">
            <NavLink href="/">Home</NavLink>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                className="flex items-center space-x-1 text-white hover:text-amber-200 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-white/10"
              >
                <span>Services</span>
                <ChevronDown className={`h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-200 ${showServicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showServicesDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-semibold text-gray-800 text-sm">Our Services</h3>
                  </div>
                  {services.map((service, index) => (
                    <DropdownItem key={index} icon={service.icon} href={service.href}>
                      {service.name}
                    </DropdownItem>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setShowResourcesDropdown(!showResourcesDropdown)}
                className="flex items-center space-x-1 text-white hover:text-amber-200 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-white/10"
              >
                <span>Resources</span>
                <ChevronDown className={`h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-200 ${showResourcesDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showResourcesDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-semibold text-gray-800 text-sm">Resources</h3>
                  </div>
                  {resources.map((resource, index) => (
                    <DropdownItem key={index} icon={resource.icon} href={resource.href}>
                      {resource.name}
                    </DropdownItem>
                  ))}
                </div>
              )}
            </div>

            <NavLink href="/schemes">Schemes</NavLink>
            <NavLink href="/news">News</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
            {/* Search Bar */}
            <div className="hidden lg:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-200" />
                <input
                  type="text"
                  placeholder="Search schemes, news..."
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
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-semibold text-gray-800 text-sm">Notifications</h3>
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
                <User className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-amber-200" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-50">
                  <a href="/login" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50">
                    Login
                  </a>
                  <a href="/register" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50">
                    Register
                  </a>
                  <a href="/farmer-portal" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    Farmer Portal
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
                  placeholder="Search schemes, news, services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-amber-400/50 text-sm"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="p-2">
              <div className="space-y-1">
                <a href="/" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium">
                  Home
                </a>
                
                {/* Mobile Services Section */}
                <div className="px-4 py-2">
                  <p className="text-amber-200 font-semibold text-sm mb-2">Services</p>
                  <div className="space-y-1 ml-2">
                    {services.map((service, index) => (
                      <a key={index} href={service.href} className="flex items-center space-x-2 px-3 py-2 text-white/90 hover:bg-white/10 rounded-md transition-colors duration-200 text-sm">
                        <service.icon className="h-4 w-4" />
                        <span>{service.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Resources Section */}
                <div className="px-4 py-2">
                  <p className="text-amber-200 font-semibold text-sm mb-2">Resources</p>
                  <div className="space-y-1 ml-2">
                    {resources.map((resource, index) => (
                      <a key={index} href={resource.href} className="flex items-center space-x-2 px-3 py-2 text-white/90 hover:bg-white/10 rounded-md transition-colors duration-200 text-sm">
                        <resource.icon className="h-4 w-4" />
                        <span>{resource.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <a href="/schemes" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium">
                  Schemes
                </a>
                <a href="/news" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium">
                  News
                </a>
                <a href="/contact" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium">
                  Contact
                </a>
              </div>
              
              <hr className="my-3 border-white/20" />
              
              <div className="space-y-1">
                <a href="/login" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium">
                  Login
                </a>
                <a href="/farmer-portal" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium">
                  Farmer Portal
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AgricultureNavbar;