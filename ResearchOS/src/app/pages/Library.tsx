import { Navigation } from "../components/Navigation";
import { useState } from "react";
import { Search, Filter, BookOpen, Star, FileText, Download, ExternalLink, Plus } from "lucide-react";

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "全部", count: 156 },
    { id: "ssm", name: "SSM模型", count: 45 },
    { id: "transformer", name: "Transformer", count: 38 },
    { id: "medical", name: "医学影像", count: 32 },
    { id: "foundation", name: "Foundation Model", count: 28 },
    { id: "multimodal", name: "多模态", count: 13 },
  ];

  const papers = [
    {
      id: 1,
      title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
      authors: "Albert Gu, Tri Dao",
      year: 2024,
      venue: "arXiv",
      citations: 1250,
      tags: ["SSM", "Deep Learning", "Sequence Modeling"],
      starred: true,
      downloaded: true,
    },
    {
      id: 2,
      title: "Vision Mamba: Efficient Visual Representation Learning with State Space Models",
      authors: "Lianghui Zhu, et al.",
      year: 2024,
      venue: "CVPR",
      citations: 342,
      tags: ["SSM", "Computer Vision", "Medical Imaging"],
      starred: false,
      downloaded: true,
    },
    {
      id: 3,
      title: "U-Mamba: Enhancing Long-range Dependency for Biomedical Image Segmentation",
      authors: "Jun Ma, et al.",
      year: 2024,
      venue: "Medical Image Analysis",
      citations: 128,
      tags: ["SSM", "Medical Imaging", "Segmentation"],
      starred: true,
      downloaded: false,
    },
    {
      id: 4,
      title: "Attention Is All You Need",
      authors: "Vaswani, et al.",
      year: 2017,
      venue: "NeurIPS",
      citations: 95000,
      tags: ["Transformer", "Deep Learning"],
      starred: true,
      downloaded: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F3F5] to-white">
      <Navigation />

      <main className="pt-24 px-8 max-w-[1920px] mx-auto pb-12">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1D2129] mb-2">文献知识库</h1>
          <p className="text-[#4E5969]">文献收录、分类管理、笔记整理</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* 左侧分类栏 */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-[#1D2129] mb-4">分类</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? "bg-[#165DFF] text-white"
                        : "bg-[#F2F3F5] text-[#4E5969] hover:bg-[#E5E6EB]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#F2F3F5]">
                <h4 className="text-sm font-semibold text-[#4E5969] mb-3">快捷筛选</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-[#4E5969] cursor-pointer hover:text-[#165DFF]">
                    <input type="checkbox" className="rounded" />
                    <Star className="w-4 h-4" />
                    <span>已收藏</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#4E5969] cursor-pointer hover:text-[#165DFF]">
                    <input type="checkbox" className="rounded" />
                    <Download className="w-4 h-4" />
                    <span>已下载</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#4E5969] cursor-pointer hover:text-[#165DFF]">
                    <input type="checkbox" className="rounded" />
                    <FileText className="w-4 h-4" />
                    <span>有笔记</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容区 */}
          <div className="col-span-3">
            {/* 搜索和操作栏 */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4E5969]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索文献标题、作者、关键词..."
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-[#F2F3F5] focus:border-[#165DFF] outline-none transition-all text-[#1D2129]"
                  />
                </div>
                <button className="px-6 py-3 bg-[#F2F3F5] text-[#4E5969] rounded-lg hover:bg-[#E5E6EB] transition-all flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  高级筛选
                </button>
                <button className="px-6 py-3 bg-[#36CFC9] text-white rounded-lg hover:bg-[#2BB7B1] transition-all flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  添加文献
                </button>
              </div>
            </div>

            {/* 文献列表 */}
            <div className="space-y-4">
              {papers.map((paper) => (
                <div key={paper.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <button
                          className={`mt-1 ${
                            paper.starred ? "text-yellow-500" : "text-[#E5E6EB] hover:text-yellow-500"
                          } transition-all`}
                        >
                          <Star className="w-5 h-5" fill={paper.starred ? "currentColor" : "none"} />
                        </button>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#1D2129] mb-2 hover:text-[#165DFF] cursor-pointer">
                            {paper.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-[#4E5969] mb-3">
                            <span>{paper.authors}</span>
                            <span>•</span>
                            <span>{paper.year}</span>
                            <span>•</span>
                            <span className="font-semibold">{paper.venue}</span>
                            <span>•</span>
                            <span>引用: {paper.citations.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            {paper.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-[#165DFF] bg-opacity-10 text-[#165DFF] text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {paper.downloaded && (
                        <span className="px-3 py-1 bg-[#36CFC9] bg-opacity-10 text-[#36CFC9] text-xs rounded-full flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          已下载
                        </span>
                      )}
                      <button className="p-2 hover:bg-[#F2F3F5] rounded-lg transition-all" title="查看详情">
                        <ExternalLink className="w-5 h-5 text-[#4E5969]" />
                      </button>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#F2F3F5]">
                    <button className="px-4 py-2 text-sm bg-[#165DFF] text-white rounded-lg hover:bg-[#0E4FD9] transition-all">
                      打开笔记
                    </button>
                    <button className="px-4 py-2 text-sm bg-[#F2F3F5] text-[#4E5969] rounded-lg hover:bg-[#E5E6EB] transition-all">
                      引用格式
                    </button>
                    <button className="px-4 py-2 text-sm bg-[#F2F3F5] text-[#4E5969] rounded-lg hover:bg-[#E5E6EB] transition-all">
                      相关文献
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 分页 */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button className="px-4 py-2 bg-white rounded-lg text-[#4E5969] hover:bg-[#F2F3F5] transition-all">
                上一页
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    page === 1
                      ? "bg-[#165DFF] text-white"
                      : "bg-white text-[#4E5969] hover:bg-[#F2F3F5]"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 bg-white rounded-lg text-[#4E5969] hover:bg-[#F2F3F5] transition-all">
                下一页
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
