# Language / Язык
> [🇷🇺 Русский](README.md) | [🇬🇧 English](README-en.md) | [🇪🇸 Español](README-es.md)

# Telegram Clicker Game Mini App

## Description
Developed a full-fledged clicker game for Telegram Mini App. The project was implemented in November 2025 as part of a promotional campaign for my own Telegram channel.

The application features included:
1. User data retention and saving system;
2. Task mechanics;
3. Referral system;
4. Leaderboards.
5. As part of the project, a month-long event was organized: the top 3 players on the leaderboard received a Telegram Premium subscription. Thanks to the referral system, the channel's audience increased by 200 subscribers.

During the development process, I significantly expanded my competencies in frontend development and JavaScript, and mastered working with databases and APIs.

## Features
- ✅ **Main Game Screen** - Clickable coin with balance tracking
- ✅ **Upgrade System** - Passive income and click power upgrades
- ✅ **Tasks Section** - Channel subscription tasks to earn rewards
- ✅ **Referral System** - Invite friends and earn coins
- ✅ **Promo Codes** - Activate codes to claim rewards
- ✅ **Leaderboards** - Top players sorted by balance and referrals
- ✅ **Admin Panel** - Task and promo code management
- ✅ **Offline Earnings** - Earn coins offline (up to 24 hours)
- ✅ **Telegram Integration** - Full integration with WebApp API

## Tech Stack
**Frontend:**
- HTML, CSS, JavaScript
- Telegram WebApp API

**Backend:**
- Node.js with Express.js
- MongoDB with Mongoose
- Axios for Telegram Bot API interaction

### Requirements
- Node.js (version 14 or higher)
- MongoDB (local or cloud-based)
- Telegram Bot Token (from @BotFather)

### Installation Steps
1. **Clone or download the project**
2. **Install dependencies:**
```bash
npm install
```
3. **Configure environment variables:**
Edit the `.env` file with your actual values:
```env
# MongoDB Settings
MONGODB_URI=mongodb://localhost:27017/telegram-clicker-game

# Server Settings
PORT=3000
NODE_ENV=production

# Telegram Bot Settings
BOT_TOKEN=your_bot_token
BOT_USERNAME=your_bot_username

# Admin IDs (comma-separated)
ADMIN_IDS=123456789,987654321

# Referral reward (in coins)
REFERRAL_REWARD=1000000
```
Replace the 1000x1000px `coin.png` file with your own asset.
Edit the `style.css` file to change colors to your preference.
Edit the `config/upgraged.js` file to name each upgrade in the `name` field, add a `description`, and adjust the price, reward, and emoji icon.

4. **Start MongoDB:**
Ensure MongoDB is running on your system or use a cloud service like MongoDB Atlas.

5. **Start the server:**
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```
The server will start at `http://localhost:3000`

## Telegram Bot Setup

### 1. Creating a Bot
1. Open Telegram and search for @BotFather
2. Send the `/newbot` command
3. Follow the instructions to create your bot
4. Save the bot token (you will need it for `.env`)

### 2. Mini App Configuration
1. In BotFather, use the `/mybots` command
2. Select your bot
3. Go to "Bot Settings" → "Menu Button"
4. Set the Web App URL: `https://yourdomain.com` (or your deployment URL)

### 3. Production Deployment
1. **Get a domain and hosting** (Vercel, Railway, Heroku, etc.)
2. **Set up MongoDB** (MongoDB Atlas is recommended)
3. **Configure environment variables** on your hosting platform
4. **Update bot settings:**
   - Update the Menu Button URL in BotFather
   - Ensure HTTPS is enabled
5. **Deploy:**
```bash
git push # or use your platform's deployment command
```

## API Endpoints

### Game Endpoints (`/api/game`)
- `POST /init` - Initialize or fetch user data
- `POST /click` - Register a coin click
- `POST /upgrades/passive` - Get passive upgrades
- `POST /upgrades/click` - Get click upgrades
- `POST /upgrades/passive/buy` - Buy a passive upgrade
- `POST /upgrades/click/buy` - Buy a click upgrade
- `GET /leaderboard/balance` - Get leaderboard by balance
- `GET /leaderboard/referrals` - Get leaderboard by referrals
- `POST /tasks` - Get available tasks
- `POST /tasks/check` - Verify task completion
- `POST /promo/activate` - Activate a promo code

## Database Models

### User
- Telegram ID, username
- Balance, click power, income per second
- Passive and click upgrades
- Completed tasks
- Activated promo codes
- Referral data
- Admin status

### Task
- Title, description
- Link and Channel ID
- Reward amount
- Active status

### PromoCode
- Code (unique, uppercase)
- Reward amount
- Max uses, current uses
- Expiration date
- Active status

## File Structure
```├── models/
│   ├── User.js         # User model
│   ├── Task.js         # Task model
│   └── PromoCode.js    # Promo code model
├── routes/
│   ├── game.js         # Game API endpoints
│   └── admin.js        # Admin API endpoints
├── config/
│   └── upgrades.js     # Upgrades configuration
├── server.js           # Express server setup
├── game-client.js      # Client-side game logic
├── index.html          # Main game interface
├── main_coin_1.png     # Coin image asset
├── package.json        # Dependencies
├── .env                # Environment variables
└── README.md           # This file
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check the `MONGODB_URI` in `.env`
- For MongoDB Atlas, make sure your IP is whitelisted

### Bot is Not Working
- Verify that `BOT_TOKEN` is correct
- Ensure the bot username matches `BOT_USERNAME`
- Make sure the Web App URL is correctly set in BotFather

### Tasks are Not Verifying
- Channel ID must be precise (use @getidsbot)
- The bot must be an administrator of the channel
- In development mode, tasks are automatically completed for testing purposes

## Development

### Local Testing
1. Use ngrok to expose your local server:
```bash
ngrok http 3000
```
2. Update your bot's Web App URL in BotFather using the ngrok URL
3. Test inside Telegram

### Debug Mode
The game includes console logging. Check the browser developer tools for debugging.

## Security Notes
- Never commit your `.env` file
- Keep your `BOT_TOKEN` secret
- Use HTTPS in production
- Validate all user input on the backend
- Implement rate limiting for production

## License
MIT License - feel free to modify and use it for your own projects!

## Support
If you encounter any issues or have questions:
1. Check this README
2. Review error logs in the console
3. Verify your environment variables
4. Test API endpoints individually

## Authors
Artem Miloserdov
github: miloserdow-artem
tg: @miloserdow_artem
