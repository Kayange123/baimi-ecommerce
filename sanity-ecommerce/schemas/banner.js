export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'Sale Time',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'largeText1',
      title: 'Large Text1',
      type: 'string',
    },
    {
      name: 'largeText2',
      title: 'Large Text2',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'Small Text',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'Mid Text',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
  ],
}
