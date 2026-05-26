"use client";

import { useActionState } from "react";
import FormSubmit from "@/components/form-submit";

type FormState = {
  errors?: string[];
};

type PostFormProps = {
  action: (state: FormState, formData: FormData) => Promise<FormState>;
};

function PostForm({ action }: PostFormProps) {
  const [state, formAction] = useActionState<FormState, FormData>(action, {});

  return (
    <>
      <h1>Create a new post</h1>

      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>

        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>

        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>

        <div className="form-actions">
          <FormSubmit />
        </div>

        {state.errors && state.errors.length > 0 && (
          <ul className="form-errors">
            {state.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}

export default PostForm;
