import { StartupIdea, PolicyItem, DeadlineKit, FeedbackReview } from '../types';

export const POLICIES_DATA: PolicyItem[] = [
  {
    id: 'qd-844',
    code: 'Quyết Định 844/QĐ-TTg',
    date: '18/05/2016',
    title: 'Đề Án Bản Lề Khởi Nghiệp ĐMST Đến Năm 2025',
    type: 'Đề Án Quốc Gia',
    summary: 'Đặt nền móng pháp lý và nguồn lực toàn diện cho hệ sinh thái khởi nghiệp đổi mới sáng tạo Việt Nam. Hỗ trợ ươm tạo, kết nối vốn và đào tạo chuyên sâu.',
    highlights: [
      'Xây dựng mạng lưới cố vấn, vườn ươm khởi nghiệp trường đại học',
      'Kết nối trực tiếp quỹ đầu tư mạo hiểm trong và ngoài nước',
      'Hoàn thiện cơ chế thử nghiệm và bảo hộ tài sản trí tuệ'
    ]
  },
  {
    id: 'luat-sme',
    code: 'Luật số 04/2017/QH14',
    date: '12/06/2017',
    title: 'Luật Hỗ Trợ Doanh Nghiệp Nhỏ Và Vừa (SME)',
    type: 'Luật Quốc Hội',
    summary: 'Chính thức luật hóa các chính sách ưu đãi tài chính, đất đai, không gian làm việc chung (coworking) và vườn ươm sáng tạo cho doanh nghiệp khởi nghiệp.',
    highlights: [
      'Hỗ trợ tiếp cận tín dụng ưu đãi và quỹ bảo lãnh tín dụng',
      'Miễn giảm chi phí tư vấn pháp lý, sở hữu trí tuệ và kiểm định',
      'Khuyến khích hợp tác công - tư (PPP) phát triển hệ sinh thái'
    ]
  },
  {
    id: 'nq-57',
    code: 'Nghị Quyết 57-NQ/TW & NQ 03/NQ-CP',
    date: '22/12/2024 & 09/01/2025',
    title: 'Đột Phá Phát Triển KH-CN, ĐMST & Chuyển Đổi Số',
    type: 'Nghị Quyết Bộ Chính Trị',
    summary: 'Xác định khoa học công nghệ, ĐMST và chuyển đổi số là đột phá chiến lược hàng đầu, tạo động lực tăng trưởng mới đưa đất nước vươn tầm kỷ nguyên mới.',
    highlights: [
      'Thương mại hóa nhanh kết quả nghiên cứu và sáng chế đại học',
      'Cơ chế sandbox mở rộng cho các mô hình kinh doanh số',
      'Đào tạo nguồn nhân lực chất lượng cao, hội nhập quốc tế'
    ]
  },
  {
    id: 'nq-68',
    code: 'Nghị Quyết 68-NQ/TW',
    date: '04/05/2025',
    title: 'Phát Huy Tiềm Năng & Vai Trò Của Kinh Tế Tư Nhân',
    type: 'Nghị Quyết Trung Ương',
    summary: 'Khẳng định kinh tế tư nhân là động lực quan trọng nhất của nền kinh tế thị trường định hướng XHCN, thúc đẩy môi trường kinh doanh thông thoáng, minh bạch.',
    highlights: [
      'Bảo vệ quyền sở hữu tài sản và quyền tự do kinh doanh',
      'Tạo sân chơi bình đẳng tiếp cận các nguồn lực quốc gia',
      'Khuyến khích doanh nghiệp trẻ vươn tầm thương hiệu toàn cầu'
    ]
  }
];

