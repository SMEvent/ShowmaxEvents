import { defineType, defineField } from "sanity";

export default defineType({
  name: "portfolio",
  title: "Portfolio Projects",
  type: "document",
  fields: [
    defineField({
      name: "project_name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "project_name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client Name",
      type: "string",
    }),
    defineField({
      name: "event_type",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Corporate Event", value: "corporate" },
          { title: "Concert", value: "concert" },
          { title: "Wedding", value: "wedding" },
          { title: "Conference", value: "conference" },
          { title: "Festival", value: "festival" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "event_date",
      title: "Event Date",
      type: "date",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "equipment_used",
      title: "Equipment Used",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "equipment" }],
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "testimonial",
      title: "Client Testimonial",
      type: "object",
      fields: [
        {
          name: "quote",
          title: "Quote",
          type: "text",
        },
        {
          name: "author",
          title: "Author",
          type: "string",
        },
        {
          name: "role",
          title: "Role/Title",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "project_name",
      media: "images.0",
      client: "client",
    },
    prepare({ title, media, client }) {
      return {
        title,
        subtitle: client,
        media,
      };
    },
  },
});

