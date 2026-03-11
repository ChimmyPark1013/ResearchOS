import { Navigation } from "../components/Navigation";
import { useState } from "react";
import { FileText, MessageSquare, CheckCircle2, AlertCircle, Clock, Users } from "lucide-react";

export default function Reviews() {
  const [activeTab, setActiveTab] = useState<"pending" | "reviewing" | "completed">("pending");

  const reviews = [
    {
      id: 1,
      title: "基于SSM的多模态医学影像分割方法研究",
      version: "v3.2",
      submittedDate: "2026-03-08",
      status: "pending",
      reviewers: ["张教授", "李研究员"],
      comments: 5,
      changes: 12,
    },
    {
      id: 2,
      title: "Transformer优化算法在大规模数据集上的应用",
      version: "v2.0",
      submittedDate: "2026-03-05",
      status: "reviewing",
      reviewers: ["王博士"],
      comments: 18,
      changes: 7,
    },
    {
      id: 3,
      title: "Foundation Model在医疗诊断中的实证研究",
      version: "v1.0",
      submittedDate: "2026-03-01",
      status: "completed",
      reviewers: ["陈教授", "刘博士", "赵研究员"],
      comments: 23,
      changes: 0,
    },
  ];

  const filteredReviews = reviews.filter((review) => review.status === activeTab);

  const versionHistory = [
    { version: "v3.2", date: "2026-03-08", changes: "修复引言部分逻辑问题，补充实验数据", author: "研究员" },
    { version: "v3.1", date: "2026-03-06", changes: "根据审稿意见调整方法论描述", author: "研究员" },
    { version: "v3.0", date: "2026-03-03", changes: "完成初稿，提交第一轮评审", author: "研究员" },
    { version: "v2.5", date: "2026-02-28", changes: "补充文献综述，更新参考文献", author: "研究员" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F3F5] to-white">
      <Navigation />

      <main className="pt-24 px-8 max-w-[1920px] mx-auto pb-12">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1D2129] mb-2">成果评审</h1>
          <p className="text-[#4E5969]">论文评审、版本管理、同行评议</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* 左侧评审列表 */}
          <div className="col-span-2">
            {/* 状态切换 */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab("pending")}
                  className={`flex-1 py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === "pending"
                      ? "bg-[#165DFF] text-white"
                      : "bg-[#F2F3F5] text-[#4E5969] hover:bg-[#E5E6EB]"
                  }`}
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>待评审</span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs">1</span>
                </button>
                <button
                  onClick={() => setActiveTab("reviewing")}
                  className={`flex-1 py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === "reviewing"
                      ? "bg-[#165DFF] text-white"
                      : "bg-[#F2F3F5] text-[#4E5969] hover:bg-[#E5E6EB]"
                  }`}
                >
                  <Clock className="w-5 h-5" />
                  <span>评审中</span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs">1</span>
                </button>
                <button
                  onClick={() => setActiveTab("completed")}
                  className={`flex-1 py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
                    activeTab === "completed"
                      ? "bg-[#165DFF] text-white"
                      : "bg-[#F2F3F5] text-[#4E5969] hover:bg-[#E5E6EB]"
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>已完成</span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs">1</span>
                </button>
              </div>
            </div>

            {/* 评审项目列表 */}
            <div className="space-y-4">
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-[#1D2129]">{review.title}</h3>
                        <span className="px-3 py-1 bg-[#F2F3F5] text-[#4E5969] text-xs rounded-full">
                          {review.version}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-[#4E5969]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          提交于 {review.submittedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {review.reviewers.length} 位评审人
                        </span>
                      </div>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-lg text-sm ${
                        review.status === "pending"
                          ? "bg-orange-50 text-orange-600"
                          : review.status === "reviewing"
                          ? "bg-blue-50 text-[#165DFF]"
                          : "bg-green-50 text-[#36CFC9]"
                      }`}
                    >
                      {review.status === "pending" ? "等待评审" : review.status === "reviewing" ? "评审中" : "已通过"}
                    </div>
                  </div>

                  {/* 评审人信息 */}
                  <div className="mb-4 p-3 bg-[#F2F3F5] rounded-lg">
                    <div className="text-sm text-[#4E5969] mb-2">评审人：</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {review.reviewers.map((reviewer, index) => (
                        <div key={index} className="flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                          <div className="w-6 h-6 bg-[#165DFF] rounded-full flex items-center justify-center text-white text-xs">
                            {reviewer.charAt(0)}
                          </div>
                          <span className="text-sm text-[#1D2129]">{reviewer}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 统计信息 */}
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MessageSquare className="w-4 h-4 text-[#4E5969]" />
                      <span className="text-[#4E5969]">{review.comments} 条评论</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-[#4E5969]" />
                      <span className="text-[#4E5969]">{review.changes} 处修改</span>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#F2F3F5]">
                    <button className="px-4 py-2 bg-[#165DFF] text-white rounded-lg hover:bg-[#0E4FD9] transition-all text-sm">
                      查看详情
                    </button>
                    <button className="px-4 py-2 bg-[#F2F3F5] text-[#4E5969] rounded-lg hover:bg-[#E5E6EB] transition-all text-sm">
                      下载文档
                    </button>
                    {review.status === "pending" && (
                      <button className="px-4 py-2 bg-[#36CFC9] text-white rounded-lg hover:bg-[#2BB7B1] transition-all text-sm">
                        开始评审
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧版本历史 */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="font-semibold text-[#1D2129] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                版本历史
              </h3>

              <div className="space-y-4">
                {versionHistory.map((version, index) => (
                  <div
                    key={index}
                    className={`relative pl-6 pb-4 ${
                      index !== versionHistory.length - 1 ? "border-l-2 border-[#E5E6EB]" : ""
                    }`}
                  >
                    <div
                      className={`absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full ${
                        index === 0 ? "bg-[#165DFF]" : "bg-[#E5E6EB]"
                      }`}
                    ></div>
                    <div className="bg-[#F2F3F5] rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-[#165DFF] text-sm">{version.version}</span>
                        <span className="text-xs text-[#4E5969]">{version.date}</span>
                      </div>
                      <p className="text-sm text-[#4E5969] mb-2">{version.changes}</p>
                      <span className="text-xs text-[#4E5969]">作者：{version.author}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 border-2 border-dashed border-[#E5E6EB] rounded-lg text-sm text-[#4E5969] hover:border-[#165DFF] hover:text-[#165DFF] transition-all">
                查看完整历史
              </button>
            </div>

            {/* 评审统计 */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="font-semibold text-[#1D2129] mb-4">📊 评审统计</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-[#165DFF]/10 to-[#36CFC9]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[#165DFF] mb-1">3</div>
                  <div className="text-sm text-[#4E5969]">总提交次数</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-[#36CFC9]/10 to-[#165DFF]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[#36CFC9] mb-1">1</div>
                  <div className="text-sm text-[#4E5969]">已通过评审</div>
                </div>
                <div className="p-3 bg-[#F2F3F5] rounded-lg">
                  <div className="text-2xl font-bold text-[#4E5969] mb-1">5.2天</div>
                  <div className="text-sm text-[#4E5969]">平均评审周期</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
