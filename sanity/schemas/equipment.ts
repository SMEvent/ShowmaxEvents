import { defineType, defineField } from "sanity";

export default defineType({
  name: "equipment",
  title: "Equipment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Equipment Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "flex_item_id",
      title: "Flex Item ID",
      type: "string",
      description: "The item ID in Flex Rental Solutions",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Audio", value: "audio" },
          { title: "Video", value: "video" },
          { title: "Lighting", value: "lighting" },
          { title: "Staging", value: "staging" },
          { title: "Accessories", value: "accessories" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "detailed_description",
      title: "Detailed Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "images",
      title: "Images",
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
          ],
        },
      ],
    }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "day_rate",
      title: "Day Rate (CAD)",
      type: "number",
      description: "Daily rental rate in Canadian Dollars",
    }),
    defineField({
      name: "quantity",
      title: "Quantity Available",
      type: "number",
      description: "Number of units available for rental",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "featured",
      title: "Featured Equipment",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "meta_title",
      title: "Meta Title",
      type: "string",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images.0",
      category: "category",
    },
    prepare({ title, media, category }) {
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
});

