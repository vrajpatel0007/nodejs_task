const User_service = require("../services/user.service");
const { createToken } = require("../middleware/auth");

const register = async (req, res) => {
  const reqBody = req.body;

  try {
    const userExists = await User_service.findemail(reqBody.email);
    if (userExists) {
      res.json({ message: "Email already exists" });
    }

    const user = await User_service.register(reqBody);
    res
      .status(200)
      .json({ message: "User registered successfully", data: user });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const userget = async (req, res) => {
  try {

    const user = await User_service.getuser();

    res.status(200).json({ message: "User list", data: user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const userdelete = async (req, res) => {
  try {
    const userid = req.params.userId;
    const userExists = await User_service.findById(userid);
    if (!userExists) {
      res.json({ message: "user not found!" });
    }
    const deletedUser = await User_service.deletedUser(userid);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error during user deletion:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const Iduser = async (req, res) => {
  try {
    const userid = req.params.userId;
    const userExists = await User_service.findById(userid);
    if (!userExists) {
      res.json({ message: "user not found!" });
    }
    const user = await User_service.userbyid(userid);
    res.status(200).json({ message: "user  successfully", data: user });
  } catch (error) {
    console.error("Error during user deletion:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const body = req.body;
  const password = req.body.password;
  const user = await User_service.findemail(body.email);

  if (!user) {
    return res.status(500).json({ message: "Email not found" });
  }

  if (password != user.password) {
    return res.status(500).json({ message: "Incorrect password" });
  }
  const data = {
    _id: user._id,
    email: user.email,
    rol: user.rol,
  };
  let token = createToken(data);
  console.log("🚀 ~ login ~ token:", token)
  res.cookie("token", token);

  return res.status(200).json({ message: "User login successful" });
};

const userupdate = async (req, res) => {
  try {
    const userid = req.params.userId;
    const userExists = await User_service.findById(userid);
    if (!userExists) {
      res.json({ message: "user not found!" });
    }

    const body = {};

    if (req.body.name) {
      body.name = req.body.name;
    }

    if (req.body.email) {
      body.email = req.body.email;
    }

    if (req.files && req.files.image) {
      const parth = userExists.image;
      fs.unlink(parth, (err) => {
        if (err) {
          console.log(`An error occurred ${err.message}`);
        } else {
          console.log("Deleted image");
        }
      });
      body.image = "public/temp/" + req.files.image[0].filename;
    }

    const updateuser = await User_service.updateuser(userid, body);
    res
      .status(200)
      .json({ message: "User updated successfully", user: updateuser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  register,
  userget,
  userdelete,
  login,
  Iduser,
  userupdate,
};
