import { useState } from "react";
import type { ChangeEvent } from "react";
import {
  Eye,
  EyeOff,
  Leaf,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Shield,
  ArrowLeft,
  Tractor,
  Sun,
  Droplets,
} from "lucide-react";
import {
  validateLogin,
  validateSignup,
  validateAdminLogin,
  type SignupFormData,
  type LoginFormData,
  type AdminFormData,
} from "../../lib/validation/Auth";
import SuccessModal from "../../components/SuccessModel";
import ErrorModal from "../../components/ErrorModal";
import PasswordField from "../../components/PasswordField";
import InputField from "../../components/InputField";
import ButtonPrimary from "../../components/ButtonPrimary";
import bgImage from "../../assets/login.jpg";

interface FormErrors {
  [key: string]: string;
}

const Login = () => {
  const [currentPage, setCurrentPage] = useState<"login" | "signup" | "admin">(
    "login"
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Login form state
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Signup form state
  const [signupData, setSignupData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    farmSize: "",
    cropTypes: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  // Admin login state
  const [adminData, setAdminData] = useState<AdminFormData>({
    email: "",
    password: "",
    adminCode: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    formType: "login" | "signup" | "admin"
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (formType === "login") {
      setLoginData((prev: LoginFormData) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else if (formType === "signup") {
      setSignupData((prev: SignupFormData) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else if (formType === "admin") {
      setAdminData((prev: AdminFormData) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

    // Clear error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (formType: "login" | "signup" | "admin"): boolean => {
    const newErrors: FormErrors = {};

    if (formType === "login") {
      const result = validateLogin(loginData);
      if (!result.success) {
        result.error.errors.forEach((err) => {
          const path = err.path[0];
          if (typeof path === "string") {
            newErrors[path] = err.message;
          }
        });
      }
    } else if (formType === "signup") {
      const result = validateSignup(signupData);
      if (!result.success) {
        result.error.errors.forEach((err) => {
          const path = err.path[0];
          if (typeof path === "string") {
            newErrors[path] = err.message;
          }
        });
      }
    } else if (formType === "admin") {
      const result = validateAdminLogin(adminData);
      if (!result.success) {
        result.error.errors.forEach((err) => {
          const path = err.path[0];
          if (typeof path === "string") {
            newErrors[path] = err.message;
          }
        });
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    formType: "login" | "signup" | "admin"
  ): Promise<void> => {
    setIsLoading(true);

    if (!validateForm(formType)) {
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setShowSuccess(true);

      // Reset form after successful submission
      if (formType === "login") {
        setLoginData({ email: "", password: "", rememberMe: false });
      } else if (formType === "signup") {
        setSignupData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          farmSize: "",
          cropTypes: "",
          password: "",
          confirmPassword: "",
          agreeToTerms: false,
        });
      } else {
        setAdminData({
          email: "",
          password: "",
          adminCode: "",
          rememberMe: false,
        });
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Half - Background Image */}
      <div className="flex-1 relative">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/60"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-28 h-28 bg-green-300 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          ></div>
        </div>

        {/* Content Overlay on Image */}
        {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-10">
          <div className="text-center max-w-md">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-2xl">
              <Leaf className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              AgriConnect
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Connecting farmers with modern agricultural solutions for
              sustainable farming and better yields.
            </p>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center justify-center gap-3">
                <Tractor className="h-5 w-5" />
                <span>Smart Farm Management</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Leaf className="h-5 w-5" />
                <span>Crop Monitoring & Analytics</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="h-5 w-5" />
                <span>Secure & Reliable Platform</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Right Half - Form */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-[440px]">
          {/* Login Form */}
          {currentPage === "login" && (
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-3 shadow-lg">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Welcome Back
                </h2>
                <p className="text-sm text-gray-600">Sign in to AgriConnect</p>
              </div>

              <div className="space-y-4">
                <InputField
                  icon={Mail}
                  label="Email"
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => handleInputChange(e, "login")}
                  placeholder="farmer@example.com"
                  error={errors.email}
                  required
                />

                <PasswordField
                  label="Password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, "login")}
                  placeholder="Enter password"
                  error={errors.password}
                  showPassword={showPassword}
                  togglePassword={() => setShowPassword(!showPassword)}
                  required
                />

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      name="rememberMe"
                      checked={loginData.rememberMe}
                      onChange={(e) => handleInputChange(e, "login")}
                      className="h-3 w-3 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Forgot?
                  </button>
                </div>

                <ButtonPrimary
                  isLoading={isLoading}
                  onClick={() => handleSubmit("login")}
                >
                  <Tractor className="h-4 w-4" />
                  Sign In
                </ButtonPrimary>
              </div>

              <div className="mt-4 text-center space-y-3">
                <p className="text-xs text-gray-600">
                  New to AgriConnect?{" "}
                  <button
                    onClick={() => setCurrentPage("signup")}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Create Account
                  </button>
                </p>

                <button
                  onClick={() => setCurrentPage("admin")}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 text-gray-700 text-xs rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                  <Shield className="h-3 w-3" />
                  Admin Login
                </button>
              </div>
            </div>
          )}

          {/* Signup Form */}
          {currentPage === "signup" && (
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 max-h-[90vh] overflow-y-auto">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-2 shadow-lg">
                  <User className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  Join AgriConnect
                </h2>
                <p className="text-xs text-gray-600">Create farmer account</p>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <InputField
                    icon={User}
                    label="First Name"
                    name="firstName"
                    value={signupData.firstName}
                    onChange={(e) => handleInputChange(e, "signup")}
                    placeholder="John"
                    error={errors.firstName}
                    required
                  />
                  <InputField
                    icon={User}
                    label="Last Name"
                    name="lastName"
                    value={signupData.lastName}
                    onChange={(e) => handleInputChange(e, "signup")}
                    placeholder="Doe"
                    error={errors.lastName}
                    required
                  />
                </div>

                <InputField
                  icon={Mail}
                  label="Email"
                  name="email"
                  type="email"
                  value={signupData.email}
                  onChange={(e) => handleInputChange(e, "signup")}
                  placeholder="prajwal@example.com"
                  error={errors.email}
                  required
                />

                <div className="grid grid-cols-2 gap-2">
                  <InputField
                    icon={Phone}
                    label="Phone"
                    name="phone"
                    value={signupData.phone}
                    onChange={(e) => handleInputChange(e, "signup")}
                    placeholder="+1234567890"
                    error={errors.phone}
                    required
                  />
                  <InputField
                    icon={MapPin}
                    label="Location"
                    name="location"
                    value={signupData.location}
                    onChange={(e) => handleInputChange(e, "signup")}
                    placeholder="City, State"
                    error={errors.location}
                    required
                  />
                </div>

                {/* <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-gray-700">
                      Farm Size <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Tractor className="h-4 w-4 text-gray-400" />
                      </div>
                      <select
                        name="farmSize"
                        value={signupData.farmSize}
                        onChange={(e) => handleInputChange(e, "signup")}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Size</option>
                        <option value="1-10">1-10 acres</option>
                        <option value="11-50">11-50 acres</option>
                        <option value="51-100">51-100 acres</option>
                        <option value="100+">100+ acres</option>
                      </select>
                    </div>
                  </div>

                  <InputField
                    icon={Leaf}
                    label="Crops"
                    name="cropTypes"
                    value={signupData.cropTypes}
                    onChange={(e) => handleInputChange(e, "signup")}
                    placeholder="Wheat, Corn"
                    error={errors.cropTypes}
                    required
                  />
                </div> */}

                <PasswordField
                  label="Password"
                  name="password"
                  value={signupData.password}
                  onChange={(e) => handleInputChange(e, "signup")}
                  placeholder="Create password"
                  error={errors.password}
                  showPassword={showPassword}
                  togglePassword={() => setShowPassword(!showPassword)}
                  required
                />

                <PasswordField
                  label="Confirm"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={(e) => handleInputChange(e, "signup")}
                  placeholder="Confirm password"
                  error={errors.confirmPassword}
                  showPassword={showConfirmPassword}
                  togglePassword={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  required
                />

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    name="agreeToTerms"
                    checked={signupData.agreeToTerms}
                    onChange={(e) => handleInputChange(e, "signup")}
                    className="h-3 w-3 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I agree to{" "}
                    <a
                      href="#"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Terms & Privacy
                    </a>
                  </label>
                </div>

                <ButtonPrimary
                  isLoading={isLoading}
                  onClick={() => handleSubmit("signup")}
                >
                  <User className="h-4 w-4" />
                  Create Account
                </ButtonPrimary>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-600">
                  Have an account?{" "}
                  <button
                    onClick={() => setCurrentPage("login")}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          )}

          {/* Admin Login Form */}
          {currentPage === "admin" && (
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 relative">
              <button
                onClick={() => setCurrentPage("login")}
                className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full mb-3 shadow-lg">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Admin Access
                </h2>
                <p className="text-sm text-gray-600">Administrative portal</p>
              </div>

              <div className="space-y-4">
                <InputField
                  icon={Mail}
                  label="Admin Email"
                  name="email"
                  type="email"
                  value={adminData.email}
                  onChange={(e) => handleInputChange(e, "admin")}
                  placeholder="admin@agriconnect.com"
                  error={errors.email}
                  required
                />

                <PasswordField
                  label="Password"
                  name="password"
                  value={adminData.password}
                  onChange={(e) => handleInputChange(e, "admin")}
                  placeholder="Admin password"
                  error={errors.password}
                  showPassword={showPassword}
                  togglePassword={() => setShowPassword(!showPassword)}
                  required
                />

                <InputField
                  icon={Shield}
                  label="Access Code"
                  name="adminCode"
                  value={adminData.adminCode}
                  onChange={(e) => handleInputChange(e, "admin")}
                  placeholder="6-digit code"
                  error={errors.adminCode}
                  required
                />

                <div className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    id="adminRemember"
                    name="rememberMe"
                    checked={adminData.rememberMe}
                    onChange={(e) => handleInputChange(e, "admin")}
                    className="h-3 w-3 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="adminRemember" className="ml-2 text-gray-600">
                    Keep signed in
                  </label>
                </div>

                <ButtonPrimary
                  isLoading={isLoading}
                  onClick={() => handleSubmit("admin")}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:ring-red-200"
                >
                  <Shield className="h-4 w-4" />
                  Admin Sign In
                </ButtonPrimary>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Success"
        message={`${
          currentPage === "login"
            ? "Login"
            : currentPage === "signup"
            ? "Registration"
            : "Admin login"
        } successful!`}
      />

      {/* Error Modal */}
      <ErrorModal
        isOpen={showError}
        onClose={() => setShowError(false)}
        title="Error"
        message={errorMessage}
      />
    </div>
  );
};

export default Login;
