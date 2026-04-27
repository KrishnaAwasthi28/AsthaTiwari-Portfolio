export default {
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },

    { 
      name: 'image', 
      type: 'image',
      options: { hotspot: true }
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Paintings', value: 'paintings' },
          { title: 'Installations', value: 'installations' },
          { title: 'Collaborative Projects', value: 'collaborations' }, // ✅ FIXED
        ]
      }
    }
  ]
}