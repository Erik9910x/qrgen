# 🎯 Lab36 QR Code Generator

<div align="center">

![Version](https://img.shields.io/badge/version-2.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

**Công cụ tạo mã QR miễn phí, mã nguồn mở với nhiều tùy chọn tùy chỉnh**

**Free, open-source QR code generator with extensive customization options**

[🇻🇳 Tiếng Việt](#-tiếng-việt) | [🇬🇧 English](#-english)

</div>

---

## 🇻🇳 Tiếng Việt

### ✨ Tính năng

#### 📱 Hỗ trợ nhiều loại dữ liệu

Tạo QR code cho nhiều mục đích khác nhau:

- **URL** - Liên kết website
- **Plain Text** - Văn bản thuần
- **Email** - Địa chỉ email
- **Phone** - Số điện thoại
- **SMS** - Tin nhắn SMS
- **WiFi Login** - Thông tin đăng nhập WiFi
- **WhatsApp** - Số WhatsApp
- **YouTube** - Kênh/Video YouTube
- **Instagram** - Tài khoản Instagram
- **LinkedIn** - Profile LinkedIn
- **Facebook** - Trang Facebook
- **X (Twitter)** - Tài khoản X
- **Discord** - Server/User Discord
- **Telegram** - Tài khoản Telegram
- **TikTok** - Tài khoản TikTok
- **Spotify** - Playlist/Artist Spotify

#### 🎨 Tùy chỉnh nâng cao

- **📏 Kích thước QR** - Tùy chỉnh size từ 100px đến 1000px (khuyến nghị: 200-500px cho web, 300-800px cho in ấn)
- **📷 Logo tùy chỉnh** - Upload ảnh logo để đặt ở giữa QR code (khuyến nghị: ảnh vuông 1:1, tối thiểu 200x200px)
- **✏️ Text tùy chỉnh** - Thêm text với màu sắc tùy chọn
- **🌈 Màu sắc** - Tùy chỉnh màu QR và màu nền với kiểm tra độ tương phản
- **📊 Google Campaign Tracking** - Tự động thêm tham số UTM cho marketing
- **⚡ Smart Validation** - Validate khi blur/nhấn Enter, không làm phiền khi đang gõ
- **🌙 Dark Mode** - Tự động nhận diện theo hệ thống hoặc chọn thủ công
- **🌐 Đa ngôn ngữ** - Tiếng Việt & English (100% i18n)
- **💾 Export đa dạng** - PNG, SVG, PDF (bao gồm logo/text)
- **🐛 Error Reporting** - Hệ thống báo lỗi tích hợp, tracking user activities

#### 🚀 Ưu điểm

- ✅ **Miễn phí 100%** - Không giới hạn số lượng QR code
- ✅ **Bảo mật** - Xử lý hoàn toàn trên trình duyệt, không lưu trữ dữ liệu
- ✅ **Không cần cài đặt** - Chạy trực tiếp trên trình duyệt
- ✅ **Responsive** - Hoạt động tốt trên desktop & mobile
- ✅ **Mobile Optimized** - Download & preview QR tối ưu cho điện thoại
- ✅ **Icon Fallback** - Emoji fallback nếu CDN bị chặn
- ✅ **Open Source** - Mã nguồn mở, có thể tùy chỉnh

### 🚀 Bắt đầu

#### 🌐 Sử dụng trực tiếp

**Developer Contact:** [facebook.com/erik9910](https://facebook.com/erik9910)

Auth erik9910

#### 💻 Chạy local

```bash
# Clone repository
git clone https://github.com/Erik9910x/qrgen.git
cd qrgen

# Install dependencies
npm install

# Mở index.html bằng trình duyệt hoặc dùng live server
```

### 📖 Hướng dẫn sử dụng

#### Tạo QR Code nhanh chóng - Single Page!

Không còn step wizard phức tạp, tất cả trên 1 trang:

1. **Chọn loại dữ liệu**
   - Click vào 1 trong các card: URL, Text, Email, WhatsApp, Instagram, v.v.
   
2. **Nhập thông tin**
   - Điền thông tin tương ứng vào form
   - VD: URL, email, số điện thoại, username, v.v.
   
3. **Tùy chỉnh (tuỳ chọn)**
   - Chọn màu sắc QR code và background
   - Thêm logo (auto-crop vuông 1:1) hoặc text ở giữa
   - Bật UTM tracking cho URL marketing
   
4. **Live Preview**
   - QR code tự động hiển thị khi bạn nhập/thay đổi thông tin
   - Không cần bấm nút Generate - tự động update!
   
5. **Download**
   - Chọn format: PNG, SVG, hoặc PDF
   - Tải về máy tuỳ ý

#### 🐛 Báo lỗi

- Nút "🐛 Báo Lỗi" floating ở góc phải màn hình
- Tự động tracking tất cả hành động của bạn
- Copy report và gửi qua Lab36 Team

### 🛠️ Công nghệ

| Công nghệ                | Mục đích             |
| ------------------------ | -------------------- |
| **HTML5**                | Cấu trúc trang web   |
| **JavaScript (Vanilla)** | Logic xử lý          |
| **Tailwind CSS**         | Styling & UI         |
| **QRCode.js**            | Thư viện tạo QR code |
| **jsPDF**                | Export PDF           |

### 📁 Cấu trúc dự án

```
qr-code-generator/
├── index.html              # File HTML chính
├── js/
│   ├── app.js             # Logic chính, event handlers
│   ├── qr-generator.js    # QR generation & styling
│   ├── translations.js    # Multi-language data
│   ├── utils.js           # Theme, Language, Wizard controllers
│   └── logger.js          # Activity logger & error reporting
├── css/
│   └── style.css          # Custom styles, responsive
├── package.json           # Dependencies & scripts
├── .eslintrc.json         # ESLint config
├── .prettierrc.json       # Prettier config
├── README.md              # Tài liệu
├── CHANGELOG.md           # Lịch sử thay đổi
└── LICENSE                # MIT License
```

### 🛠️ Development

#### Setup

```bash
# Clone repository
git clone https://github.com/Erik9910x/qrgen.git
cd qrgen

# Install dependencies
npm install
```

#### Code Quality

```bash
# Run ESLint
npm run lint

# Auto-fix ESLint errors
npm run lint:fix

# Format code with Prettier
npm run format

# Run all checks
npm run check
```

### 🤝 Đóng góp

Chúng tôi rất hoan nghênh mọi đóng góp! Mở issue hoặc tạo pull request.

### 📄 License

Dự án này được phân phối dưới **MIT License** - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

### 💖 Cảm ơn

- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - Thư viện tạo QR code
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- Tất cả contributors đã đóng góp cho dự án

---

## 🇬🇧 English

### ✨ Features

#### 📱 Multiple Data Types Support

Create QR codes for various purposes:

- **URL** - Website links
- **Plain Text** - Plain text content
- **Email** - Email addresses
- **Phone** - Phone numbers
- **SMS** - SMS messages
- **WiFi Login** - WiFi credentials
- **WhatsApp** - WhatsApp numbers
- **YouTube** - YouTube channels/videos
- **Instagram** - Instagram accounts
- **LinkedIn** - LinkedIn profiles
- **Facebook** - Facebook pages
- **X (Twitter)** - X accounts
- **Discord** - Discord servers/users
- **Telegram** - Telegram accounts
- **TikTok** - TikTok accounts
- **Spotify** - Spotify playlists/artists

#### 🎨 Advanced Customization

- **📏 QR Size** - Customize size from 100px to 1000px (recommended: 200-500px for web, 300-800px for print)
- **📷 Custom Logo** - Upload logo image to place in center (recommended: square 1:1 ratio, minimum 200x200px)
- **✏️ Custom Text** - Add text with customizable colors
- **🌈 Colors** - Customize QR and background colors with contrast checking
- **📊 Google Campaign Tracking** - Automatically add UTM parameters for marketing
- **⚡ Smart Validation** - Validates on blur/Enter press, non-intrusive while typing
- **🌙 Dark Mode** - Auto-detect system preference or manual toggle
- **🌐 Multi-language** - Vietnamese & English (100% i18n)
- **💾 Multiple Export Formats** - PNG, SVG, PDF (including logo/text)
- **🐛 Error Reporting** - Built-in error reporting system with user activity tracking

#### 🚀 Advantages

- ✅ **100% Free** - Unlimited QR code generation
- ✅ **Secure** - Fully client-side processing, no data storage
- ✅ **No Installation Required** - Runs directly in browser
- ✅ **Responsive** - Works great on desktop & mobile
- ✅ **Mobile Optimized** - Optimized download & preview for mobile devices
- ✅ **Icon Fallback** - Emoji fallback if CDN is blocked
- ✅ **Open Source** - Open source code, fully customizable

### 🚀 Getting Started

#### 🌐 Direct Usage

**Developer Contact:** [facebook.com/erik9910](https://facebook.com/erik9910)

Auth erik9910

#### 💻 Run Locally

```bash
# Clone repository
git clone https://github.com/Erik9910x/qrgen.git
cd qrgen

# Install dependencies
npm install

# Open index.html in browser or use a live server
```

### 📖 Usage Guide

#### Quick QR Code Creation - Single Page!

No complex step wizard, everything on one page:

1. **Select Data Type**
   - Click on one of the cards: URL, Text, Email, WhatsApp, Instagram, etc.
   
2. **Enter Information**
   - Fill in the corresponding information in the form
   - E.g.: URL, email, phone number, username, etc.
   
3. **Customize (Optional)**
   - Choose QR code and background colors
   - Add logo (auto-crop to 1:1 square) or text in center
   - Enable UTM tracking for marketing URLs
   
4. **Live Preview**
   - QR code automatically displays as you type/change information
   - No need to click Generate button - auto-updates!
   
5. **Download**
   - Choose format: PNG, SVG, or PDF
   - Download to your device

#### 🐛 Error Reporting

- "🐛 Report Error" floating button in bottom-right corner
- Automatically tracks all your actions
- Copy report and send via Lab36 Team

### 🛠️ Technology Stack

| Technology               | Purpose              |
| ------------------------ | -------------------- |
| **HTML5**                | Web structure        |
| **JavaScript (Vanilla)** | Processing logic     |
| **Tailwind CSS**         | Styling & UI         |
| **QRCode.js**            | QR code library      |
| **jsPDF**                | PDF export           |

### 📁 Project Structure

```
qr-code-generator/
├── index.html              # Main HTML file
├── js/
│   ├── app.js             # Main logic, event handlers
│   ├── qr-generator.js    # QR generation & styling
│   ├── translations.js    # Multi-language data
│   ├── utils.js           # Theme, Language, Wizard controllers
│   └── logger.js          # Activity logger & error reporting
├── css/
│   └── style.css          # Custom styles, responsive
├── package.json           # Dependencies & scripts
├── .eslintrc.json         # ESLint config
├── .prettierrc.json       # Prettier config
├── README.md              # Documentation
├── CHANGELOG.md           # Change history
└── LICENSE                # MIT License
```

### 🛠️ Development

#### Setup

```bash
# Clone repository
git clone https://github.com/Erik9910x/qrgen.git
cd qrgen

# Install dependencies
npm install
```

#### Code Quality

```bash
# Run ESLint
npm run lint

# Auto-fix ESLint errors
npm run lint:fix

# Format code with Prettier
npm run format

# Run all checks
npm run check
```

### 🤝 Contributing

We welcome all contributions! Open an issue or create a pull request.

### 📄 License

This project is distributed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### 💖 Acknowledgments

- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - QR code generation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- All contributors who have contributed to this project

---

<div align="center">

**Made with ❤️ by Lab36 Team**

**Developer Contact:** [facebook.com/erik9910](https://facebook.com/erik9910)

Auth erik9910

</div>
