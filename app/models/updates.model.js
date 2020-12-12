module.exports = mongoose => {
    const Updates = mongoose.model(
      "updates",
      mongoose.Schema(
        {
          type: String,
          title: String,
          author: String,
          txt: String
        },
        { timestamps: true }
      )
    );
  
    return Updates;
  };