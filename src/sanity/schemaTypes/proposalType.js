import { defineType, defineField } from "sanity";

export const proposalType = defineType({
  name: "proposal",
  title: "Web Proposal",
  type: "document",

  fields: [
    // Client Info
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "clientName",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Password Protection
    defineField({
      name: "password",
      title: "Access Password",
      type: "string",
      description: "Client will need this password to view proposal",
      validation: (Rule) => Rule.required(),
    }),

    // Hero Section
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "subtitle", type: "text" }),
      ],
    }),

    // Sections (Deck)
    defineField({
      name: "sections",
      title: "Proposal Sections",
      type: "array",
      of: [
        // About
        defineType({
          type: "object",
          name: "aboutSection",
          title: "About Section",
          fields: [
            defineField({ name: "heading", type: "string" }),
            defineField({ name: "content", type: "text" }),
          ],
        }),

        // Services
        defineType({
          type: "object",
          name: "servicesSection",
          title: "Services Section",
          fields: [
            defineField({ name: "heading", type: "string" }),
            defineField({
              name: "services",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),

        // Pricing
        defineType({
          type: "object",
          name: "pricingSection",
          title: "Pricing Section",
          fields: [
            defineField({ name: "heading", type: "string" }),
            defineField({
              name: "plans",
              type: "array",
              of: [
                defineType({
                  type: "object",
                  name: "plan",
                  fields: [
                    defineField({ name: "title", type: "string" }),
                    defineField({ name: "price", type: "string" }),
                    defineField({
                      name: "features",
                      type: "array",
                      of: [{ type: "string" }],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        // Timeline
        defineType({
          type: "object",
          name: "timelineSection",
          title: "Timeline Section",
          fields: [
            defineField({ name: "heading", type: "string" }),
            defineField({
              name: "steps",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),

        // Custom (flex)
        defineType({
          type: "object",
          name: "customSection",
          title: "Custom Section",
          fields: [
            defineField({ name: "heading", type: "string" }),
            defineField({ name: "content", type: "text" }),
          ],
        }),
      ],
    }),

    // CTA
    defineField({
      name: "cta",
      title: "Call To Action",
      type: "object",
      fields: [
        defineField({ name: "text", type: "string" }),
        defineField({ name: "buttonText", type: "string" }),
      ],
    }),

    // Extras (optional but useful)
    defineField({
      name: "status",
      type: "string",
      options: {
        list: ["draft", "sent", "approved", "rejected"],
      },
    }),

    defineField({
      name: "expiresAt",
      type: "datetime",
    }),
  ],
});