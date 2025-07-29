# Sơ đồ Tổ chức - Báo và Phát thanh – Truyền hình Cần Thơ

## 📋 Mô tả

Đây là trang web landing page hiện đại và đẹp mắt trình bày sơ đồ tổ chức của Báo và Phát thanh – Truyền hình Cần Thơ. Trang web được thiết kế với giao diện responsive, hiệu ứng animation mượt mà và trải nghiệm người dùng tối ưu.

## ✨ Tính năng

### 🎨 Thiết kế hiện đại
- Giao diện glassmorphism với hiệu ứng blur
- Gradient màu sắc đẹp mắt
- Typography hiện đại với font Inter
- Icons từ Font Awesome

### 📱 Responsive Design
- Tương thích với mọi thiết bị (desktop, tablet, mobile)
- Layout tự động điều chỉnh theo kích thước màn hình
- Touch-friendly trên thiết bị di động

### 🎭 Hiệu ứng Animation
- Fade-in animation khi scroll
- Hover effects trên các card
- Smooth scrolling
- Loading animation
- Counter animation cho thống kê

### 🔍 Tính năng tương tác
- Tìm kiếm theo tên hoặc chức vụ
- Click để mở rộng/thu gọn thông tin phòng ban
- Nút scroll to top
- Keyboard navigation (ESC để xóa tìm kiếm)

### 📊 Thống kê
- Hiển thị số lượng Phó Tổng Biên tập
- Số lượng Phòng Ban
- Tổng số cán bộ lãnh đạo

## 🏗️ Cấu trúc dự án

```
landingpage-orgchart-cantho/
├── index.html          # File HTML chính
├── styles.css          # File CSS với thiết kế
├── script.js           # File JavaScript với tương tác
└── README.md           # Hướng dẫn sử dụng
```

## 🚀 Cách sử dụng

### Chạy trực tiếp
1. Mở file `index.html` trong trình duyệt web
2. Hoặc sử dụng live server:
   ```bash
   # Nếu có Python
   python -m http.server 8000
   
   # Nếu có Node.js
   npx live-server
   ```

### Tính năng chính

#### 🔍 Tìm kiếm
- Nhập tên hoặc chức vụ vào ô tìm kiếm
- Kết quả sẽ được lọc real-time
- Nhấn ESC để xóa tìm kiếm

#### 📋 Xem thông tin
- Click vào header của phòng ban để mở rộng/thu gọn
- Hover vào các card để xem hiệu ứng
- Scroll để xem animation fade-in

#### 📊 Thống kê
- Xem số liệu thống kê tổ chức
- Counter animation khi scroll đến phần thống kê

## 🎨 Thiết kế

### Màu sắc chủ đạo
- **Primary**: `#667eea` (Xanh dương)
- **Secondary**: `#764ba2` (Tím)
- **Text**: `#2d3748` (Xám đậm)
- **Background**: Gradient từ primary đến secondary

### Typography
- **Font chính**: Inter (Google Fonts)
- **Font weights**: 300, 400, 500, 600, 700
- **Line height**: 1.6

### Layout
- **Container**: Max-width 1200px
- **Grid**: CSS Grid với auto-fit
- **Spacing**: Consistent padding và margin
- **Border radius**: 15px cho cards, 25px cho buttons

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa biến CSS trong `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #2d3748;
    --background-color: #f7fafc;
}
```

### Thêm phòng ban mới
Thêm HTML trong section `departments`:
```html
<div class="department-card">
    <div class="department-header">
        <i class="fas fa-icon-name"></i>
        <h3>Tên Phòng Ban</h3>
        <div class="department-leader">
            <span class="leader-title">Trưởng phòng:</span>
            <span class="leader-name">Tên Trưởng phòng</span>
        </div>
    </div>
    <div class="department-content">
        <h4>Phó Trưởng phòng:</h4>
        <ul class="deputy-list">
            <li>Tên Phó Trưởng phòng 1</li>
            <li>Tên Phó Trưởng phòng 2</li>
        </ul>
    </div>
</div>
```

## 🌟 Tính năng nâng cao

### Performance
- Lazy loading cho animations
- Optimized CSS với GPU acceleration
- Minimal JavaScript footprint

### Accessibility
- Semantic HTML structure
- ARIA labels cho screen readers
- Keyboard navigation support
- High contrast ratios

### SEO
- Meta tags đầy đủ
- Structured data
- Clean URL structure

## 📄 License

© 2024 Báo và Phát thanh – Truyền hình Cần Thơ. Tất cả quyền được bảo lưu.

## 🤝 Đóng góp

Nếu bạn muốn đóng góp vào dự án này, vui lòng:
1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📞 Liên hệ

Để biết thêm thông tin hoặc hỗ trợ kỹ thuật, vui lòng liên hệ:
- **Email**: [email]
- **Website**: [website]
- **Điện thoại**: [phone]

---

**Lưu ý**: Trang web này được tạo ra để hiển thị sơ đồ tổ chức một cách trực quan và dễ sử dụng. Tất cả thông tin được hiển thị dựa trên dữ liệu được cung cấp. 