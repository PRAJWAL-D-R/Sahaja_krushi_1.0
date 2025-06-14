import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield, Mail, Lock, Eye, EyeOff, CheckCircle,
  AlertCircle, Wheat
} from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate(); // ✅ navigation hook

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    adminCode: "",
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loginStatus, setLoginStatus] = useState<"success" | "error" | null>(null);

  const ADMIN_CREDENTIALS = {
    email: "admin@agriconnect.com",
    password: "Admin@2024",
    adminCode: "AC2024"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.adminCode) newErrors.adminCode = "Admin access code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    setLoginStatus(null);

    await new Promise(resolve => setTimeout(resolve, 1500)); // simulate API call

    const isValid =
      formData.email === ADMIN_CREDENTIALS.email &&
      formData.password === ADMIN_CREDENTIALS.password &&
      formData.adminCode === ADMIN_CREDENTIALS.adminCode;

    if (isValid) {
      setLoginStatus("success");
      setTimeout(() => {
        navigate("/admin/home");
      }, 1000);
    } else {
      setLoginStatus("error");
      setErrors({
        general: "Invalid credentials. Please check your email, password, and admin code."
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Kannada Panel */}
      <div className="w-1/2 relative bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 text-white flex flex-col items-center justify-center px-10">
        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
          <Wheat className="w-12 h-12 text-yellow-300" />
        </div>
        <h1 className="text-4xl font-bold mb-2">ಕೃಷಿ ಇಲಾಖೆ</h1>
        <p className="text-xl text-green-100 mb-2">ಭಾರತ ಸರ್ಕಾರ</p>
        <p className="text-green-200 text-sm mb-4">ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ರೈತರ ಸಬಲೀಕರಣ</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-md text-center text-sm text-green-100">
          "ಸ್ಥಿರ ಕೃಷಿ ವಿಧಾನಗಳ ಮೂಲಕ ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ರೈತರ ಬಾಳಮನಸ್ಸು ಸುಧಾರಣೆ"
        </div>
        <div className="mt-6 flex items-center text-sm text-green-200">
          <Shield className="w-4 h-4 mr-2" />
          ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ ಪ್ರಸ್ತುತಪಡಿಸುತ್ತದೆ
        </div>
      </div>

      {/* Right - Login */}
      <div className="w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-full text-white mb-3 shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Admin Portal</h2>
            <p className="text-gray-600 text-xs">Access your admin dashboard</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="admin@agriconnect.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Admin Code</label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="adminCode"
                  value={formData.adminCode}
                  onChange={handleInputChange}
                  placeholder="Access code"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              {errors.adminCode && <p className="text-xs text-red-600 mt-1">{errors.adminCode}</p>}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-xs text-gray-700">Remember me</label>
            </div>

            {errors.general && (
              <p className="text-xs text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.general}
              </p>
            )}

            {loginStatus === "success" && (
              <p className="text-xs text-green-600 flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Login successful! Redirecting...
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all text-sm font-semibold"
            >
              {isLoading ? "Authenticating..." : "Access Dashboard"}
            </button>
          </div>

          <div className="text-center mt-6 text-xs text-gray-400">
            &copy; 2024 ಕೃಷಿ ಇಲಾಖೆ, ಭಾರತ ಸರ್ಕಾರ.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
