const Page = {
  admin: {
    useAsTitle: "title"
  },
  slug: "page",
  labels: {
    singular: "Page",
    plural: "Pages"
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      localized: true,
      required: true
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true
    },
    {
      name: "meta",
      label: "Meta",
      type: "group",
      fields: [
        {
          name: "description",
          label: "Description",
          type: "text"
        }
      ]
    },
    {
      name: "content",
      label: "Page Content",
      type: "group",
      fields: [
        {
          name: "header",
          label: "Header",
          type: "richText",
          localized: true
        }
      ]
    }
  ]
};

export default Page;
