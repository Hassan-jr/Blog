const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db.js");

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// const port =   process.env.PORT || 4000

app.use("/post", require("./routes/postRoute.js"));

//  ============================== FRONTEND ====================================

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/out")));

  // HOME
  app.get("/", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "out", "index.html")
    )
  );

    //  dev
    app.get("/dev", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "out", "dev.html")
    )
  );

    // BLOCKCHAIN
    app.get("/blockchain", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "out", "blockchain.html")
    )
  );

    // TECH
    app.get("/tech", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "out", "tech.html")
    )
  );

    // FINANCE
    app.get("/finance", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "out", "finance.html")
    )
  );

  // one post
  app.get("/posts/:id", (req, res) =>
  res.sendFile(
    path.resolve(__dirname, "../", "frontend", "out", "posts", "[id].html")
  )
);
   
  // ABOUT
  app.get("/about", (req, res) =>
  res.sendFile(
    path.resolve(__dirname, "../", "frontend", "out", "about.html")
  )
);

// noma pricacy policy
app.get("/noma", (req, res) =>
res.sendFile(
  path.resolve(__dirname, "../", "frontend", "out", "noma.html")
)
);


    // POST 
    app.get("/fpost", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "out", "fpost.html")
    )
  );
 


} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.listen(process.env.PORT || 4000, () => {
  console.log("listening on port");
});
