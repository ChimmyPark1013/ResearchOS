import { Link, useLocation } from "react-router";
import { Sun, Moon, Eye, User, LogOut } from "lucide-react";
import { useState } from "react";

type ThemeMode = "light" | "dark" | "eye-care";

export function Navigation() {
  const location = useLocation();
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = [
    { name: "Research", path: "/research" },
    { name: "Library", path: "/library" },
    { name: "Reviews", path: "/reviews" },
    { name: "Weekly", path: "/weekly" },
    { name: "Settings", path: "/settings" },
  ];

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    // 根据主题设置body背景色
    if (newTheme === "light") {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#1D2129";
    } else if (newTheme === "dark") {
      document.body.style.backgroundColor = "#1D2129";
      document.body.style.color = "#FFFFFF";
    } else {
      document.body.style.backgroundColor = "#F5F5F5";
      document.body.style.color = "#4E5969";
    }
  };

  const getThemeClasses = () => {
    if (theme === "dark") {
      return "bg-[#1D2129] text-white border-gray-700";
    } else if (theme === "eye-care") {
      return "bg-[#F5F5F5] text-[#4E5969] border-gray-300";
    }
    return "bg-white text-[#1D2129] border-gray-200";
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${getThemeClasses()} border-b shadow-sm bg-gradient-to-r from-[#165DFF] via-[#3d7aff] to-[#36CFC9]`}>
      <div className="max-w-[1920px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* 品牌标识 */}
          <Link to="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
            Research OS
          </Link>

          {/* 主导航 */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "bg-white text-[#165DFF]"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 主题切换和用户区 */}
          <div className="flex items-center gap-4">
            {/* 主题按钮 */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-[#F2F3F5]">
              <button
                onClick={() => handleThemeChange("light")}
                className={`p-2 rounded-md transition-all ${
                  theme === "light" ? "bg-white text-[#165DFF] shadow-sm" : "text-[#4E5969] hover:bg-white/50"
                }`}
                title="明亮模式"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange("dark")}
                className={`p-2 rounded-md transition-all ${
                  theme === "dark" ? "bg-[#1D2129] text-white shadow-sm" : "text-[#4E5969] hover:bg-white/50"
                }`}
                title="暗黑模式"
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange("eye-care")}
                className={`p-2 rounded-md transition-all ${
                  theme === "eye-care" ? "bg-[#36CFC9] text-white shadow-sm" : "text-[#4E5969] hover:bg-white/50"
                }`}
                title="护眼模式"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>

            {/* 用户区 */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F2F3F5] transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#165DFF] flex items-center justify-center text-white">
                  <User className="w-4 h-4" />
                </div>
                <span className="text-sm">研究员</span>
              </button>

              {showUserMenu && (
                <div className={`absolute right-0 top-full mt-2 w-48 rounded-lg shadow-lg ${getThemeClasses()} border p-2`}>
                  <button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#F2F3F5] transition-all flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>个人中心</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#F2F3F5] transition-all flex items-center gap-2 text-red-500">
                    <LogOut className="w-4 h-4" />
                    <span>退出登录</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}