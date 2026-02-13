import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reposRouter from './routes/repos';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api', reposRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API server running on http://localhost:${PORT}`);
  console.log(`📊 GitHub user: ${process.env.GITHUB_USERNAME || 'mitchellrust'}`);
  console.log(`🔑 GitHub token: ${process.env.GITHUB_TOKEN ? 'configured' : 'not configured (lower rate limits)'}`);
});
