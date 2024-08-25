const express = require("express");
const router = express.Router();

router.post("/bfhl", (req, res) => {
  const { data } = req.body;

  console.log(data);

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Invalid input format. Expected an array of strings/numbers.",
    });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));

  const lowercaseAlphabets = alphabets.filter((item) => /^[a-z]$/.test(item));
  const highestLowercaseAlphabet =
    lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

  const response = {
    is_success: true,
    user_id: "Surya D", // Replace with actual full name and DOB
    email: "surya.d2021@vitstudent.ac.in", // Replace with actual email
    roll_number: "21BCE5685", // Replace with actual roll number
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  };

  res.json(response);
});

// GET /bfhl
router.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

module.exports = router;
