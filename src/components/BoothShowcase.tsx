import React, { useState } from 'react';
import { 
  Store, 
  Utensils, 
  Package, 
  Gem, 
  HeartHandshake, 
  Sparkles, 
  Clock, 
  Flame, 
  Coffee, 
  Target,
  Compass,
  ArrowRight,
  Globe2,
  FileText
} from 'lucide-react';

export const BoothShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tiem4chiem' | 'deadlinekit' | 'ngocphithuy' | 'kimbap' | 'vietitaly'>('tiem4chiem');

  return (
    <section id="booth-showcase" className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm">
          7
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
            Sản Phẩm Gian Hàng "IR25 Innovation Hub"
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Mô hình thực chiến trưng bày, thương mại hóa và phục vụ người tiêu dùng tại ngày hội
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto custom-scrollbar gap-2 p-1.5 bg-slate-100 rounded-2xl mb-8">
        
        <button
          onClick={() => setActiveTab('tiem4chiem')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'tiem4chiem'
              ? 'bg-blue-950 text-white shadow-sm'
              : 'text-slate-600 hover:text-blue-950 hover:bg-white/60'
          }`}
        >
          <Utensils className="w-4 h-4 text-red-400" />
          <span>1. Tiệm 4 Chị Em</span>
        </button>

        <button
          onClick={() => setActiveTab('deadlinekit')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'deadlinekit'
              ? 'bg-blue-950 text-white shadow-sm'
              : 'text-slate-600 hover:text-blue-950 hover:bg-white/60'
          }`}
        >
          <Package className="w-4 h-4 text-blue-400" />
          <span>2. Deadline Kit</span>
        </button>

        <button
          onClick={() => setActiveTab('ngocphithuy')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'ngocphithuy'
              ? 'bg-blue-950 text-white shadow-sm'
              : 'text-slate-600 hover:text-blue-950 hover:bg-white/60'
          }`}
        >
          <Gem className="w-4 h-4 text-emerald-400" />
          <span>3. Ngọc Phỉ Thúy Myanmar</span>
        </button>

        <button
          onClick={() => setActiveTab('kimbap')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'kimbap'
              ? 'bg-blue-950 text-white shadow-sm'
              : 'text-slate-600 hover:text-blue-950 hover:bg-white/60'
          }`}
        >
          <HeartHandshake className="w-4 h-4 text-amber-400" />
          <span>4. Gimbap Gạo Lứt x MsSlim</span>
        </button>

        <button
          onClick={() => setActiveTab('vietitaly')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'vietitaly'
              ? 'bg-blue-950 text-white shadow-sm'
              : 'text-slate-600 hover:text-blue-950 hover:bg-white/60'
          }`}
        >
          <Store className="w-4 h-4 text-rose-400" />
          <span>5. Ẩm Thực Việt – Ý</span>
        </button>

      </div>

      {/* Tab 1: Tiệm 4 Chị Em */}
      {activeTab === 'tiem4chiem' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-gradient-to-r from-red-950 via-rose-900 to-blue-950 text-white p-6 sm:p-8 rounded-3xl shadow-md border border-red-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Giải Pháp Ẩm Thực Tiện Lợi Sinh Viên
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Tiệm 4 Chị Em</h3>
              <p className="text-xs sm:text-sm text-rose-100 mt-1">
                Tiêu chí chiến lược: <strong>Fast - Tasty - Trendy</strong> (Nhanh chóng – Chuẩn vị – Bắt xu hướng)
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-2xl text-center">
              <span className="block text-amber-300 font-bold text-xs">Slogan định vị</span>
              <span className="italic text-white text-sm">"Giòn tan đậm sốt – Sảng khoái từng ngụm nước"</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Dish 1 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold mb-4">
                  <Flame className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-blue-950 text-base mb-2">
                  Gà Rán Viên Sốt Cay Ngọt Popcorn
                </h4>
                <p className="text-xs text-slate-600 mb-3">
                  Ức và đùi gà tươi lóc xương tẩm ướp bột chiên giòn Popcorn giòn rụm, quyện sốt Yangnyeom đỏ óng.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <p>• <strong>Hương vị:</strong> Cay nhẹ tương ớt Gochujang, ngọt thanh hậu vị mật ong.</p>
                  <p>• <strong>USP:</strong> Đúng chuẩn street-food Hàn Quốc, màu sắc bắt mắt, ăn ngay tiện lợi.</p>
                </div>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-blue-950 text-base mb-2">
                  Gà Rán Viên Sốt Bơ Tỏi
                </h4>
                <p className="text-xs text-slate-600 mb-3">
                  Gà giòn rụm lắc sốt bơ thực vật béo ngậy, phủ đầy tỏi phi giòn tan và ngò tây khô thơm phức.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <p>• <strong>Hương vị:</strong> Béo ngậy, mặn ngọt hài hòa, tỏi phi giòn sần sật.</p>
                  <p>• <strong>USP:</strong> Hương vị quốc dân chiều lòng mọi thực khách từ sinh viên đến giảng viên.</p>
                </div>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                  <Coffee className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-blue-950 text-base mb-2">
                  Nước Ngọt Có Ga Ướp Lạnh
                </h4>
                <p className="text-xs text-slate-600 mb-3">
                  Định lượng 350ml – 500ml ướp đá lạnh sâu, phục vụ trong ly giấy thân thiện bảo vệ môi trường.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <p>• <strong>Hương vị:</strong> Ngọt thanh, bọt ga sảng khoái bùng nổ năng lượng.</p>
                  <p>• <strong>USP:</strong> Cân bằng vị giác hoàn hảo, giải ngấy tức thì khi thưởng thức cùng đồ chiên.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Tab 2: Deadline Kit (Updated strictly with user provided image 1 content) */}
      {activeTab === 'deadlinekit' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Main Showcase Hero */}
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-6 sm:p-8 rounded-3xl shadow-md border border-amber-500/30">
            <div className="max-w-4xl space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Phần 7.2 · Dự Án Khởi Nghiệp Thực Chiến
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Dự Án Deadline Kit
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Giải pháp toàn diện và thực chiến, giúp tối ưu hóa thời gian chuẩn bị, mang lại sự tiện lợi và đồng hành cùng sinh viên vượt qua áp lực học tập.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Content Card - Bối Cảnh & Giải Pháp */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                    <Compass className="w-4 h-4 text-amber-600" />
                    <span>Bối Cảnh Thực Tiễn Học Đường</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    Trong môi trường học tập hiện đại, học sinh và sinh viên liên tục phải đối mặt với áp lực thi cử, bài tập nhóm, thuyết trình và các mốc thời hạn (deadline) dày đặc. Việc chuẩn bị lặt vặt các dụng cụ học tập, lập kế hoạch không hiệu quả hoặc thiếu công cụ hỗ trợ tinh thần vào những giai đoạn “chạy deadline” cao điểm thường dẫn đến tình trạng căng thẳng, mất tập trung và giảm hiệu suất công việc.
                  </p>
                </div>

                {/* Sứ mệnh ra đời */}
                <div className="bg-blue-50/70 p-5 rounded-2xl border-l-4 border-l-blue-950 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-blue-950 font-bold leading-snug">
                      Deadline Kit ra đời như một giải pháp toàn diện và thực chiến, giúp tối ưu hóa thời gian chuẩn bị, mang lại sự tiện lợi và đồng hành cùng sinh viên vượt qua áp lực học tập.
                    </p>
                  </div>
                </div>
              </div>

              {/* Document Reference Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-blue-950">
                  <FileText className="w-4 h-4 text-amber-600" /> Trích dẫn hồ sơ dự án thực chiến lớp D25QHQT02
                </span>
                <span>TDMU · 2026</span>
              </div>

            </div>

            {/* Right Card - Mục Tiêu Dự Án (7.2.1) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-blue-950 font-black text-lg mb-1">
                  <Target className="w-5 h-5 text-amber-600" />
                  <h4>7.2.1. Mục Tiêu Của Dự Án</h4>
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  Định hướng phát triển ngắn hạn và tầm nhìn thương hiệu dài hạn
                </p>

                <div className="space-y-4">
                  {/* Short-term goal */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs sm:text-sm uppercase mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      Mục Tiêu Ngắn Hạn
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      Cung cấp bộ giải pháp học tập đóng gói sẵn, tiện lợi, giá cả hợp lý cho cộng đồng học sinh, sinh viên.
                    </p>
                  </div>

                  {/* Long-term goal */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm uppercase mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                      Mục Tiêu Dài Hạn
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      Xây dựng thương hiệu đồng hành cùng văn hóa học tập chủ động, giúp giảm thiểu bớt áp lực deadline và nâng cao kỹ năng quản lý thời gian cho người trẻ.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Takeaway */}
              <div className="text-[11px] text-slate-500 bg-white/80 p-3.5 rounded-xl border border-slate-200/80">
                <span className="font-bold text-slate-700">Giá trị cốt lõi:</span> Giúp sinh viên chuyển từ trạng thái ứng phó bị động sang thế chủ động làm chủ thời gian và hiệu suất học tập.
              </div>

            </div>

          </div>

        </div>
      )}

      {/* Tab 3: Ngọc Phỉ Thúy Myanmar */}
      {activeTab === 'ngocphithuy' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-blue-950 text-white p-6 sm:p-8 rounded-3xl shadow-md border border-emerald-400/30">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-300">
              Jadeite Myanmar Premium · Ngoại Giao Văn Hóa Phương Đông
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Ngọc Phỉ Thúy Myanmar</h3>
            <p className="text-xs sm:text-sm text-emerald-100 mt-2 leading-relaxed max-w-3xl">
              Được tôn vinh là "Vua của các loại ngọc", biểu trưng cho sự tôn nghiêm, bình an, vượng khí và may mắn trường tồn. Trong quan hệ đối ngoại phương Đông, ngọc phỉ thúy là món quà bang giao thể hiện sự trân trọng và hòa hợp bền chặt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-900 mx-auto flex items-center justify-center font-black text-lg mb-3 shadow-inner">
                LỤC
              </div>
              <h4 className="font-extrabold text-blue-950 text-base mb-1">Lục Phỉ (Xanh Ngọc)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sắc xanh ngọc lục bảo tôn quý, biểu trưng cho sự đâm chồi nảy lộc, vượng khí tài chính và dung hòa năng lượng sống.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-900 mx-auto flex items-center justify-center font-black text-lg mb-3 shadow-inner">
                TỬ
              </div>
              <h4 className="font-extrabold text-blue-950 text-base mb-1">Tử La Lan (Sắc Tím)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sắc tím hoàng gia quý phái, mang lại sự tĩnh tại, an yên cho tâm hồn và sự minh mẫn trong mọi quyết định chiến lược.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-900 mx-auto flex items-center justify-center font-black text-lg mb-3 shadow-inner">
                HỒNG
              </div>
              <h4 className="font-extrabold text-blue-950 text-base mb-1">Hồng Phỉ (Sắc Đỏ Hồng)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sắc đỏ hồng ấm áp, thu hút duyên lành, tình cảm gắn kết và nguồn năng lượng tích cực lan tỏa đến mọi người xung quanh.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-900 mx-auto flex items-center justify-center font-black text-lg mb-3 shadow-inner">
                HOÀNG
              </div>
              <h4 className="font-extrabold text-blue-950 text-base mb-1">Hoàng Phỉ (Sắc Vàng)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sắc vàng hoàng gia rực rỡ, tượng trưng cho uy quyền, bản lĩnh người dẫn đầu và sự hanh thông trên đường công danh.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Tab 4: Gimbap Gạo Lứt x MsSlim */}
      {activeTab === 'kimbap' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-blue-950 text-white p-6 sm:p-8 rounded-3xl shadow-md border border-amber-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Đồng Hành Nghiên Cứu Cùng Thương Hiệu MsSlim
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Gimbap Gạo Lứt Healthy</h3>
              <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                Slogan: <em>"Thỏa mãn cơn thèm – Chẳng lo tích mỡ"</em> · Triết lý: <strong>"Ăn Hoài Không Mập"</strong>
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 p-3 rounded-2xl text-center text-xs">
              <span className="block text-amber-300 font-bold">Công nghệ độc quyền</span>
              <span className="text-white">Giảm 50% Calo Tinh Bột</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-base">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>4 Năm – 3 Tiến Sĩ – 2 Quốc Gia</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Được phát triển dựa trên công trình nghiên cứu giảm 50% calo của TS. Thavarajah (Đại học Saskatchewan, Canada / Sri Lanka) kết hợp triết lý thực dưỡng Nhật Bản của TS. Hiroki Kotabe (Nhật / Mỹ) cùng tinh hoa nông sản Việt Nam.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-base">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>Gạo Lứt Tím Huyền Thoại (Kỹ sư Hồ Quang Cua)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hạt gạo thảo dược chứa tới <strong className="text-emerald-700">1.296 mg Anthocyanin/kg</strong> – hoạt chất chống oxy hóa tự nhiên cực mạnh giúp trẻ hóa tế bào, kiểm soát đường huyết và bảo vệ hệ tim mạch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-base">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span>Công Nghệ Nấu Chậm 36 Giờ Độc Đáo</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Quy trình ủ nấu chậm cùng các loại đậu và chiết xuất nấm Shiitake Nhật Bản giúp hạt cơm dẻo mềm như cơm trắng, không bị khô xơ mà đậm đà vị ngọt tự nhiên của đất trời.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-950 font-bold text-base">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>Chuyển Hóa Tinh Bột Kháng & Cấp Đông IQF</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Biến đổi cấu trúc tinh bột hấp thu nhanh thành "kháng tinh bột" (Resistant Starch) hoạt động như chất xơ, cung cấp thức ăn cho lợi khuẩn đường ruột mà hoàn toàn không tích tụ mỡ thừa.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Tab 5: Ẩm Thực Việt – Ý (Updated with user narrative, removed menu table) */}
      {activeTab === 'vietitaly' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-red-950 via-rose-900 to-emerald-950 text-white p-6 sm:p-8 rounded-3xl shadow-md border border-amber-500/30">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-300 mb-2">
              <Globe2 className="w-4 h-4" />
              <span>Không Gian Giao Thoa Văn Hóa Ẩm Thực Đông – Tây</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Gian Hàng Ẩm Thực Việt – Ý
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              Sáng 26/10/2026 · Nhóm 1 · Lớp D25QHQT02 · Trường Đại học Thủ Dầu Một
            </p>
          </div>

          {/* Diplomatic Narrative Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            
            {/* Background flag hues */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="max-w-3xl mx-auto space-y-6 text-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full text-xs font-bold text-blue-950">
                <span>Ý (Italia 🇮🇹)</span>
                <span className="text-slate-400">×</span>
                <span>Việt Nam 🇻🇳</span>
                <span className="text-slate-300">|</span>
                <span className="text-amber-700">Cơ Chế Hợp Tác Song Phương</span>
              </div>

              {/* Core Diplomatic Quote */}
              <blockquote className="text-base sm:text-xl lg:text-2xl font-bold text-blue-950 leading-relaxed italic">
                “Một bên mang tư duy hiện đại, chuẩn mực của nước Ý; một bên giữ trọn nét truyền thống, linh hoạt của Việt Nam. Đây không chỉ là một bữa ăn, mà là một 'Cơ chế hợp tác song phương' hoàn hảo, nơi các nền văn hóa không hòa tan mà tôn vinh lẫn nhau.”
              </blockquote>

              {/* Action Callout */}
              <div className="pt-2 p-5 bg-gradient-to-r from-amber-50/80 via-white to-amber-50/80 rounded-2xl border border-amber-200/80 shadow-sm">
                <p className="text-sm sm:text-base font-extrabold text-amber-900 leading-snug">
                  Hai lựa chọn, một combo mang tính chiến lược đang chờ các “nhà ngoại giao tương lai” đến khám phá và ký kết nghiệm thu!
                </p>
              </div>

              {/* Philosophical takeaway */}
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                Minh chứng sinh động cho việc sinh viên Quan hệ Quốc tế vận dụng nghệ thuật bang giao và triết lý hòa hợp văn hóa vào sản phẩm thực tế của ngày hội khởi nghiệp.
              </p>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};