export const STARTUP_IDEAS: StartupIdea[] = [
  {
    id: 'idea-1',
    name: 'Lumivie',
    title: 'Nến Thơm 2 Vòng Đời Lộ Danh Lam Việt Nam',
    category: 'Quà tặng',
    insight: 'Nhu cầu nến thơm organic thư giãn tăng mạnh, nhưng sau khi đốt hết thì ly thủy tinh thường bị bỏ phí; đồng thời thiếu các quà tặng ngoại giao tinh tế mang biểu tượng văn hóa Việt Nam.',
    solution: 'Nến thơm sáp đậu nành thủ công kết hợp tinh dầu bản địa. Khi nến cháy hết, một mô hình thu nhỏ danh lam thắng cảnh Việt Nam (Chùa Một Cột, Cột cờ Hà Nội, Chợ Bến Thành) ẩn giấu bên trong lộ diện thành đồ decor vĩnh cửu.',
    targetAudience: 'Giới trẻ thành thị yêu thích lối sống thư thái, khách du lịch quốc tế, cơ quan ngoại giao và doanh nghiệp tìm quà lưu niệm.',
    irAdvantage: 'Vận dụng tư duy "Ngoại giao văn hóa" biến mỗi ngọn nến thành đại sứ kể câu chuyện di sản Việt Nam ra thế giới.',
    accentColor: 'from-amber-500/20 to-orange-500/10'
  },
  {
    id: 'idea-2',
    name: 'L’Amour Florist',
    title: 'Hoa Khô Nghệ Thuật Lưu Giữ Kỷ Niệm',
    category: 'Quà tặng',
    insight: 'Người tặng hoa thường tiếc nuối khi những bó hoa tươi đắt tiền nhanh tàn sau vài ngày; thị trường thiếu giải pháp hoa nghệ thuật mang giá trị vĩnh cửu.',
    solution: 'Ứng dụng công nghệ sấy thăng hoa giữ nguyên sắc hoa tự nhiên, phối cảnh ép trong khung tranh kính nghệ thuật hoặc hũ thủy tinh vi khí hậu, ghi dấu ngày kỷ niệm.',
    targetAudience: 'Cặp đôi, sinh viên ngày tốt nghiệp, đối tác ngoại giao trong lễ ký kết hợp tác.',
    irAdvantage: 'Hiểu tâm lý biểu đạt tình cảm và nghi thức lễ tân ngoại giao tinh tế qua biểu tượng hoa.',
    accentColor: 'from-rose-500/20 to-pink-500/10'
  },
  {
    id: 'idea-3',
    name: '4Shells',
    title: 'Ốp Điện Thoại Cá Nhân Hóa & Thân Thiện Môi Trường',
    category: 'Quà tặng',
    insight: 'Giới trẻ Gen Z liên tục thay đổi ốp lưng theo xu hướng nhưng lo ngại lượng rác thải nhựa phụ kiện điện thoại khó phân hủy.',
    solution: 'Dòng ốp lưng chế tác từ vật liệu nhựa sinh học phân hủy kết hợp dịch vụ khắc tên, in họa tiết nghệ thuật theo yêu cầu hoặc bộ kit tự trang trí DIY tại chỗ.',
    targetAudience: 'Học sinh, sinh viên, người tiêu dùng trẻ ưa chuộng phong cách cá nhân hóa và tiêu dùng bền vững.',
    irAdvantage: 'Bắt nhịp xu hướng lối sống ESG (Môi trường - Xã hội - Quản trị) đang phổ biến trên toàn cầu.',
    accentColor: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    id: 'idea-4',
    name: '36',
    title: 'Mô Hình Lắp Ráp Kiến Trúc Việt Nam',
    category: 'Quà tặng',
    insight: 'Đồ chơi mô hình lắp ráp (Lego) chủ yếu mang chủ đề phương Tây; giới trẻ khao khát sản phẩm rèn luyện tư duy không gian gắn với lịch sử và kiến trúc Việt.',
    solution: 'Bộ kit mô hình lắp ghép 3D tái hiện các công trình lịch sử và 36 phố phường Hà Nội, cung cấp theo mô hình bán đứt kèm dịch vụ cho thuê trải nghiệm tại không gian workshop.',
    targetAudience: 'Sinh viên, phụ huynh muốn giáo dục văn hóa cho con, du khách quốc tế thích văn hóa bản địa.',
    irAdvantage: 'Năng lực nghiên cứu tư liệu lịch sử, chuyển hóa tri thức bang giao thành sản phẩm giáo dục sáng tạo.',
    accentColor: 'from-amber-600/20 to-yellow-500/10'
  },
  {
    id: 'idea-5',
    name: 'Legends Never Die',
    title: 'Bộ Kit Thủ Công All-In-One Làm Búp Bê Nghệ Thuật',
    category: 'Quà tặng',
    insight: 'Nhiều người muốn tự tay làm đồ thủ công handmade để xả stress hoặc tặng quà ý nghĩa nhưng nản lòng vì phải tìm kiếm quá nhiều nguyên vật liệu nhỏ lẻ.',
    solution: 'Chiếc hộp All-In-One bao gồm đầy đủ len, vải, kim móc, phụ kiện và mã QR video hướng dẫn từng bước trực quan, giúp người mới hoàn toàn có thể tự hoàn thiện búp bê cá nhân.',
    targetAudience: 'Giới trẻ đam mê DIY thủ công, người làm việc văn phòng cần liệu pháp giải tỏa căng thẳng sau giờ làm việc.',
    irAdvantage: 'Tiếp cận xu hướng văn hóa "Craft Therapy" đang lan tỏa mạnh mẽ ở Bắc Mỹ và châu Âu.',
    accentColor: 'from-purple-500/20 to-indigo-500/10'
  },
  {
    id: 'idea-6',
    name: 'Deadline Kit',
    title: 'Bộ Cứu Cánh Deadline Toàn Diện Cho Sinh Viên',
    category: 'Dịch vụ',
    insight: 'Thói quen trì hoãn (procrastination) và áp lực dồn toa trước kỳ thi khiến sinh viên kiệt sức, mất tập trung và thiếu hụt dụng cụ học tập cần thiết.',
    solution: 'Hệ sinh thái 6 dòng túi chuyên biệt (Basic, Exam, Night, Presentation, Focus, Premium) tích hợp dụng cụ học tập, giải pháp tỉnh táo, quản lý Pomodoro và liệu pháp tinh thần.',
    targetAudience: 'Hơn 2 triệu học sinh, sinh viên các trường đại học, cao đẳng trên toàn quốc.',
    irAdvantage: 'Đánh trúng nỗi đau thực tế của chính cộng đồng sinh viên, khả năng mở rộng quy mô mạng lưới trường học thần tốc.',
    accentColor: 'from-blue-600/20 to-cyan-500/10'
  },
  {
    id: 'idea-7',
    name: 'Vừa Đi Vừa Sửa',
    title: 'Trạm Chụp Ảnh Lấy Liền Theo Mùa (Pop-up Photo Booth)',
    category: 'Dịch vụ',
    insight: 'Giới trẻ thích lưu giữ ảnh kỷ niệm tức thì dạng in ấn vật lý (photostrip) nhưng các studio lớn chi phí cao và thiếu không gian lưu động trong các sự kiện trường.',
    solution: 'Trạm photo booth di động trang bị máy in nhiệt chất lượng cao, khung hình thiết kế độc quyền theo chủ đề sự kiện (Tết, Valentine, Mùa tốt nghiệp, Hội thảo quốc tế).',
    targetAudience: 'Sinh viên, người tham gia ngày hội giao lưu thanh niên, sự kiện văn hóa đa quốc gia.',
    irAdvantage: 'Bắt trọn nhu cầu tương tác xã hội của giới trẻ trong môi trường giao lưu văn hóa quốc tế năng động.',
    accentColor: 'from-fuchsia-500/20 to-pink-500/10'
  },
  {
    id: 'idea-8',
    name: 'Cocerola',
    title: 'Đồ Gia Dụng & Chậu Cây Tự Hủy Từ Xơ Dừa',
    category: 'Sản phẩm gia dụng',
    insight: 'Lượng lớn phế phụ phẩm vỏ dừa tại Bến Tre bị lãng phí; người tiêu dùng tìm kiếm sản phẩm trồng cây thay thế chậu nhựa độc hại.',
    solution: 'Ép xơ dừa tự nhiên với chất kết dính hữu cơ tạo nên các sản phẩm chậu cây, khay đựng, đồ trang trí nội thất có khả năng tự phân hủy thành mùn hữu cơ bón đất.',
    targetAudience: 'Người yêu cây cảnh, quán cà phê sinh thái, dự án xanh của trường học và khách sạn boutique.',
    irAdvantage: 'Khai thác cam kết quốc tế Net Zero của Việt Nam tại COP26, nắm vững tiêu chuẩn xuất khẩu xanh.',
    accentColor: 'from-emerald-600/20 to-lime-500/10'
  },
  {
    id: 'idea-9',
    name: 'Michellin',
    title: 'Xà Bông Thảo Mộc Bao Bì Origami Kỳ Quan',
    category: 'Sản phẩm gia dụng',
    insight: 'Sản phẩm tắm gội hóa chất dễ kích ứng; xà bông handmade trên thị trường thường có bao bì đơn điệu, thiếu điểm nhấn văn hóa.',
    solution: 'Xà bông dầu dừa thảo mộc Việt Nam kết hợp bao bì giấy nghệ thuật Origami có thể mở bung ra bức tranh kỳ quan thế giới hoặc danh thắng Việt Nam.',
    targetAudience: 'Khách hàng quan tâm chăm sóc sức khỏe lành tính, khách du lịch và người chuộng quà tặng thẩm mỹ cao.',
    irAdvantage: 'Giao thoa nghệ thuật gấp giấy Nhật Bản với nguồn thảo dược bản địa Việt Nam, thể hiện tư duy kết nối văn hóa.',
    accentColor: 'from-teal-600/20 to-cyan-500/10'
  },
  {
    id: 'idea-10',
    name: 'Smart Watch Kid',
    title: 'Đồng Hồ Thông Minh Định Vị GPS An Toàn Cho Trẻ Em',
    category: 'Thiết bị hỗ trợ',
    insight: 'Phụ huynh lo lắng về an toàn của con em khi đi học và tham gia hoạt động ngoại khóa ngoài trời nhưng không muốn cho trẻ tiếp xúc sớm với smartphone.',
    solution: 'Đồng hồ thông minh trang bị định vị GPS đa tầng, nút khẩn cấp SOS một chạm, vùng an toàn ảo và giao diện ngộ nghĩnh kích thích trẻ vận động.',
    targetAudience: 'Các gia đình trẻ có con nhỏ từ 5 đến 12 tuổi, trường tiểu học và trung tâm kỹ năng sống.',
    irAdvantage: 'Tiếp thu các tiêu chuẩn an toàn bảo mật dữ liệu trẻ em theo quy chuẩn quốc tế (GDPR Kids).',
    accentColor: 'from-violet-600/20 to-purple-500/10'
  },
  {
    id: 'idea-11',
    name: 'TigerScrub',
    title: 'Tẩy Tế Bào Chết Thuần Chay Cà Phê & Bơ Dừa Bản Địa',
    category: 'Mỹ phẩm',
    insight: 'Người tiêu dùng làm đẹp ngày càng e ngại hạt vi nhựa trong mỹ phẩm tẩy da chết gây ô nhiễm đại dương và trầy xước da liễu.',
    solution: 'Bột cà phê Robusta Đắk Lắk xay siêu mịn kết hợp bơ dừa Bến Tre và dầu cám gạo, nuôi dưỡng màng ẩm tự nhiên của da mà không hại môi trường nước thải.',
    targetAudience: 'Phụ nữ và giới trẻ chuộng mỹ phẩm thuần chay (Vegan & Cruelty-Free), các spa dưỡng sinh.',
    irAdvantage: 'Nâng cao giá trị gia tăng cho nông sản xuất khẩu của Việt Nam theo chuẩn thương mại công bằng Fair Trade.',
    accentColor: 'from-amber-700/20 to-yellow-600/10'
  },
  {
    id: 'idea-12',
    name: 'Tiệm 4 Chị Em',
    title: 'Combo Sáng Bánh Mì + Cà Phê Siêu Tốc Cho Người Trẻ',
    category: 'Thực phẩm',
    insight: 'Sinh viên và dân văn phòng thường bỏ bữa sáng hoặc ăn qua loa vì không có thời gian xếp hàng chờ đợi.',
    solution: 'Mô hình điểm chạm đồ ăn nhanh tiện lợi "Fast - Tasty - Trendy" với combo chuẩn chỉnh bánh mì giòn nóng + cà phê đậm vị gói trong bao bì thân thiện chỉ mất 90 giây phục vụ.',
    targetAudience: 'Hơn 50.000 sinh viên và giảng viên tại các cụm trường đại học Bình Dương và TP.HCM.',
    irAdvantage: 'Kỹ năng vận hành logistics tinh gọn và năng lực thấu hiểu hành vi tiêu dùng địa phương.',
    accentColor: 'from-red-600/20 to-orange-500/10'
  },
  {
    id: 'idea-13',
    name: 'Foodsave',
    title: 'Nền Tảng Kỹ Thuật Số Giải Cứu Thực Phẩm Dư Thừa',
    category: 'Dịch vụ công nghệ',
    insight: 'Mỗi ngày hàng ngàn tiệm bánh, nhà hàng phải vứt bỏ thực phẩm thơm ngon cuối ngày, trong khi nhiều người thu nhập thấp hoặc sinh viên cần bữa ăn tiết kiệm.',
    solution: 'Ứng dụng di động kết nối người tiêu dùng mua các "Hộp đồ ăn bí ẩn" (Mystery Box) còn mới nguyên với mức giảm giá 50 - 70% vào các khung giờ vàng cuối ngày.',
    targetAudience: 'Sinh viên, người sống độc thân, chuỗi bánh mì, quán cà phê và siêu thị thực phẩm.',
    irAdvantage: 'Học tập giải pháp thành công toàn cầu (mô hình Too Good To Go châu Âu), áp dụng linh hoạt vào văn hóa ẩm thực Việt.',
    accentColor: 'from-blue-700/20 to-teal-500/10'
  }
];

