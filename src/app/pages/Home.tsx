import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Search, Plus, ChevronDown, CheckCircle2, Clock, FileText, Target, BookOpen, AlertCircle, Lightbulb, Calendar, Settings } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showNewResearchModal, setShowNewResearchModal] = useState(false);
  const [taskFilter, setTaskFilter] = useState<"all" | "pending" | "in-progress" | "completed">("all");
  const [researchQuestion, setResearchQuestion] = useState("");

  const recommendedTags = ["SSM", "Transformer", "多模态医学影像", "Foundation Model", "深度学习"];

  const tasks = [
    { id: 1, title: "文献综述 - Transformer在医学影像中的应用", status: "in-progress", deadline: "2026-03-15" },
    { id: 2, title: "数据集整理 - 多模态医学影像数据", status: "pending", deadline: "2026-03-12" },
    { id: 3, title: "模型训练 - SSM基础模型", status: "in-progress", deadline: "2026-03-20" },
    { id: 4, title: "论文撰写 - 引言部分", status: "completed", deadline: "2026-03-08" },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (taskFilter === "all") return true;
    if (taskFilter === "pending") return task.status === "pending";
    if (taskFilter === "in-progress") return task.status === "in-progress";
    if (taskFilter === "completed") return task.status === "completed";
    return true;
  });

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F3F5] to-white">
      <Navigation />

      <main className="pt-24 px-8 max-w-[1920px] mx-auto pb-12">
        {/* 核心操作区 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl mb-6 text-[#1D2129]">🎯 RESEARCH ENTRY</h2>

          {/* 标签推荐 */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#4E5969] whitespace-nowrap">推荐标签：</span>
              <div className="flex flex-wrap gap-2">
                {recommendedTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedTags.includes(tag)
                        ? "bg-[#165DFF] text-white"
                        : "bg-[#F2F3F5] text-[#4E5969] hover:bg-[#165DFF] hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 搜索/创建课题 */}
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4E5969]" />
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="搜索或创建课题关键词（如：2024-2025 foundation model）"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all text-[#1D2129]"
              />
            </div>
            <button className="px-8 py-4 bg-[#165DFF] text-white rounded-xl hover:bg-[#0E4FD9] transition-all flex items-center gap-2">
              <Search className="w-5 h-5" />
              开始研究
            </button>
            <button
              onClick={() => setShowNewResearchModal(true)}
              className="px-8 py-4 bg-[#36CFC9] text-white rounded-xl hover:bg-[#2BB7B1] transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              新建研究
            </button>
          </div>
        </div>

        {/* 快速跳转区 */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Link
            to="/research"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-[#165DFF]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#165DFF] bg-opacity-10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-[#165DFF]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1D2129]">研究工作台</h3>
            </div>
            <p className="text-sm text-[#4E5969] mt-3 ml-15">课题管理、任务拆解、进度追踪</p>
          </Link>

          <Link
            to="/research"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-[#36CFC9]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#36CFC9] bg-opacity-10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#36CFC9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1D2129]">研究助手</h3>
            </div>
            <p className="text-sm text-[#4E5969] mt-3 ml-15">AI辅助写作、文献解读、智能提醒</p>
          </Link>

          <Link
            to="/library"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-[#165DFF]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#165DFF] bg-opacity-10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#165DFF]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1D2129]">Library</h3>
            </div>
            <p className="text-sm text-[#4E5969] mt-3 ml-15">文献收录、分类管理、笔记整理</p>
          </Link>

          <Link
            to="/reviews"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-[#36CFC9]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#36CFC9] bg-opacity-10 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#36CFC9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1D2129]">Reviews</h3>
            </div>
            <p className="text-sm text-[#4E5969] mt-3 ml-15">论文评审、版本控制、同行评议</p>
          </Link>

          <Link
            to="/weekly"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-[#165DFF]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#165DFF] bg-opacity-10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#165DFF]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1D2129]">Weekly</h3>
            </div>
            <p className="text-sm text-[#4E5969] mt-3 ml-15">周期汇报、进度总结、计划安排</p>
          </Link>

          <Link
            to="/settings"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-[#36CFC9]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#36CFC9] bg-opacity-10 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-[#36CFC9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1D2129]">Settings</h3>
            </div>
            <p className="text-sm text-[#4E5969] mt-3 ml-15">界面配置、权限管理、系统参数</p>
          </Link>
        </div>

        {/* 主体内容区 - 双栏布局 */}
        <div className="grid grid-cols-2 gap-8">
          {/* 左侧：研究助手（任务管理） */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-[#1D2129]">📋 研究助手</h3>
              <div className="relative">
                <button
                  onClick={() => {
                    const filter = document.getElementById("task-filter") as HTMLSelectElement;
                    filter?.click();
                  }}
                  className="px-4 py-2 bg-[#F2F3F5] rounded-lg text-sm flex items-center gap-2 hover:bg-[#E5E6EB] transition-all"
                >
                  <span>筛选任务</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <select
                  id="task-filter"
                  value={taskFilter}
                  onChange={(e) => setTaskFilter(e.target.value as any)}
                  className="absolute opacity-0 pointer-events-none"
                >
                  <option value="all">全部</option>
                  <option value="pending">未开始</option>
                  <option value="in-progress">进行中</option>
                  <option value="completed">已完成</option>
                </select>
              </div>
            </div>

            {/* 任务列表 */}
            <div className="space-y-3">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 rounded-xl border-2 border-[#F2F3F5] hover:border-[#165DFF] transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {task.status === "completed" && <CheckCircle2 className="w-5 h-5 text-[#36CFC9]" />}
                      {task.status === "in-progress" && <Clock className="w-5 h-5 text-[#165DFF]" />}
                      {task.status === "pending" && <AlertCircle className="w-5 h-5 text-[#4E5969]" />}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-sm mb-1 ${task.status === "completed" ? "line-through text-[#4E5969]" : "text-[#1D2129]"}`}>
                        {task.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            task.status === "completed"
                              ? "bg-[#36CFC9] bg-opacity-10 text-[#36CFC9]"
                              : task.status === "in-progress"
                              ? "bg-[#165DFF] bg-opacity-10 text-[#165DFF]"
                              : "bg-[#F2F3F5] text-[#4E5969]"
                          }`}
                        >
                          {task.status === "completed" ? "已完成" : task.status === "in-progress" ? "进行中" : "未开始"}
                        </span>
                        <span className="text-xs text-[#4E5969]">截止：{task.deadline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-3 border-2 border-dashed border-[#E5E6EB] rounded-xl text-[#4E5969] hover:border-[#165DFF] hover:text-[#165DFF] transition-all flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" />
              添加新任务
            </button>
          </div>

          {/* 右侧：证据区（成果验证） */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-[#1D2129] mb-6">🔍 证据区</h3>

            {/* 研究问题输入 */}
            <div className="mb-6">
              <label className="block text-sm text-[#4E5969] mb-2">输入研究问题</label>
              <textarea
                value={researchQuestion}
                onChange={(e) => setResearchQuestion(e.target.value)}
                placeholder="例如：多模态医学影像的SSM模型应用现状如何？"
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all resize-none text-[#1D2129]"
                rows={3}
              />
              <button className="mt-3 px-6 py-2 bg-[#165DFF] text-white rounded-lg hover:bg-[#0E4FD9] transition-all">
                搜索证据
              </button>
            </div>

            {/* 结果展示区 */}
            <div className="space-y-4">
              {/* 真实结果 */}
              <div className="p-4 rounded-xl bg-[#165DFF] bg-opacity-5 border border-[#165DFF] border-opacity-20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#165DFF] rounded-full"></div>
                  <h4 className="font-semibold text-[#165DFF]">📊 真实结果</h4>
                </div>
                <p className="text-sm text-[#4E5969] mb-2">匹配本地文献：3篇</p>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-white rounded">
                    <p className="text-[#1D2129]">• State Space Models for Medical Imaging (2025)</p>
                    <p className="text-xs text-[#4E5969]">引用格式：Zhang et al., Nature Medicine, 2025</p>
                  </div>
                </div>
              </div>

              {/* 我的库命中 */}
              <div className="p-4 rounded-xl bg-[#36CFC9] bg-opacity-5 border border-[#36CFC9] border-opacity-20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#36CFC9] rounded-full"></div>
                  <h4 className="font-semibold text-[#36CFC9]">🎯 我的库命中</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-3 bg-white rounded-lg">
                    <p className="text-2xl font-bold text-[#1D2129]">12</p>
                    <p className="text-xs text-[#4E5969]">相关文献</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <p className="text-2xl font-bold text-[#1D2129]">5</p>
                    <p className="text-xs text-[#4E5969]">模型文件</p>
                  </div>
                </div>
              </div>

              {/* 待核验推荐 */}
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <h4 className="font-semibold text-orange-700">🔍 待核验推荐</h4>
                </div>
                <p className="text-sm text-[#4E5969] mb-2">AI生成的推荐内容（需人工验证）</p>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-white rounded flex items-center justify-between">
                    <span className="text-[#1D2129]">• Mamba: Linear-Time SSM (arXiv 2024)</span>
                    <button className="text-xs text-[#165DFF] hover:underline">验证</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 新建研究弹窗 */}
      {showNewResearchModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowNewResearchModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-[#1D2129] mb-6">新建研究课题</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#4E5969] mb-2">课题名称</label>
                <input
                  type="text"
                  placeholder="例如：基于SSM的多模态医学影像分析"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all text-[#1D2129]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#4E5969] mb-2">研究方向</label>
                <input
                  type="text"
                  placeholder="例如：计算机视觉、医学AI"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all text-[#1D2129]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#4E5969] mb-2">选择标签</label>
                <div className="flex flex-wrap gap-2">
                  {recommendedTags.map((tag) => (
                    <button
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm bg-[#F2F3F5] text-[#4E5969] hover:bg-[#165DFF] hover:text-white transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <button className="flex-1 py-3 bg-[#165DFF] text-white rounded-xl hover:bg-[#0E4FD9] transition-all">创建课题</button>
              <button onClick={() => setShowNewResearchModal(false)} className="flex-1 py-3 border-2 border-[#E5E6EB] text-[#4E5969] rounded-xl hover:border-[#165DFF] hover:text-[#165DFF] transition-all">
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}