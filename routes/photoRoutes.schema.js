const photographerSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string", format: "email" },
    avatar: { type: "string", format: "url" },
  },
  required: ["firstName", "lastName", "email"],
  additionalProperties: false,
};

export const postSchema = {
  type: "object",
  properties: {
    price: { type: "integer" },
    date: {
      type: "string",
      format: "date",
    },
    url: { type: "string", format: "url" },
    theme: { type: "array", items: { type: "string" } },
    photographer: photographerSchema,
    album: { type: "string", minLength: 24, maxLength: 24 },
  },
  required: ["url", "photographer", "album"],
  additionalProperties: false,
};
