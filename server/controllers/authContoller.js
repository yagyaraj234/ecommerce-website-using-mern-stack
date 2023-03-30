import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    if (!phone) {
      return res.send({ error: "Phone number is Required" });
    }
    if (!address) {
      return res.send({ error: "Address is Required" });
    }
    // Existing user check
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already registered user",
      });
    }

    // Registration user

    const hashedPassword = await hashPassword(password);

    // save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "Registration Success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

// pOST LOGIN

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid or password",
      });
    }
    // check user
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Error in Login",
        error,
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // token

    const token =await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
      expiresIn:"7d",
    });
    res.status(200).send({
      success:true,
      message:"Login Succesfully",
      user:{
        name:user.name,
        email:user.email,
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  login",
      error,
    });
  }
};
