import React from 'react';
import { Lightbulb, Award, Users, Trophy, Leaf, Zap, Target } from 'lucide-react';

export const StudentStartupLandscape: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm">
          4
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
            Bức Tranh Sinh Viên Việt Nam Khởi Nghiệp
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Thống kê 7 năm triển khai Đề án 1665 (Hỗ trợ học sinh, sinh viên khởi nghiệp đến năm 2025)
          </p>
        </div>
      </div>

      {/* 4 Large Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 mx-auto flex items-center justify-center mb-2">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-blue-950">42,000+</div>
          <div className="text-xs text-slate-600 font-medium mt-1">Dự án khởi nghiệp được ươm tạo</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 mx-auto flex items-center justify-center mb-2">
            <Trophy className="w-5 h-5" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-600">3,500+</div>
          <div className="text-xs text-slate-600 font-medium mt-1">Cuộc thi ý tưởng sáng tạo học đường</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center mb-2">
            <Users className="w-5 h-5" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-800">480,000+</div>
          <div className="text-xs text-slate-600 font-medium mt-1">Lượt sinh viên thanh niên tham gia</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 mx-auto flex items-center justify-center mb-2">
            <Award className="w-5 h-5" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-purple-900">23,000+</div>
          <div className="text-xs text-slate-600 font-medium mt-1">Ý tưởng dự án được ghi nhận chính thức</div>
        </div>

      </div>

      {/* 3 Traits & Case Study Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* 3 Traits */}
        <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-3">
              3 Đặc Điểm Nổi Bật Của Thế Hệ Sinh Viên Khởi Nghiệp Hiện Nay
            </h3>

            <div className="space-y-3">
              
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-base shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-blue-950">
                    1. Năng Động, Sáng Tạo & Tinh Thần Dấn Thân
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Chủ động thành lập nhóm liên ngành, khai thác mạng lưới nghiên cứu khoa học, câu lạc bộ học thuật và các phòng lab ươm tạo tại trường đại học.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold text-base shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-blue-950">
                    2. Nhạy Bén Với Công Nghệ & Nền Tảng Số
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Sử dụng thành thạo AI, dữ liệu lớn, no-code và mạng xã hội để khảo sát thị trường tức thì, xác thực MVP và tối ưu hóa chi phí vận hành.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-base shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-blue-950">
                    3. Tập Trung Giải Quyết Nỗi Đau Thực Tế Của Cộng Đồng
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Dự án gắn liền với các vấn đề cấp bách: rác thải nông nghiệp, năng lượng tái tạo, học tập cá nhân hóa, áp lực deadline và sức khỏe tinh thần.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Featured Project Showcase: S2M */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-emerald-400/30 flex flex-col justify-between relative overflow-hidden">
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400/30 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Dự Án Sinh Viên Tiêu Biểu</span>
              </span>
              <span className="text-xs text-emerald-200 font-semibold">SV-Startup 2024</span>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Dự Án S2M – Da Từ Vỏ Xoài
              </h4>
              <p className="text-xs text-emerald-200 font-medium">
                Nhóm sinh viên Đại học Cần Thơ · Giải Khuyến khích Cuộc thi "Học sinh, sinh viên với ý tưởng khởi nghiệp" Lần thứ VI (Bộ GD&ĐT)
              </p>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-2">
                Tận dụng phế phụ phẩm nông nghiệp tại Đồng bằng sông Cửu Long (vỏ xoài) để sản xuất vật liệu da sinh học thân thiện môi trường, có độ bền cơ học cao, thay thế da động vật và các loại nhựa tổng hợp PU/PVC độc hại.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-500/30 text-xs text-emerald-100 flex items-start gap-2 bg-emerald-900/40 p-3.5 rounded-xl">
            <Leaf className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Bài học truyền cảm hứng:</strong> Biến tài nguyên bản địa Việt Nam thành giá trị gia tăng toàn cầu bằng công nghệ sinh học và tư duy kinh tế tuần hoàn.
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};
