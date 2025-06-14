import {
  Shield,
  Menu,
  X,
  Search,
  Bell,
  ChevronDown,
  Home,
  Users,
  UserPlus,
  FileImage,
  BarChart3,
  Eye,
  Mail,
  Database,
  UserCircle,
  LogOut,
  Activity,
  AlertCircle,
  Wheat,
  MapPin,
  Phone,
  Globe,
  Clock,
  Settings,
  Languages,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

interface Notification {
  id: number;
  message: string;
  time: string;
  unread: boolean;
  type: "registration" | "crops" | "report" | "system";
}

interface ManagementItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  active?: boolean;
}

const GovernmentAgricultureNavbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showFarmersDropdown, setShowFarmersDropdown] = useState(false);
  const [showCropsDropdown, setShowCropsDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "kn">("en");
  const [currentTime, setCurrentTime] = useState(new Date());

  const farmersRef = useRef<HTMLDivElement | null>(null);
  const cropsRef = useRef<HTMLDivElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const userRef = useRef<HTMLDivElement | null>(null);
  const languageRef = useRef<HTMLDivElement | null>(null);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Translations object
  const translations = {
    en: {
      // Header
      govKarnataka: "Government of Karnataka",
      deptAgriculture: "Department of Agriculture",
      status: "Status",
      active: "Active",
      helpline: "Helpline: 1800-xxx-xxxx",

      // Navigation
      dashboard: "Dashboard",
      analytics: "Analytics",
      reports: "Reports",
      farmerManagement: "Farmer Management",
      cropManagement: "Crop Management",

      // Farmer Management
      farmerRegistration: "Farmer Registration",
      farmerDirectory: "Farmer Directory",
      digitalCards: "Digital Identity Cards",
      farmerAnalytics: "Farmer Analytics",
      supportRequests: "Support Requests",
      farmerMgmtDesc: "Manage farmer registrations and services",

      // Crop Management
      cropMonitoring: "Crop Monitoring",
      diseaseDetection: "Disease Detection",
      yieldPredictions: "Yield Predictions",
      marketPrices: "Market Prices",
      weatherAdvisory: "Weather Advisory",
      cropMgmtDesc: "Monitor crops and agricultural data",

      // Notifications
      notifications: "Notifications",
      unreadMessages: "unread messages",
      newFarmerReg: "New farmer registration: Ramesh Kumar from Koratagere",
      cropDisease: "Crop disease detection: 5 new cases reported",
      monthlyReport: "Monthly agricultural report generated",
      systemMaintenance: "System maintenance scheduled for tonight",

      // User Menu
      administrator: "Admin",
      profileSettings: "Profile Settings",
      systemSettings: "System Settings",
      logout: "Logout",

      // Search
      // search: "Search...",

      // Language
      language: "Language",
      english: "English",
      kannada: "ಕನ್ನಡ",
    },
    kn: {
      // Header
      govKarnataka: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
      deptAgriculture: "ಕೃಷಿ ಇಲಾಖೆ",
      status: "ಸ್ಥಿತಿ",
      active: "ಸಕ್ರಿಯ",
      helpline: "ಸಹಾಯವಾಣಿ: 1800-xxx-xxxx",

      // Navigation
      dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      analytics: "ವಿಶ್ಲೇಷಣೆ",
      reports: "ವರದಿಗಳು",
      farmerManagement: "ರೈತ ನಿರ್ವಹಣೆ",
      cropManagement: "ಬೆಳೆ ನಿರ್ವಹಣೆ",

      // Farmer Management
      farmerRegistration: "ರೈತ ನೋಂದಣಿ",
      farmerDirectory: "ರೈತ ಡೈರೆಕ್ಟರಿ",
      digitalCards: "ಡಿಜಿಟಲ್ ಗುರುತಿನ ಕಾರ್ಡ್‌ಗಳು",
      farmerAnalytics: "ರೈತ ವಿಶ್ಲೇಷಣೆ",
      supportRequests: "ಸಹಾಯ ಅರ್ಜಿಗಳು",
      farmerMgmtDesc: "ರೈತ ನೋಂದಣಿ ಮತ್ತು ಸೇವೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",

      // Crop Management
      cropMonitoring: "ಬೆಳೆ ಮೇಲ್ವಿಚಾರಣೆ",
      diseaseDetection: "ರೋಗ ಪತ್ತೆ",
      yieldPredictions: "ಇಳುವರಿ ಭವಿಷ್ಯವಾಣಿ",
      marketPrices: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
      weatherAdvisory: "ಹವಾಮಾನ ಸಲಹೆ",
      cropMgmtDesc: "ಬೆಳೆಗಳು ಮತ್ತು ಕೃಷಿ ಮಾಹಿತಿಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",

      // Notifications
      notifications: "ಅಧಿಸೂಚನೆಗಳು",
      unreadMessages: "ಓದದ ಸಂದೇಶಗಳು",
      newFarmerReg: "ಹೊಸ ರೈತ ನೋಂದಣಿ: ಕೊರಟಗೆರೆಯಿಂದ ರಮೇಶ್ ಕುಮಾರ್",
      cropDisease: "ಬೆಳೆ ರೋಗ ಪತ್ತೆ: 5 ಹೊಸ ಪ್ರಕರಣಗಳು ವರದಿಯಾಗಿವೆ",
      monthlyReport: "ಮಾಸಿಕ ಕೃಷಿ ವರದಿ ರಚಿಸಲಾಗಿದೆ",
      systemMaintenance: "ಇಂದು ರಾತ್ರಿ ಸಿಸ್ಟಮ್ ನಿರ್ವಹಣೆ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ",

      // User Menu
      administrator: "ನಿರ್ವಾಹಕ",
      profileSettings: "ಪ್ರೊಫೈಲ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
      systemSettings: "ಸಿಸ್ಟಮ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
      logout: "ಲಾಗ್ ಔಟ್",

      // Search
      // search: "ಹುಡುಕಿ...",

      // Language
      language: "ಭಾಷೆ",
      english: "English",
      kannada: "ಕನ್ನಡ",
    },
  };

  const t = translations[currentLanguage];

  const notifications: Notification[] = [
    {
      id: 1,
      message: t.newFarmerReg,
      time: "10 minutes ago",
      unread: true,
      type: "registration",
    },
    {
      id: 2,
      message: t.cropDisease,
      time: "25 minutes ago",
      unread: true,
      type: "crops",
    },
    {
      id: 3,
      message: t.monthlyReport,
      time: "2 hours ago",
      unread: false,
      type: "report",
    },
    {
      id: 4,
      message: t.systemMaintenance,
      time: "4 hours ago",
      unread: false,
      type: "system",
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  const farmerManagement: ManagementItem[] = [
    {
      name: t.farmerRegistration,
      icon: UserPlus,
      href: "#farmer-registration",
    },
    { name: t.farmerDirectory, icon: Users, href: "#farmer-directory" },
    { name: t.digitalCards, icon: Mail, href: "#digital-cards" },
    { name: t.farmerAnalytics, icon: Activity, href: "#farmer-analytics" },
    { name: t.supportRequests, icon: AlertCircle, href: "#support-requests" },
  ];

  const cropManagement: ManagementItem[] = [
    { name: t.cropMonitoring, icon: Eye, href: "#crop-monitoring" },
    { name: t.diseaseDetection, icon: AlertCircle, href: "#disease-detection" },
    { name: t.yieldPredictions, icon: BarChart3, href: "#yield-predictions" },
    { name: t.marketPrices, icon: Database, href: "#market-prices" },
    { name: t.weatherAdvisory, icon: Globe, href: "#weather-advisory" },
  ];

  const dashboardSections: NavItem[] = [
    { name: t.dashboard, icon: Home, href: "#dashboard", active: true },
    { name: t.analytics, icon: BarChart3, href: "#analytics" },
    { name: t.reports, icon: FileImage, href: "#reports" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        farmersRef.current &&
        !farmersRef.current.contains(event.target as Node)
      ) {
        setShowFarmersDropdown(false);
      }
      if (
        cropsRef.current &&
        !cropsRef.current.contains(event.target as Node)
      ) {
        setShowCropsDropdown(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavLink: React.FC<{
    href: string;
    children: React.ReactNode;
    active?: boolean;
  }> = ({ href, children, active = false }) => (
    <a
      href={href}
      className={`text-white hover:text-orange-200 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/15 ${
        active ? "bg-white/20 text-orange-200 shadow-lg" : ""
      }`}
    >
      {children}
    </a>
  );

  const DropdownItem: React.FC<{
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    children: React.ReactNode;
  }> = ({ icon: Icon, href, children }) => (
    <a
      href={href}
      className="flex items-center space-x-3 px-4 py-3 hover:bg-green-50 transition text-gray-700 hover:text-green-700 border-b last:border-b-0 group"
    >
      <Icon className="h-4 w-4 text-green-600 flex-shrink-0 group-hover:text-green-700 transition-colors" />
      <span className="text-sm font-medium">{children}</span>
    </a>
  );

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "registration":
        return UserPlus;
      case "crops":
        return Wheat;
      case "report":
        return BarChart3;
      default:
        return AlertCircle;
    }
  };

  const handleLanguageChange = (lang: "en" | "kn") => {
    setCurrentLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <nav className="bg-gradient-to-r from-green-800 via-green-700 to-orange-600 shadow-2xl sticky top-0 z-50">
      {/* Top Government Header */}
      <div className="bg-green-900/20 backdrop-blur-sm border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-4 text-green-100 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-orange-300" />
                <span className="font-semibold">{t.govKarnataka}</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-3 w-3" />
                <span>{t.deptAgriculture}</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-green-100 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-300" />
                <span>
                  {currentTime.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Asia/Kolkata",
                  })}
                </span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>
                  {t.status}:{" "}
                  <span className="text-green-300 font-medium">{t.active}</span>
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>{t.helpline}</span>
              </div>
              {/* Language Selector */}
             <div className="flex items-center space-x-2 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-600">
                <Languages className="h-4 w-4 text-amber-300" />
                <span className="text-amber-100 text-sm font-medium mr-2">
                  {t.language}:
                </span>

                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`px-3 py-1 rounded-md text-sm font-bold transition-all duration-200 ${
                    currentLanguage === "en"
                      ? "bg-amber-600 text-white shadow-md"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  EN
                </button>

                <button
                  onClick={() => handleLanguageChange("kn")}
                  className={`px-3 py-1 rounded-md text-sm font-bold transition-all duration-200 ${
                    currentLanguage === "kn"
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  ಕನ್ನಡ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {dashboardSections.map((section, index) => (
              <NavLink key={index} href={section.href} active={section.active}>
                <div className="flex items-center space-x-2">
                  <section.icon className="h-4 w-4" />
                  <span>{section.name}</span>
                </div>
              </NavLink>
            ))}

            {/* Farmers Management Dropdown */}
            <div className="relative" ref={farmersRef}>
              <button
                onClick={() => setShowFarmersDropdown(!showFarmersDropdown)}
                className="flex items-center space-x-2 text-white font-medium px-4 py-2 rounded-lg hover:bg-white/15 transition-all duration-300 group"
              >
                <Users className="h-4 w-4 group-hover:text-orange-200" />
                <span>{t.farmerManagement}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showFarmersDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showFarmersDropdown && (
                <div className="absolute left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b bg-gradient-to-r from-green-50 to-orange-50">
                    <h3 className="text-base font-bold text-gray-800 flex items-center space-x-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span>{t.farmerManagement}</span>
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {t.farmerMgmtDesc}
                    </p>
                  </div>
                  {farmerManagement.map((item, index) => (
                    <DropdownItem key={index} icon={item.icon} href={item.href}>
                      {item.name}
                    </DropdownItem>
                  ))}
                </div>
              )}
            </div>

            {/* Crop Management Dropdown */}
            <div className="relative" ref={cropsRef}>
              <button
                onClick={() => setShowCropsDropdown(!showCropsDropdown)}
                className="flex items-center space-x-2 text-white font-medium px-4 py-2 rounded-lg hover:bg-white/15 transition-all duration-300 group"
              >
                <span>{t.cropManagement}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showCropsDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showCropsDropdown && (
                <div className="absolute left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b bg-gradient-to-r from-green-50 to-orange-50">
                    <h3 className="text-base font-bold text-gray-800 flex items-center space-x-2">
                      <Wheat className="h-4 w-4 text-green-600" />
                      <span>{t.cropManagement}</span>
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {t.cropMgmtDesc}
                    </p>
                  </div>
                  {cropManagement.map((item, index) => (
                    <DropdownItem key={index} icon={item.icon} href={item.href}>
                      {item.name}
                    </DropdownItem>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search (Desktop) */}
            {/* <div className="hidden lg:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-200" />
              <input
                type="text"
                placeholder={t.search}
                className="pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-green-100 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-white/25 transition-all"
              />
            </div> */}

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-white hover:bg-white/15 rounded-lg transition-all duration-300"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b bg-gradient-to-r from-blue-50 to-green-50">
                    <h3 className="text-base font-bold text-gray-800">
                      {t.notifications}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {unreadCount} {t.unreadMessages}
                    </p>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => {
                      const Icon = getNotificationIcon(notification.type);
                      return (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 ${
                            notification.unread ? "bg-blue-50/50" : ""
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <Icon className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-800 font-medium">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {notification.time}
                              </p>
                            </div>
                            {notification.unread && (
                              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative" ref={userRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 bg-white/15 hover:bg-white/25 px-3 py-2 rounded-lg transition-all duration-300 border border-white/20"
              >
                <UserCircle className="h-5 w-5 text-orange-200" />
                <span className="text-white text-sm font-medium hidden md:inline">
                  {t.administrator}
                </span>
                <ChevronDown className="h-3 w-3 text-white" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b bg-gradient-to-r from-green-50 to-orange-50">
                    <p className="text-sm font-bold text-gray-800">
                      {t.administrator}
                    </p>
                    <p className="text-xs text-gray-600">admin@krishi.gov.in</p>
                  </div>
                  <a
                    href="#profile"
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-gray-700"
                  >
                    <UserCircle className="h-4 w-4" />
                    <span className="text-sm">{t.profileSettings}</span>
                  </a>
                  <a
                    href="#settings"
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-gray-700"
                  >
                    <Settings className="h-4 w-4" />
                    <span className="text-sm">{t.systemSettings}</span>
                  </a>
                  <hr className="my-1" />
                  <a
                    href="D:\prajwal\sahaja_krushi_1.0\Sahaja_Krushi\src\pages\auth\Login.tsx"
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-red-50 text-red-600"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm">{t.logout}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}   
            
            <div className="xl:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-white p-2 rounded-lg hover:bg-white/15 transition-all"
              >
                {showMobileMenu ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="xl:hidden bg-white/10 backdrop-blur-lg rounded-2xl mt-4 border border-white/20 p-4 animate-in slide-in-from-top duration-300">
            {/* Mobile Search */}
            {/* <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-200" />
              <input
                type="text"
                placeholder="खोजें..."
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div> */}

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {dashboardSections.map((section, index) => (
                <a
                  key={index}
                  href={section.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    section.active
                      ? "bg-white/20 text-orange-200 shadow-lg"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <section.icon className="h-5 w-5" />
                  <span>{section.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GovernmentAgricultureNavbar;