export const DEADLINE_KITS_DATA: DeadlineKit[] = [
  {
    id: 'kit-basic',
    name: 'BASIC KIT',
    subtitle: 'Túi dụng cụ học tập hàng ngày',
    price: 55000,
    bestFor: 'Nhu cầu học tập cơ bản mỗi ngày trên giảng đường',
    description: 'Trang bị tối thiểu nhưng chuẩn chỉ, giúp bạn không bao giờ phải cuống cuồng mượn bút vở trước giờ điểm danh.',
    items: [
      '02 Bút gel mực đen/xanh êm ái ngòi 0.5mm',
      '01 Bút dạ quang nhớ dòng highlight màu pastel',
      '01 Sổ tay ghi chép mini khổ A6 lò xo tiện lợi',
      '01 Tệp giấy nhớ (Sticky notes) phân loại công việc',
      '01 Túi zip PVC chống nước bảo vệ đồ dùng'
    ]
  },
  {
    id: 'kit-exam',
    name: 'EXAM KIT',
    subtitle: 'Túi hỗ trợ ôn tập & thi cử bách chiến bách thắng',
    price: 89000,
    bestFor: 'Mùa thi cuối kỳ và giai đoạn ôn thi nước rút cao điểm',
    badge: 'Mùa Thi Best-Seller',
    description: 'Thiết kế chuẩn hóa cho phòng thi đại học, giúp hệ thống hóa kiến thức logic và chuẩn bị phong thái tự tin nhất.',
    items: [
      '01 Sổ tổng hợp kiến thức & Sơ đồ tư duy dạng kẻ lưới',
      '01 Xấp Flashcards học thuộc định nghĩa & từ vựng',
      'Bộ bút chì 2B thi trắc nghiệm kèm gọt chì và tẩy mềm chuyên dụng',
      '01 Bảng đếm ngược ngày thi (Exam Countdown Checklist)',
      '01 Thước kẻ chuẩn thi kèm sticker khích lệ tinh thần vững vàng'
    ]
  },
  {
    id: 'kit-night',
    name: 'NIGHT KIT',
    subtitle: 'Túi cứu cánh thức đêm cày deadline',
    price: 75000,
    bestFor: 'Sinh viên chạy đồ án, báo cáo nhóm thâu đêm',
    badge: 'Cú Đêm Yêu Thích',
    description: 'Trợ thủ đắc lực đánh bay cơn buồn ngủ, xoa dịu đôi mắt mỏi mệt khi phải nhìn màn hình máy tính liên tục nhiều giờ.',
    items: [
      '02 Gói trà thảo mộc tỉnh táo tự nhiên (bạc hà, sâm)',
      '01 Hộp kẹo ngậm the mát hương chanh muối chống buồn ngủ',
      '01 Đèn đọc sách LED mini cắm cổng USB bảo vệ mắt',
      '02 Miếng dán xoa dịu bọng mắt tinh chất cúc La Mã',
      '01 Bộ kẹp tài liệu phân loại đề mục & thiệp động lực truyền lửa'
    ]
  },
  {
    id: 'kit-presentation',
    name: 'PRESENTATION KIT',
    subtitle: 'Túi hỗ trợ thuyết trình chuyên nghiệp',
    price: 79000,
    bestFor: 'Báo cáo đề án môn học, thuyết trình trước hội đồng',
    description: 'Giải pháp nâng tầm phong thái diễn thuyết, giúp bạn tự tin làm chủ sân khấu và thuyết phục ban giám khảo.',
    items: [
      '01 Xấp Cue Cards ghi chú sườn bài nói viền màu phân đoạn',
      '01 Bút dạ bảng xóa được hoặc bút laser tích hợp tiện ích',
      '01 Sơ đồ kịch bản điều phối thời gian 15 phút thuyết trình',
      '01 Kẹp hồ sơ chuyên nghiệp trình bày bản in cho giảng viên',
      'Bộ checklist xử lý tình huống Q&A phản biện bất ngờ'
    ]
  },
  {
    id: 'kit-focus',
    name: 'FOCUS KIT',
    subtitle: 'Túi quản lý thời gian & tăng cường tập trung sâu',
    price: 99000,
    bestFor: 'Chống thói quen xao nhãng lướt điện thoại, rèn Pomodoro',
    badge: 'Hiệu Suất Vàng',
    description: 'Ứng dụng khoa học quản lý thời gian và hương thơm kích thích sóng não tập trung cao độ để bứt phá hiệu suất học tập.',
    items: [
      '01 Đồng hồ / Bảng theo dõi chu kỳ tập trung Pomodoro 25/5',
      '01 Nến thơm sáp đậu nành mini hương gỗ thông xả stress',
      '01 Cặp nút bịt tai bọt biển chống ồn môi trường ký túc xá',
      '01 Sổ Daily Planner lập kế hoạch 3 việc quan trọng nhất ngày',
      '01 Thẻ cam kết không chạm điện thoại trong 120 phút'
    ]
  },
  {
    id: 'kit-premium',
    name: 'PREMIUM ALL-IN-ONE KIT',
    subtitle: 'Túi tổng hợp cao cấp toàn diện',
    price: 149000,
    bestFor: 'Món quà khích lệ hoàn hảo nhất cho bản thân hoặc bạn bè',
    badge: 'Toàn Diện Đỉnh Cao',
    description: 'Tập hợp trọn vẹn tinh hoa của cả 5 dòng kit trên, đặt trong túi canvas cao cấp có quai đeo cùng quà tặng khắc tên.',
    items: [
      'Đầy đủ toàn bộ công cụ của Exam Kit, Night Kit và Focus Kit',
      '01 Túi tote canvas thời trang in logo IR25 Innovation Hub',
      '01 Ly giữ nhiệt mini thời thượng tiện pha trà học tập',
      'Dịch vụ in tên sinh viên và câu châm ngôn truyền cảm hứng riêng',
      'Thẻ VIP tham gia các buổi chia sẻ kỹ năng cùng chuyên gia QHQT'
    ]
  }
];

