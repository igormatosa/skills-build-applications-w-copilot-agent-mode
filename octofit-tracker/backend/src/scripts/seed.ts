import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { name: 'Maya Chen', email: 'maya.chen@example.com', avatar: 'MC', totalPoints: 860 },
      { name: 'Jordan Brooks', email: 'jordan.brooks@example.com', avatar: 'JB', totalPoints: 740 },
      { name: 'Sam Rivera', email: 'sam.rivera@example.com', avatar: 'SR', totalPoints: 625 },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Trailblazers',
        description: 'Consistent movement, outdoor energy, and shared progress.',
        memberIds: [users[0]._id, users[1]._id],
        totalPoints: 1600,
      },
      {
        name: 'Pulse Crew',
        description: 'Short, focused workouts that fit every schedule.',
        memberIds: [users[2]._id],
        totalPoints: 625,
      },
    ]);

    await Activity.insertMany([
      { userId: users[0]._id, type: 'Run', durationMinutes: 42, caloriesBurned: 410, date: new Date('2026-08-25') },
      { userId: users[1]._id, type: 'Cycling', durationMinutes: 55, caloriesBurned: 520, date: new Date('2026-08-24') },
      { userId: users[2]._id, type: 'Strength', durationMinutes: 35, caloriesBurned: 280, date: new Date('2026-08-23') },
    ]);

    await Leaderboard.insertMany([
      { userId: users[0]._id, teamId: teams[0]._id, rank: 1, points: 860, week: '2026-W34' },
      { userId: users[1]._id, teamId: teams[0]._id, rank: 2, points: 740, week: '2026-W34' },
      { userId: users[2]._id, teamId: teams[1]._id, rank: 3, points: 625, week: '2026-W34' },
    ]);

    await Workout.insertMany([
      { name: 'Foundation Flow', description: 'A balanced full-body session for building consistency.', difficulty: 'Beginner', durationMinutes: 25, focus: 'Mobility' },
      { name: 'Tempo Builder', description: 'Intervals that improve endurance without requiring equipment.', difficulty: 'Intermediate', durationMinutes: 30, focus: 'Cardio' },
      { name: 'Power Circuit', description: 'A challenging strength circuit for experienced athletes.', difficulty: 'Advanced', durationMinutes: 45, focus: 'Strength' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
