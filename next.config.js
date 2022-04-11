module.exports = {
    generateBuildId: async () => {
        // Put latest git commit hash here
        return 'kevinmatsunaga-nextjs'
      },
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/shinkirin',
    },
  }