import User from "../models/User.js";

export const create_user = async (req, res, next) => {
  const user = new User(req.body);

  try {
    const user_save = await user.save();
    res.status(201).json(user_save);
  } catch (error) {
    next(error);
  }
};
export const get_user = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const get_all_users = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};
export const suspend_user = async (req, res, next) => {
  try {
    const user_update = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { isSuspended: true } },
      { new: true }
    );
    res.status(201).json(user_update);
  } catch (error) {
    next(error);
  }
};

export const unsuspend_user = async (req, res, next) => {
  try {
    const user_update = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { isSuspended: false } },
      { new: true }
    );
    res.status(201).json(user_update);
  } catch (error) {
    next(error);
  }
};

export const delete_user = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("user successfully deleted!");
  } catch (error) {
    next(error);
  }
};