export const INITIAL_REVIEWS: FeedbackReview[] = [
  {
    id: 'rev-1',
    name: 'ThS. Nguyễn Văn Hải',
    contact: 'hai.nv@tdmu.edu.vn',
    rating: 5,
    topic: 'Nội Dung & Chính Sách',
    comment: 'Rất ấn tượng với cách sinh viên QHQT kết nối bài bản giữa các nghị quyết Trung ương (NQ 57, NQ 68) với thực tiễn khởi nghiệp của trường. Đề tài thể hiện tư duy học thuật sắc sảo và tầm nhìn chiến lược.',
    timestamp: '2026-10-24 14:32',
    badge: 'Giảng viên TDMU'
  },
  {
    id: 'rev-2',
    name: 'Trần Minh Anh (K23 QHQT)',
    contact: 'minhanh.ir@gmail.com',
    rating: 5,
    topic: 'Sản Phẩm Gian Hàng',
    comment: 'Mình đã thử gà rán sốt bơ tỏi và set Gimbap gạo lứt của MsSlim tại gian hàng IR25. Hương vị quá tuyệt vời, ăn no mà không hề ngấy. Đặc biệt dòng Deadline Night Kit cực kỳ cần thiết cho sinh viên năm cuối!',
    timestamp: '2026-10-25 09:15',
    badge: 'Sinh viên'
  },
  {
    id: 'rev-3',
    name: 'Lê Hoàng Nam',
    contact: 'nam.le@startupviet.vn',
    rating: 5,
    topic: '12 Ý Tưởng Khởi Nghiệp',
    comment: 'Ý tưởng Lumivie nến thơm giấu mô hình danh lam thắng cảnh Việt Nam rất sáng tạo, có tiềm năng thương mại hóa thành quà tặng đối ngoại. Hy vọng nhóm sẽ mang dự án này tham gia TECHFEST năm tới!',
    timestamp: '2026-10-25 11:40',
    badge: 'Mentor Khởi nghiệp'
  }
];
