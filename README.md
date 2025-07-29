# Sơ đồ Tổ chức - Báo và Phát thanh – Truyền hình Cần Thơ

## 📋 Mô tả

Đây là trang web hiển thị sơ đồ tổ chức của Báo và Phát thanh – Truyền hình Cần Thơ với giao diện hiện đại, 3D và hỗ trợ chế độ giao diện sáng/tối.

## ✨ Tính năng chính

### 🎨 Giao diện
- **Thiết kế hiện đại 3D** với hiệu ứng parallax và animation mượt mà
- **Chế độ giao diện sáng/tối** có thể chuyển đổi dễ dàng
- **Responsive design** tương thích với mọi thiết bị
- **Hiệu ứng hover** và animation tương tác

### 🔍 Tìm kiếm
- Tìm kiếm theo tên hoặc chức vụ
- Kết quả tìm kiếm real-time
- Hiệu ứng filter mượt mà

### 🎯 Tương tác
- **3D tilt effect** cho các card
- **Magnetic effect** khi hover
- **Glitch effect** cho tiêu đề
- **Particle system** động
- **Mouse trail effect**

### 📱 Điều hướng
- **Floating action buttons** (Scroll to top, Theme toggle)
- **Keyboard shortcuts** (Ctrl+T để chuyển theme, Esc để xóa tìm kiếm)
- **Smooth scrolling**

## 🚀 Cách sử dụng

### Chuyển đổi theme
- Click vào nút theme toggle (góc dưới bên phải)
- Hoặc sử dụng phím tắt `Ctrl + T`

### Tìm kiếm
- Sử dụng ô tìm kiếm ở đầu trang
- Nhập tên hoặc chức vụ để tìm kiếm
- Nhấn `Esc` để xóa tìm kiếm

### Điều hướng
- Sử dụng nút "Scroll to top" để quay về đầu trang
- Các link navigation ở header để chuyển đổi view

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc trang
- **CSS3** - Styling với CSS Variables và Flexbox/Grid
- **JavaScript (ES6+)** - Tương tác và animation
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📁 Cấu trúc file

```
landingpage-orgchart-cantho/
├── index.html          # Trang chính (Modern 3D view)
├── modern-styles.css   # Styles cho giao diện
├── modern-script.js    # JavaScript functionality
├── orgchart.html       # Org Chart view (nếu có)
├── card-view.html      # Card view (nếu có)
└── README.md          # Hướng dẫn này
```

## 🎨 Theme System

### Dark Theme (Mặc định)
- Background: Gradient tối với màu xanh đen
- Text: Trắng và xám nhạt
- Accent: Xanh tím gradient
- Cards: Semi-transparent với blur effect

### Light Theme
- Background: Gradient sáng với màu trắng
- Text: Xanh đậm và xám
- Accent: Xanh tím gradient (giữ nguyên)
- Cards: Semi-transparent nhẹ với blur effect

## 🔧 Tính năng kỹ thuật

### Performance
- **Intersection Observer** cho lazy loading animation
- **RequestAnimationFrame** cho smooth scrolling
- **CSS transitions** cho theme switching
- **LocalStorage** để lưu theme preference

### Accessibility
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** themes
- **Focus indicators**

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📊 Cấu trúc tổ chức

### Ban Lãnh đạo
- **Tổng Biên tập**: Huỳnh Hoàng Mến
- **8 Phó Tổng Biên tập** với thông tin background

### Các Phòng Ban
1. **Phòng Thời sự** - Trưởng phòng: Đinh Công Nguyện
2. **Phòng Chuyên đề** - Trưởng phòng: Nguyễn Tấn Cường
3. **Phòng Văn hóa – Giải trí** - Trưởng phòng: Dương Trọng Danh
4. **Phòng Sản xuất chương trình** - Trưởng phòng: Lê Băng Thạch
5. **Phòng Phát thanh** - Trưởng phòng: Phạm Kiều Diễm
6. **Phòng Tiếng dân tộc** - Trưởng phòng: Lý Văn Thương
7. **Phòng Thư ký – Biên tập** - Trưởng phòng: Trần Nguyễn Thụy Sỹ Huiên
8. **Phòng Truyền thông số** - Trưởng phòng: Phạm Thị Hà Linh
9. **Phòng Kỹ thuật và Công nghệ** - Trưởng phòng: Lê Việt Khoa
10. **Phòng Tổ chức – Hành chính** - Phụ trách: Phạm Thị Cẩm Hoa
11. **Phòng Tài chính** - Trưởng phòng: Trần Tuyết Nhung
12. **Phòng Bạn đọc – Khán – Thính giả** - Trưởng phòng: Bùi Trí Thức
13. **Phòng Dịch vụ – Phát hành – Quảng cáo** - Trưởng phòng: Lưu Quang Bình

## 🚀 Deployment

### Local Development
1. Clone repository
2. Mở `index.html` trong browser
3. Hoặc sử dụng local server:
   ```bash
   python -m http.server 8000
   # hoặc
   npx serve .
   ```

### Production
- Upload tất cả file lên web server
- Đảm bảo HTTPS cho security
- Cấu hình caching cho performance

## 📝 Changelog

### v1.0.0
- ✅ Giao diện Modern 3D với hiệu ứng
- ✅ Chế độ giao diện sáng/tối
- ✅ Tìm kiếm real-time
- ✅ Responsive design
- ✅ Animation và interaction effects
- ✅ Keyboard shortcuts
- ✅ LocalStorage cho theme preference

## 🤝 Đóng góp

Nếu bạn muốn đóng góp vào dự án:
1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push và tạo Pull Request

## 📄 License

© 2024 Báo và Phát thanh – Truyền hình Cần Thơ. Tất cả quyền được bảo lưu.

---

**Lưu ý**: Trang web này được thiết kế để hiển thị thông tin tổ chức một cách trực quan và hiện đại. Mọi thông tin về nhân sự đều được cập nhật theo cơ cấu tổ chức hiện tại. 