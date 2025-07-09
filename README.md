# 🌍 Earth Zoom Out AI

Transform your photos into epic space journeys with the power of AI. Create stunning Earth zoom-out videos from any image in seconds.

![Earth Zoom Out AI](https://earthzoomoutai.top)

## ✨ Features

- **🚀 AI-Powered Video Generation**: Transform any photo into a cinematic space journey
- **📱 Mobile-First Design**: Optimized for all devices with responsive design
- **⚡ Lightning Fast**: Generate videos in under 60 seconds
- **🎨 Customizable**: Adjust zoom level, duration, and quality
- **🔄 Real-time Progress**: Watch your video being created with live updates
- **📥 High-Quality Downloads**: Export in 4K resolution
- **🌐 SEO Optimized**: Built with best practices for search engines

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **AI Processing**: Replicate API (Minimax Video-01-Director)
- **Deployment**: Vercel (recommended)
- **Storage**: Vercel Blob / AWS S3 (optional)
- **Database**: PostgreSQL / Supabase (optional)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Replicate API account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/earth-zoom-out-ai.git
   cd earth-zoom-out-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your Replicate API token:
   ```env
   REPLICATE_API_TOKEN=your_replicate_api_token_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Replicate API Setup

1. Sign up at [Replicate](https://replicate.com)
2. Get your API token from the dashboard
3. Add it to your `.env.local` file

### Optional Integrations

- **Cloud Storage**: Configure AWS S3 or Vercel Blob for file storage
- **Database**: Set up PostgreSQL for user management and job tracking
- **Analytics**: Add Google Analytics or PostHog for insights

## 📁 Project Structure

```
earth-zoom-out-ai/
├── app/
│   ├── api/                 # API routes
│   │   ├── upload/         # File upload endpoint
│   │   ├── generate/       # Video generation endpoint
│   │   └── status/         # Job status checking
│   ├── components/         # React components
│   │   ├── ImageUploader.tsx
│   │   └── VideoPreview.tsx
│   ├── create/            # Video creation page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Landing page
├── public/               # Static assets
├── .env.example         # Environment variables template
└── README.md           # This file
```

## 🎯 Usage

### Creating Your First Video

1. **Visit the homepage** at `http://localhost:3000`
2. **Click "Create Your Video"** to go to the creation page
3. **Upload an image** by dragging and dropping or clicking to browse
4. **Customize settings**:
   - Zoom Level: 2x to 20x (how far to zoom out)
   - Duration: 3-10 seconds
   - Quality: 1080p or 4K
5. **Click "Generate Video"** and wait for processing
6. **Download or share** your completed video

### Best Practices for Images

- **High Resolution**: Use images at least 1080p for best results
- **Clear Subjects**: Images with distinct foreground/background work best
- **Landscapes**: Outdoor scenes, cityscapes, and nature photos are ideal
- **Good Lighting**: Well-lit images produce better depth mapping

## 🔌 API Reference

### Upload Image
```http
POST /api/upload
Content-Type: multipart/form-data

Body: file (image file)
```

### Generate Video
```http
POST /api/generate
Content-Type: application/json

{
  "uploadId": "string",
  "zoomLevel": 5,
  "duration": 6,
  "quality": "4k"
}
```

### Check Status
```http
GET /api/status/{jobId}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Configure Domain** (optional)
   - Add your custom domain in Vercel settings
   - Update DNS records as instructed

### Deploy to Other Platforms

- **Netlify**: Use the Next.js build adapter
- **Railway**: Connect GitHub and deploy
- **DigitalOcean App Platform**: Use the web service option

## 🔧 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind classes in components
- Customize the color scheme in `tailwind.config.js`

### AI Models
- Switch between different Replicate models
- Adjust prompts in `/api/generate/route.ts`
- Add new parameters for fine-tuning

### Features
- Add user authentication
- Implement payment processing
- Create video galleries
- Add social sharing

## 📊 Performance

### Optimization Tips
- Use Next.js Image component for optimized images
- Implement lazy loading for components
- Add caching for API responses
- Optimize bundle size with dynamic imports

### Monitoring
- Set up error tracking (Sentry)
- Monitor API usage (Replicate dashboard)
- Track user analytics (Google Analytics)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Replicate](https://replicate.com) for AI model hosting
- [Minimax](https://replicate.com/minimax) for the Video-01-Director model
- [Next.js](https://nextjs.org) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework

## 📞 Support

- 📧 Email: support@earthzoomoutai.top
- 💬 Discord: [Join our community](https://discord.gg/earthzoomout)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/earth-zoom-out-ai/issues)
- 📖 Docs: [Documentation](https://docs.earthzoomoutai.top)

---

Made with ❤️ by the Earth Zoom Out AI team
