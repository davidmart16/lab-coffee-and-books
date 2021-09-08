module.exports = app => {
  
  // Base routes
  const baseRoutes = require("./base.routes");
  app.use("/", baseRoutes);
  
  // Place routes
  const placeRoutes = require("./place.routes");
  app.use("/", placeRoutes); 

}
