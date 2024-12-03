const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const productRoutes = require('./routes/productRoute');
const recommendRoutes = require('./routes/recommendRoute');
const uploadRoutes = require("./routes/uploadRoute");


const app = express();
const PORT = 3030;


app.use("/uploads", express.static("uploads"));


app.use(bodyParser.json());
app.use(cors());


connectDB();


app.use('/api/products', productRoutes);
app.use('/api/recommends', recommendRoutes);
app.use("/api", uploadRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
