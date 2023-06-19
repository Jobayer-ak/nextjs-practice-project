import Link from 'next/link';
import React from 'react';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <div>
      <section className="w-full max-w-full flext-start flex-col">
        <h1 className="head_text text-left">
          <span className="blue-gradient">{type} Post</span>
        </h1>

        <p className="desc text-left max-w-md">
          {type} and share amazing prompts with the world, and left your
          imagination arun wild with any AI-powered platform
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl flex flex-col gap-76 glassmorphism"
        >
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your AI Prompt
            </span>

            <textarea
              value={post.prompt}
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              placeholder="Write your post here"
              required
              className="form_textarea "
            />
          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Field of Prompt{' '}
              <span className="font-normal">
                (#product, #webdevelopment, #idea, etc.)
              </span>
            </span>
            <input
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              type="text"
              placeholder="#Tag"
              required
              className="form_input"
            />
          </label>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              {submitting ? `${type}ing...` : type}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
