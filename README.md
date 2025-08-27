# 🎵 TrackShift

**Seamlessly transfer your Spotify playlists to YouTube in just a few clicks!**

TrackShift is a modern web application that bridges the gap between Spotify and YouTube, allowing you to effortlessly migrate your favorite playlists from Spotify to your YouTube account.


### 🚀 Demo : **(https://trackshift.vercel.app)**

## 🌟 Features

- **🔗 Easy Authentication** - Secure OAuth integration with both Spotify and YouTube
- **📋 Playlist Discovery** - Browse and select from all your Spotify playlists
- **🎯 Smart Matching** - Intelligent track matching algorithm to find the best YouTube equivalents
- **⚡ Fast Transfer** - Bulk transfer multiple tracks simultaneously
- **📊 Transfer Reports** - Detailed reports showing successful transfers and any missing tracks
- **🎨 Clean UI** - Modern, responsive interface built with React
- **🔒 Privacy First** - Your data stays secure - we only access what's necessary for transfers




## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: CSS3 / Tailwind CSS
- **APIs**: Spotify Web API, YouTube Data API v3
- **Authentication**: OAuth 2.0
- **Build Tool**: Vite
- **Deployment**: Vercel


## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm
- Spotify Developer Account
- Google Cloud Console Account (for YouTube API)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/0x-mayank/TrackShift.git
   cd TrackShift
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   YOUTUBE_CLIENT_ID=your_youtube_client_id
   YOUTUBE_CLIENT_SECRET=your_youtube_client_secret
   REDIRECT_URI=http://localhost:3000/callback
   ```

4. **Configure API Credentials**

   **Spotify Setup:**
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Create a new app
   - Add `http://localhost:3000/callback` to Redirect URIs
   - Copy Client ID and Client Secret

   **YouTube Setup:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable YouTube Data API v3
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 🎯 How It Works

1. **Connect Your Accounts** - Authenticate and YouTube using OAuth 2.0
2. **Select Playlist** - Choose which Spotify playlists you want to transfer and paste the link
3. **Smart Matching** - Our algorithm searches YouTube for the best matches for each track
4. **Enjoy Your Music** - Access your playlists on YouTube!

## 📝 Usage

1. Click "Connect YouTube" to authorize playlist creation
2. Paste the playlist link
3. Click "Convert Playlist" and wait for the magic to happen!
4. Check your YouTube account for the newly created playlists


---

**Made with ❤️ by [Mayank](https://github.com/0x-mayank)**

⭐ If you found this project helpful, please give it a star!
