import React from 'react';
import { POLICIES_DATA } from '../data/hubData';
import { FileText, Scale, Cpu, Building2, CheckCircle2 } from 'lucide-react';

export const PolicyFramework: React.FC = () => {
  const getPolicyIcon = (id: string) => {
    switch (id) {
      case 'qd-844':
        return <FileText className="w-6 h-6 text-amber-600" />;
      case 'luat-sme':
        return <Scale className="w-6 h-6 text-blue-900" />;
      case 'nq-57':
        return <Cpu className="w-6 h-6 text-purple-700" />;
      case 'nq-68':
        return <Building2 className="w-6 h-6 text-emerald-700" />;
      default:
        return <FileText className="w-6 h-6 text-slate-700" />;
    }
  };

  return (
    <section id="policies" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm">
          2
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
            Đề Án, Nghị Quyết & Chính Sách Tiêu Biểu
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Nền tảng pháp lý vững chắc và định hướng chiến lược quốc gia mở đường cho khởi nghiệp sáng tạo
          </p>
        </div>
      </div>

      {/* Grid of Policies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {POLICIES_DATA.map((policy) => (
          <div
            key={policy.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/90 hover:shadow-md hover:border-amber-400/80 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Icon & Category Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {getPolicyIcon(policy.id)}
                </div>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                  {policy.type}
                </span>
              </div>

              {/* Policy Code & Title */}
              <h3 className="text-base font-extrabold text-blue-950 mb-1 leading-snug">
                {policy.code}
              </h3>
              <p className="text-xs text-slate-500 font-medium mb-3">
                Ngày ban hành: {policy.date}
              </p>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-800 mb-3">
                {policy.title}
              </h4>

              {/* Summary */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {policy.summary}
              </p>
            </div>

            {/* Highlights */}
            <div className="border-t border-slate-100 pt-3 space-y-2">
              <span className="text-[11px] font-bold text-slate-700 block">Trọng tâm then chốt:</span>
              {policy.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">{item}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Connection with Students Footer Note */}
      <div className="mt-8 bg-blue-50/70 border border-blue-200/70 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-900 shrink-0"></div>
          <p className="text-xs sm:text-sm text-blue-950 font-medium">
            <strong>Góc nhìn QHQT:</strong> Nắm vững hệ thống văn bản pháp lý quốc gia và các hiệp định thương mại thế hệ mới (CPTPP, EVFTA) giúp sinh viên thiết kế dự án đáp ứng đầy đủ quy chuẩn pháp lý và tiêu chuẩn quốc tế ngay từ giai đoạn ý tưởng.
          </p>
        </div>
      </div>

    </section>
  );
};
