import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';
const router = Router();
router.get('/users/', async (_request, response, next) => {
    try {
        response.json(await User.find().lean());
    }
    catch (error) {
        next(error);
    }
});
router.get('/teams/', async (_request, response, next) => {
    try {
        response.json(await Team.find().lean());
    }
    catch (error) {
        next(error);
    }
});
router.get('/activities/', async (_request, response, next) => {
    try {
        response.json(await Activity.find().lean());
    }
    catch (error) {
        next(error);
    }
});
router.get('/leaderboard/', async (_request, response, next) => {
    try {
        response.json(await Leaderboard.find().lean());
    }
    catch (error) {
        next(error);
    }
});
router.get('/workouts/', async (_request, response, next) => {
    try {
        response.json(await Workout.find().lean());
    }
    catch (error) {
        next(error);
    }
});
export default router;
//# sourceMappingURL=api.js.map