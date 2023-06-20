import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

// get
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate('creator');

    if (!prompt) return new Response('Prompt not found', { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch', { status: 500 });
  }
};

// update
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDB();

    const existingPrompt = await Prompt.updateOne(
      { _id: params.id },
      {
        prompt: prompt,
        tag: tag,
      }
    );

    if (!existingPrompt.modifiedCount)
      return new Response('Prompt not found', { status: 404 });

    
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response('Failed to update the prompt!', { status: 500 });
  }
};

// Delete
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Prompt.findById(params.id);

    return new Response('Prompt deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Failed to delete prompt', { status: 500 });
  }
};
