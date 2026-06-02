import express, { Request, Response } from 'express';
import OpenAI from 'openai';
import { db } from '../db';

const router = express.Router();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST: Generate script from idea
router.post('/generate', async (req: Request, res: Response) => {
  try {
    const { idea } = req.body;

    if (!idea || idea.trim() === '') {
      return res.status(400).json({ error: 'Idea is required' });
    }

    // Generate script using OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a professional video scriptwriter. Create engaging, concise scripts optimized for short-form videos (30-60 seconds). 
          The script should:
          - Be clear and engaging
          - Include visual descriptions in brackets [like this]
          - Be suitable for a voiceover
          - Include transitions
          - Be in French
          Format: Return only the script, no other text.`,
        },
        {
          role: 'user',
          content: `Create a video script based on this idea: ${idea}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const script = completion.choices[0]?.message?.content || '';

    // Save to database
    const result = await db.query(
      'INSERT INTO scripts (idea, script) VALUES ($1, $2) RETURNING *',
      [idea, script]
    );

    res.json({
      id: result.rows[0].id,
      idea,
      script,
      createdAt: result.rows[0].created_at,
    });
  } catch (error) {
    console.error('Error generating script:', error);
    res.status(500).json({ error: 'Failed to generate script' });
  }
});

// GET: Get all scripts
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM scripts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching scripts:', error);
    res.status(500).json({ error: 'Failed to fetch scripts' });
  }
});

// GET: Get script by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM scripts WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Script not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching script:', error);
    res.status(500).json({ error: 'Failed to fetch script' });
  }
});

// PUT: Update script
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { script } = req.body;

    const result = await db.query(
      'UPDATE scripts SET script = $1, updated_at = NOW() WHERE id = $2 RETURNING *',
      [script, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Script not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating script:', error);
    res.status(500).json({ error: 'Failed to update script' });
  }
});

export default router;
