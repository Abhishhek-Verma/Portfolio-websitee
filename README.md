# Abhishek Verma - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Clean and professional interface with smooth animations
- **Contact Form**: EmailJS integration for direct email communication
- **Projects Showcase**: Display your best work with GitHub links
- **Skills & Experience**: Highlight your technical expertise and certifications
- **Fast & Optimized**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Deployment**: Netlify
- **Version Control**: Git & GitHub

## 📦 Installation

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abhishhek-Verma/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure EmailJS**:
   - Create a file `client/.env`
   - Add your EmailJS credentials:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**: Visit `http://localhost:5000`

## 🌐 Deployment

This project is configured for easy deployment to Netlify.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Steps:

1. Push code to GitHub
2. Connect repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

## 📁 Project Structure

```
portfolio_website/
├── client/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── data/           # Project, skills, experience data
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── context/        # React context providers
│   │   └── pages/          # Page components
│   ├── index.html
│   └── .env               # Environment variables (not committed)
├── server/                 # Express server
├── netlify.toml           # Netlify configuration
├── DEPLOYMENT.md          # Deployment guide
└── package.json

```

## 🔧 Configuration

### EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add email service (Gmail recommended)
3. Create email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Get Service ID, Template ID, and Public Key
5. Add to `client/.env` file

### Customization

Edit these files to customize your portfolio:

- **Personal Info**: `client/src/components/AboutSection.tsx`, `client/src/components/HeroSection.tsx`
- **Projects**: `client/src/data/projectsData.ts`
- **Skills**: `client/src/data/skillsData.ts`
- **Experience**: `client/src/data/experienceData.ts`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking

## 🌟 Features Details

### Contact Form
- Real-time validation
- EmailJS integration
- Success/error notifications
- Spam protection

### Projects Section
- Featured project showcase
- GitHub repository links
- Technology tags
- Responsive grid layout

### Skills & Experience
- Categorized skills display
- Certification cards
- Education timeline
- Achievement highlights

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Abhishek Verma**
- Email: abhishekatkiet@gmail.com
- GitHub: [@Abhishhek-Verma](https://github.com/Abhishhek-Verma)
- LinkedIn: [Abhishek Verma](https://www.linkedin.com/in/abhishekvermadev)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📞 Support

If you have any questions or need help with setup, feel free to reach out via email or open an issue.

---

**⭐ Star this repo if you found it helpful!**
