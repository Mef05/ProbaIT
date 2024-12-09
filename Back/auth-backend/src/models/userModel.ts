import { Schema, model } from 'mongoose';

interface IUser {
  username: string;
  email: string;
  password: string;
  telephone: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  telephone: { type: String, required: true },
  password: { type: String, required: true }
});

const User = model<IUser>('User', userSchema);

export default User;