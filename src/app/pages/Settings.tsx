import { Navigation } from "../components/Navigation";
import { useState } from "react";
import { User, Bell, Shield, Palette, Globe, Database, Download } from "lucide-react";

export default function Settings() {
  const [activeSection, setActiveSection] = useState<"profile" | "notifications" | "privacy" | "appearance" | "system">("profile");
  const [notifications, setNotifications] = useState({
    taskReminders: true,
    weeklyReport: true,
    reviewUpdates: false,
    literatureAlerts: true,
  });

  const sections = [
    { id: "profile", name: "个人资料", icon: User },
    { id: "notifications", name: "通知设置", icon: Bell },
    { id: "privacy", name: "隐私与权限", icon: Shield },
    { id: "appearance", name: "外观设置", icon: Palette },
    { id: "system", name: "系统参数", icon: Database },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F3F5] to-white">
      <Navigation />

      <main className="pt-24 px-8 max-w-[1920px] mx-auto pb-12">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1D2129] mb-2">系统设置</h1>
          <p className="text-[#4E5969]">界面配置、权限管理、系统参数</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* 左侧导航 */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id as any)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                        activeSection === section.id
                          ? "bg-[#165DFF] text-white"
                          : "bg-[#F2F3F5] text-[#4E5969] hover:bg-[#E5E6EB]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{section.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 右侧内容区 */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* 个人资料 */}
              {activeSection === "profile" && (
                <div>
                  <h2 className="text-xl font-bold text-[#1D2129] mb-6">个人资料</h2>
                  <div className="space-y-6">
                    {/* 头像 */}
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-[#165DFF] rounded-full flex items-center justify-center text-white text-3xl">
                        研
                      </div>
                      <div>
                        <button className="px-4 py-2 bg-[#165DFF] text-white rounded-lg hover:bg-[#0E4FD9] transition-all text-sm mb-2">
                          更换头像
                        </button>
                        <p className="text-xs text-[#4E5969]">支持JPG、PNG格式，不超过2MB</p>
                      </div>
                    </div>

                    {/* 基本信息 */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-[#4E5969] mb-2">用户名</label>
                        <input
                          type="text"
                          defaultValue="研究员"
                          className="w-full px-4 py-3 rounded-lg border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all text-[#1D2129]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#4E5969] mb-2">邮箱</label>
                        <input
                          type="email"
                          defaultValue="researcher@example.com"
                          className="w-full px-4 py-3 rounded-lg border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all text-[#1D2129]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#4E5969] mb-2">研究方向</label>
                        <input
                          type="text"
                          defaultValue="计算机视觉、医学AI"
                          className="w-full px-4 py-3 rounded-lg border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all text-[#1D2129]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#4E5969] mb-2">所属机构</label>
                        <input
                          type="text"
                          defaultValue="Research OS Lab"
                          className="w-full px-4 py-3 rounded-lg border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all text-[#1D2129]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4">
                      <button className="px-6 py-3 bg-[#165DFF] text-white rounded-lg hover:bg-[#0E4FD9] transition-all">
                        保存更改
                      </button>
                      <button className="px-6 py-3 bg-[#F2F3F5] text-[#4E5969] rounded-lg hover:bg-[#E5E6EB] transition-all">
                        取消
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 通知设置 */}
              {activeSection === "notifications" && (
                <div>
                  <h2 className="text-xl font-bold text-[#1D2129] mb-6">通知设置</h2>
                  <div className="space-y-4">
                    {Object.entries({
                      taskReminders: { label: "任务提醒", desc: "任务截止日期前一天发送提醒" },
                      weeklyReport: { label: "周报提醒", desc: "每周五提醒填写周报" },
                      reviewUpdates: { label: "评审更新", desc: "论文评审状态变化时通知" },
                      literatureAlerts: { label: "文献推送", desc: "根据研究方向推送相关文献" },
                    }).map(([key, config]) => (
                      <div key={key} className="flex items-center justify-between p-4 bg-[#F2F3F5] rounded-lg">
                        <div>
                          <h4 className="font-semibold text-[#1D2129] mb-1">{config.label}</h4>
                          <p className="text-sm text-[#4E5969]">{config.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications[key as keyof typeof notifications]}
                            onChange={(e) =>
                              setNotifications({ ...notifications, [key]: e.target.checked })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#165DFF]"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 隐私与权限 */}
              {activeSection === "privacy" && (
                <div>
                  <h2 className="text-xl font-bold text-[#1D2129] mb-6">隐私与权限</h2>
                  <div className="space-y-6">
                    <div className="p-4 bg-[#F2F3F5] rounded-lg">
                      <h4 className="font-semibold text-[#1D2129] mb-3">数据安全</h4>
                      <div className="space-y-2">
                        <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-all flex items-center justify-between">
                          <span className="text-[#1D2129]">修改密码</span>
                          <span className="text-[#4E5969]">›</span>
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-all flex items-center justify-between">
                          <span className="text-[#1D2129]">两步验证</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">已启用</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-4 bg-[#F2F3F5] rounded-lg">
                      <h4 className="font-semibold text-[#1D2129] mb-3">数据管理</h4>
                      <div className="space-y-2">
                        <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-all flex items-center gap-3">
                          <Download className="w-5 h-5 text-[#165DFF]" />
                          <span className="text-[#1D2129]">导出我的数据</span>
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-red-50 transition-all flex items-center gap-3 text-red-600">
                          <Shield className="w-5 h-5" />
                          <span>删除我的账户</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 外观设置 */}
              {activeSection === "appearance" && (
                <div>
                  <h2 className="text-xl font-bold text-[#1D2129] mb-6">外观设置</h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#1D2129] mb-3">主题模式</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { name: "明亮", color: "bg-white border-4 border-gray-200" },
                          { name: "暗黑", color: "bg-[#1D2129] border-4 border-gray-600" },
                          { name: "护眼", color: "bg-[#F5F5F5] border-4 border-[#36CFC9]" },
                        ].map((theme) => (
                          <button
                            key={theme.name}
                            className="p-6 rounded-xl border-2 border-[#E5E6EB] hover:border-[#165DFF] transition-all"
                          >
                            <div className={`w-full h-24 rounded-lg ${theme.color} mb-3`}></div>
                            <div className="text-sm font-semibold text-[#1D2129]">{theme.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1D2129] mb-3">字体大小</h4>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-[#4E5969]">小</span>
                        <input
                          type="range"
                          min="12"
                          max="18"
                          defaultValue="14"
                          className="flex-1"
                        />
                        <span className="text-sm text-[#4E5969]">大</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1D2129] mb-3">语言设置</h4>
                      <select className="w-full px-4 py-3 rounded-lg border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all text-[#1D2129]">
                        <option>简体中文</option>
                        <option>English</option>
                        <option>日本語</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* 系统参数 */}
              {activeSection === "system" && (
                <div>
                  <h2 className="text-xl font-bold text-[#1D2129] mb-6">系统参数</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-gradient-to-br from-[#165DFF]/10 to-[#36CFC9]/10 rounded-xl">
                        <div className="text-sm text-[#4E5969] mb-1">存储使用</div>
                        <div className="text-2xl font-bold text-[#165DFF] mb-1">3.2 GB</div>
                        <div className="text-xs text-[#4E5969]">/ 10 GB</div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-[#36CFC9]/10 to-[#165DFF]/10 rounded-xl">
                        <div className="text-sm text-[#4E5969] mb-1">文献数量</div>
                        <div className="text-2xl font-bold text-[#36CFC9] mb-1">156</div>
                        <div className="text-xs text-[#4E5969]">篇</div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-100 to-orange-100 rounded-xl">
                        <div className="text-sm text-[#4E5969] mb-1">活跃项目</div>
                        <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                        <div className="text-xs text-[#4E5969]">个</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#F2F3F5] rounded-lg">
                      <h4 className="font-semibold text-[#1D2129] mb-3">数据同步</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="text-[#1D2129]">自动备份</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">已开启</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="text-[#1D2129]">云端同步</span>
                          <button className="text-xs bg-[#165DFF] text-white px-3 py-1 rounded hover:bg-[#0E4FD9]">
                            立即同步
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="text-[#1D2129]">上次备份</span>
                          <span className="text-sm text-[#4E5969]">2026-03-10 09:30</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        版本信息
                      </h4>
                      <div className="text-sm text-[#4E5969] space-y-1">
                        <div>当前版本：Research OS v1.2.0</div>
                        <div>更新时间：2026-03-01</div>
                        <button className="mt-2 text-[#165DFF] hover:underline">检查更新</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
