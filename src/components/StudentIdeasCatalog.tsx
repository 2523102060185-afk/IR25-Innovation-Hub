import React, { useState, useMemo } from 'react';
import { STARTUP_IDEAS } from '../data/hubData';
import { StartupIdea } from '../types';
import { Search, Lightbulb, X, ArrowUpRight, Globe, Users, Target } from 'lucide-react';

export const StudentIdeasCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalIdea, setActiveModalIdea] = useState<StartupIdea | null>(null);

  const categories = [
    { key: 'all', label: 'Tất Cả (13)' },
    { key: 'Quà tặng', label: 'Quà Tặng (5)' },
    { key: 'Dịch vụ', label: 'Dịch Vụ (2)' },
    { key: 'Sản phẩm gia dụng', label: 'Gia Dụng (2)' },
    { key: 'Thiết bị hỗ trợ', label: 'Thiết Bị (1)' },
    { key: 'Mỹ phẩm', label: 'Mỹ Phẩm (1)' },
    { key: 'Thực phẩm', label: 'Thực Phẩm (1)' },
    { key: 'Dịch vụ công nghệ', label: 'Công Nghệ (1)' },
  ];

  const filteredIdeas = useMemo(() => {
    return STARTUP_IDEAS.filter((idea) => {
      const matchesCategory = selectedCategory === 'all' || idea.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        idea.name.toLowerCase().includes(q) ||
        idea.title.toLowerCase().includes(q) ||
        idea.insight.toLowerCase().includes(q) ||
        idea.solution.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="student-ideas" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm">
          6
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
            Định Hướng Đào Tạo TDMU & 13 Ý Tưởng Sáng Tạo D25QHQT02
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Học phần "Đổi mới sáng tạo khởi nghiệp (0+3)" · Trường Đại học Thủ Dầu Một
          </p>
        </div>
      </div>

      {/* Intro box */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 mb-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        Tại Trường Đại học Thủ Dầu Một (TDMU), sinh viên Quan hệ Quốc tế thực hành mô phỏng khởi nghiệp thực tế: xác định nỗi đau khách hàng (pain points), khảo sát thị trường, sàng lọc ý tưởng và thử nghiệm sản phẩm. Dưới đây là 13 đề án tiêu biểu từ sinh viên lớp <strong className="text-blue-950">D25QHQT02</strong>:
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        
        {/* Category Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl overflow-x-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-blue-950 hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full lg:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm tên dự án, sản phẩm..."
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-950 shadow-sm"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

      {/* Results Count */}
      <div className="mb-4 text-xs font-medium text-slate-500">
        Hiển thị {filteredIdeas.length} trên 13 dự án khởi nghiệp
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => (
          <div
            key={idea.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Category label & Team Name */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                  {idea.category}
                </span>
                <span className="text-xs font-black text-blue-950 px-2 py-0.5 bg-blue-50 rounded-lg">
                  {idea.name}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-blue-950 mb-3 group-hover:text-amber-700 transition-colors">
                {idea.title}
              </h3>

              {/* Insight & Idea summary */}
              <div className="space-y-2 text-xs text-slate-600 mb-4">
                <p>
                  <strong className="text-slate-800">Insight:</strong> {idea.insight}
                </p>
                <p>
                  <strong className="text-slate-800">Ý tưởng:</strong> {idea.solution}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">Lớp D25QHQT02</span>
              <button
                onClick={() => setActiveModalIdea(idea)}
                className="text-xs font-bold text-blue-950 hover:text-amber-600 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Xem Chi Tiết</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {filteredIdeas.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <Lightbulb className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-sm font-semibold text-slate-700">Không tìm thấy ý tưởng phù hợp với từ khóa</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs font-bold text-blue-950 hover:underline"
          >
            Đặt lại bộ lọc tìm kiếm
          </button>
        </div>
      )}

      {/* Idea Detail Modal */}
      {activeModalIdea && (
        <div className="fixed inset-0 z-50 bg-blue-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto custom-scrollbar">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalIdea(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-amber-700 uppercase">{activeModalIdea.category}</span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-bold text-blue-950">Dự án: {activeModalIdea.name}</span>
              </div>
              <h3 className="text-xl font-black text-blue-950">
                {activeModalIdea.title}
              </h3>
            </div>

            {/* Modal content body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-blue-950 mb-1">
                  <Target className="w-4 h-4 text-amber-600" />
                  <span>Vấn Đề & Nỗi Đau Thực Tế (Customer Insight)</span>
                </div>
                <p className="leading-relaxed text-slate-600">{activeModalIdea.insight}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-blue-950 mb-1">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>Giải Pháp Sáng Tạo (Value Proposition)</span>
                </div>
                <p className="leading-relaxed text-slate-600">{activeModalIdea.solution}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-blue-950 mb-1">
                  <Users className="w-4 h-4 text-blue-900" />
                  <span>Khách Hàng Mục Tiêu (Target Audience)</span>
                </div>
                <p className="leading-relaxed text-slate-600">{activeModalIdea.targetAudience}</p>
              </div>

              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80">
                <div className="flex items-center gap-2 font-bold text-amber-900 mb-1">
                  <Globe className="w-4 h-4 text-amber-700" />
                  <span>Thế Mạnh Sinh Viên Quan Hệ Quốc Tế (IR Advantage)</span>
                </div>
                <p className="leading-relaxed text-amber-950 font-medium">{activeModalIdea.irAdvantage}</p>
              </div>

            </div>

            {/* Footer close */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModalIdea(null)}
                className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-2 rounded-xl text-xs sm:text-sm transition-all"
              >
                Đóng Cửa Sổ
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
