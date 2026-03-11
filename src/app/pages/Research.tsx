import { Navigation } from "../components/Navigation";
import { useState } from "react";
import { ChevronRight, Plus, Calendar, Users, FileText, BarChart3 } from "lucide-react";

export default function Research() {
  const [activeTab, setActiveTab] = useState<"board" | "timeline" | "analytics">("board");

  const projects = [
    { id: 1, title: "多模态医学影像SSM研究", progress: 65, tasks: 12, completed: 8, team: 3 },
    { id: 2, title: "Transformer优化算法分析", progress: 40, tasks: 8, completed: 3, team: 2 },
    { id: 3, title: "Foundation Model应用研究", progress: 85, tasks: 15, completed: 13, team: 4 },
  ];

  const taskColumns = [
    {
      title: "未开始",
      color: "bg-gray-100",
      tasks: ["文献筛选 - 最新SSM论文", "数据集准备 - CT影像数据"],
    },
    {
      title: "进行中",
      color: "bg-blue-50",
      tasks: ["模型训练 - Mamba架构", "实验验证 - 性能对比", "论文撰写 - 方法部分"],
    },
    {
      title: "待审核",
      color: "bg-yellow-50",
      tasks: ["结果分析 - 消融实验"],
    },
    {
      title: "已完成",
      color: "bg-green-50",
      tasks: ["文献综述", "研究框架设计", "基线模型训练"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F3F5] to-white">
      <Navigation />

      <main className="pt-24 px-8 max-w-[1920px] mx-auto pb-12">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1D2129] mb-2">研究工作台</h1>
          <p className="text-[#4E5969]">课题创建、任务拆解、进度管理</p>
        </div>

        {/* 项目概览 */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-[#1D2129]">{project.title}</h3>
                <ChevronRight className="w-5 h-5 text-[#4E5969]" />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-[#4E5969]">进度</span>
                  <span className="font-semibold text-[#165DFF]">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-[#F2F3F5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#165DFF] rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-[#4E5969]">
                  <FileText className="w-4 h-4" />
                  <span>{project.completed}/{project.tasks} 任务</span>
                </div>
                <div className="flex items-center gap-1 text-[#4E5969]">
                  <Users className="w-4 h-4" />
                  <span>{project.team} 人</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 视图切换 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("board")}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeTab === "board"
                    ? "bg-[#165DFF] text-white"
                    : "bg-[#F2F3F5] text-[#4E5969] hover:bg-[#E5E6EB]"
                }`}
              >
                看板视图
              </button>
              <button
                onClick={() => setActiveTab("timeline")}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeTab === "timeline"
                    ? "bg-[#165DFF] text-white"
                    : "bg-[#F2F3F5] text-[#4E5969] hover:bg-[#E5E6EB]"
                }`}
              >
                <Calendar className="w-4 h-4 inline-block mr-2" />
                时间线
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeTab === "analytics"
                    ? "bg-[#165DFF] text-white"
                    : "bg-[#F2F3F5] text-[#4E5969] hover:bg-[#E5E6EB]"
                }`}
              >
                <BarChart3 className="w-4 h-4 inline-block mr-2" />
                数据分析
              </button>
            </div>
            <button className="px-6 py-2 bg-[#36CFC9] text-white rounded-lg hover:bg-[#2BB7B1] transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" />
              新建任务
            </button>
          </div>

          {/* 看板视图 */}
          {activeTab === "board" && (
            <div className="grid grid-cols-4 gap-4">
              {taskColumns.map((column, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[#1D2129]">{column.title}</h4>
                    <span className="text-xs bg-[#F2F3F5] px-2 py-1 rounded-full">{column.tasks.length}</span>
                  </div>
                  <div className="space-y-3">
                    {column.tasks.map((task, taskIndex) => (
                      <div
                        key={taskIndex}
                        className={`p-4 ${column.color} rounded-lg border-l-4 ${
                          index === 0
                            ? "border-gray-400"
                            : index === 1
                            ? "border-[#165DFF]"
                            : index === 2
                            ? "border-yellow-500"
                            : "border-[#36CFC9]"
                        } cursor-move hover:shadow-md transition-all`}
                      >
                        <p className="text-sm text-[#1D2129]">{task}</p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-[#4E5969]">
                          <Calendar className="w-3 h-3" />
                          <span>今天</span>
                        </div>
                      </div>
                    ))}
                    <button className="w-full py-2 border-2 border-dashed border-[#E5E6EB] rounded-lg text-sm text-[#4E5969] hover:border-[#165DFF] hover:text-[#165DFF] transition-all">
                      + 添加任务
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 时间线视图 */}
          {activeTab === "timeline" && (
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-[#E5E6EB]">
                {[
                  { date: "2026-03-10", title: "项目启动会议", status: "completed" },
                  { date: "2026-03-12", title: "完成文献综述", status: "in-progress" },
                  { date: "2026-03-15", title: "模型训练阶段", status: "pending" },
                  { date: "2026-03-20", title: "实验验证", status: "pending" },
                  { date: "2026-03-25", title: "论文初稿完成", status: "pending" },
                ].map((item, index) => (
                  <div key={index} className="mb-6 relative">
                    <div
                      className={`absolute -left-10 w-4 h-4 rounded-full border-2 ${
                        item.status === "completed"
                          ? "bg-[#36CFC9] border-[#36CFC9]"
                          : item.status === "in-progress"
                          ? "bg-[#165DFF] border-[#165DFF]"
                          : "bg-white border-[#E5E6EB]"
                      }`}
                    ></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-xs text-[#4E5969] mb-1">{item.date}</div>
                      <div className="font-semibold text-[#1D2129]">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 数据分析视图 */}
          {activeTab === "analytics" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#165DFF]/10 to-[#36CFC9]/10 rounded-xl p-6">
                <h4 className="font-semibold text-[#1D2129] mb-4">任务完成率</h4>
                <div className="text-4xl font-bold text-[#165DFF] mb-2">67%</div>
                <p className="text-sm text-[#4E5969]">本月较上月提升 12%</p>
              </div>
              <div className="bg-gradient-to-br from-[#36CFC9]/10 to-[#165DFF]/10 rounded-xl p-6">
                <h4 className="font-semibold text-[#1D2129] mb-4">平均任务耗时</h4>
                <div className="text-4xl font-bold text-[#36CFC9] mb-2">3.2天</div>
                <p className="text-sm text-[#4E5969]">优于预期时长 1.5天</p>
              </div>
              <div className="col-span-2 bg-white border-2 border-[#F2F3F5] rounded-xl p-6">
                <h4 className="font-semibold text-[#1D2129] mb-4">任务分布统计</h4>
                <div className="space-y-3">
                  {[
                    { name: "文献研究", count: 15, color: "bg-[#165DFF]" },
                    { name: "实验验证", count: 12, color: "bg-[#36CFC9]" },
                    { name: "论文撰写", count: 8, color: "bg-purple-500" },
                    { name: "数据分析", count: 10, color: "bg-orange-500" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-24 text-sm text-[#4E5969]">{item.name}</div>
                      <div className="flex-1 h-8 bg-[#F2F3F5] rounded-full overflow-hidden relative">
                        <div
                          className={`h-full ${item.color} rounded-full flex items-center justify-end px-3 text-white text-sm font-semibold`}
                          style={{ width: `${(item.count / 45) * 100}%` }}
                        >
                          {item.count}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
