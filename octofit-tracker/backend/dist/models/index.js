import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    totalPoints: { type: Number, required: true, default: 0 },
});
const teamSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    memberIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    totalPoints: { type: Number, required: true, default: 0 },
});
const activitySchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    date: { type: Date, required: true },
});
const leaderboardSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    rank: { type: Number, required: true },
    points: { type: Number, required: true },
    week: { type: String, required: true },
});
const workoutSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
    durationMinutes: { type: Number, required: true },
    focus: { type: String, required: true },
});
export const User = mongoose.models.User || mongoose.model('User', userSchema, 'users');
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema, 'teams');
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema, 'activities');
export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema, 'leaderboard');
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema, 'workouts');
//# sourceMappingURL=index.js.map