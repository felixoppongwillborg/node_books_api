module.exports = (factory, Models) => {
  factory.define('Author', Models.Author, {
      firstName: "kalle",
      lastName: "Karlsson",
      createdAt: new Date(),
      updatedAt: new Date()
  })
}