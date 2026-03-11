import { Navigation } from "../components/Navigation";
import { Calendar, TrendingUp, CheckCircle2, Target, Plus } from "lucide-react";

export default function Weekly() {
  const weeks = [
    {
      week: "第10周",
      date: "3月3日 - 3月9日",
      progress: 85,
      completed: 8,
      total: 10,
      highlights: [
        "完成Mamba模型文献综述",
        "整理医学影像数据集（500例）",
        "参与实验室组会汇报",
      ],
      nextWeek: [
        "开展模型训练实验",
        "撰写论文方法部分",
        "准备中期汇报PPT",
      ],
    },
    {
      week: "第9周",
      date: "2月24日 - 3月2日",
      progress: 70,
      completed: 7,
      total: 10,
      highlights: [
        "阅读SSM相关论文15篇",
        "搭建基础实验环境",
        "与导师讨论研究方向",
      ],
      nextWeek: [],
    },
  ];

  const monthlyStats = [
    { label: "已完成任务", value: 32, color: "bg-[#36CFC9]" },
    { label: "文献阅读", value: 45, color: "bg-[#165DFF]" },
    { label: "实验次数", value: 12, color: "bg-purple-500" },
    { label: "论文撰写", value: 8, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F3F5] to-white">
      <Navigation />

      <main className="pt-24 px-8 max-w-[1920px] mx-auto pb-12">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1D2129] mb-2">远流区 (Weekly)</h1>
          <p className="text-[#4E5969]">周期汇报、进度总结、计划安排</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* 左侧周报列表 */}
          <div className="col-span-2 space-y-6">
            {weeks.map((week, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#1D2129] mb-1">{week.week}</h3>
                    <p className="text-sm text-[#4E5969] flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {week.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#165DFF] mb-1">{week.progress}%</div>
                    <div className="text-sm text-[#4E5969]">
                      {week.completed}/{week.total} 任务完成
                    </div>
                  </div>
                </div>

                {/* 进度条 */}
                <div className="mb-6">
                  <div className="w-full h-3 bg-[#F2F3F5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#165DFF] to-[#36CFC9] rounded-full transition-all"
                      style={{ width: `${week.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* 本周亮点 */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#1D2129] mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#36CFC9]" />
                    本周亮点
                  </h4>
                  <div className="space-y-2">
                    {week.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-[#F2F3F5] rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#36CFC9] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#1D2129]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 下周计划 */}
                {week.nextWeek.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-[#1D2129] mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#165DFF]" />
                      下周计划
                    </h4>
                    <div className="space-y-2">
                      {week.nextWeek.map((plan, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-5 h-5 border-2 border-[#165DFF] rounded mt-0.5 flex-shrink-0"></div>
                          <span className="text-sm text-[#1D2129]">{plan}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 操作按钮 */}
                {index === 0 && (
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#F2F3F5]">
                    <button className="px-4 py-2 bg-[#165DFF] text-white rounded-lg hover:bg-[#0E4FD9] transition-all text-sm">
                      编辑周报
                    </button>
                    <button className="px-4 py-2 bg-[#F2F3F5] text-[#4E5969] rounded-lg hover:bg-[#E5E6EB] transition-all text-sm">
                      导出PDF
                    </button>
                    <button className="px-4 py-2 bg-[#F2F3F5] text-[#4E5969] rounded-lg hover:bg-[#E5E6EB] transition-all text-sm">
                      分享给导师
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* 创建新周报 */}
            <button className="w-full py-6 border-2 border-dashed border-[#E5E6EB] rounded-xl text-[#4E5969] hover:border-[#165DFF] hover:text-[#165DFF] transition-all flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" />
              创建本周周报
            </button>
          </div>

          {/* 右侧统计面板 */}
          <div className="col-span-1 space-y-6">
            {/* 本月统计 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-[#1D2129] mb-4">📊 本月统计</h3>
              <div className="space-y-4">
                {monthlyStats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-[#4E5969]">{stat.label}</span>
                      <span className="font-semibold text-[#1D2129]">{stat.value}</span>
                    </div>
                    <div className="w-full h-2 bg-[#F2F3F5] rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stat.color} rounded-full transition-all`}
                        style={{ width: `${(stat.value / 50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 成就徽章 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-[#1D2129] mb-4">🏆 成就徽章</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-gradient-to-br from-[#165DFF]/10 to-[#36CFC9]/10 rounded-lg text-center">
                  <div className="text-3xl mb-2">📚</div>
                  <div className="text-xs text-[#4E5969]">阅读达人</div>
                  <div className="text-xs text-[#165DFF] mt-1">45篇</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#36CFC9]/10 to-[#165DFF]/10 rounded-lg text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-xs text-[#4E5969]">高效执行</div>
                  <div className="text-xs text-[#36CFC9] mt-1">32任务</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-100 to-orange-100 rounded-lg text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-xs text-[#4E5969]">目标达成</div>
                  <div className="text-xs text-purple-600 mt-1">85%</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-100 to-purple-100 rounded-lg text-center">
                  <div className="text-3xl mb-2">🌟</div>
                  <div className="text-xs text-[#4E5969]">连续打卡</div>
                  <div className="text-xs text-orange-600 mt-1">10周</div>
                </div>
              </div>
            </div>

            {/* 快捷操作 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-[#1D2129] mb-4">⚡ 快捷操作</h3>
              <div className="space-y-2">
                <button className="w-full py-3 bg-[#165DFF] text-white rounded-lg hover:bg-[#0E4FD9] transition-all text-sm">
                  发送周报给导师
                </button>
                <button className="w-full py-3 bg-[#F2F3F5] text-[#4E5969] rounded-lg hover:bg-[#E5E6EB] transition-all text-sm">
                  查看历史周报
                </button>
                <button className="w-full py-3 bg-[#F2F3F5] text-[#4E5969] rounded-lg hover:bg-[#E5E6EB] transition-all text-sm">
                  设置提醒时间
                </button>
              </div>
            </div>

            {/* 本周提醒 */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg p-6 border border-orange-200">
              <h3 className="font-semibold text-orange-700 mb-3">⏰ 本周提醒</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5"></div>
                  <span className="text-[#4E5969]">周三：实验室组会</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5"></div>
                  <span className="text-[#4E5969]">周五：提交周报</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5"></div>
                  <span className="text-[#4E5969]">周日：导师面谈</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
