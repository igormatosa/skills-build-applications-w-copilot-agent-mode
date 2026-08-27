import mongoose, { Schema } from 'mongoose';
export declare const User: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    name: string;
    email: string;
    avatar: string;
    totalPoints: number;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    avatar: string;
    totalPoints: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    email: string;
    avatar: string;
    totalPoints: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    avatar: string;
    totalPoints: number;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    avatar: string;
    totalPoints: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    email: string;
    avatar: string;
    totalPoints: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    name: string;
    email: string;
    avatar: string;
    totalPoints: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    email: string;
    avatar: string;
    totalPoints: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Team: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    name: string;
    description: string;
    memberIds: mongoose.Types.ObjectId[];
    totalPoints: number;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
    memberIds: mongoose.Types.ObjectId[];
    totalPoints: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    description: string;
    memberIds: mongoose.Types.ObjectId[];
    totalPoints: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    description: string;
    memberIds: mongoose.Types.ObjectId[];
    totalPoints: number;
}, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
    memberIds: mongoose.Types.ObjectId[];
    totalPoints: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    description: string;
    memberIds: mongoose.Types.ObjectId[];
    totalPoints: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    name: string;
    description: string;
    memberIds: mongoose.Types.ObjectId[];
    totalPoints: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    description: string;
    memberIds: mongoose.Types.ObjectId[];
    totalPoints: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Activity: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    type: string;
    durationMinutes: number;
    caloriesBurned: number;
    date: NativeDate;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    type: string;
    durationMinutes: number;
    caloriesBurned: number;
    date: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    type: string;
    durationMinutes: number;
    caloriesBurned: number;
    date: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: mongoose.Types.ObjectId;
    type: string;
    durationMinutes: number;
    caloriesBurned: number;
    date: NativeDate;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    type: string;
    durationMinutes: number;
    caloriesBurned: number;
    date: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    type: string;
    durationMinutes: number;
    caloriesBurned: number;
    date: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    userId: mongoose.Types.ObjectId;
    type: string;
    durationMinutes: number;
    caloriesBurned: number;
    date: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    type: string;
    durationMinutes: number;
    caloriesBurned: number;
    date: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Leaderboard: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    teamId: mongoose.Types.ObjectId;
    rank: number;
    points: number;
    week: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    teamId: mongoose.Types.ObjectId;
    rank: number;
    points: number;
    week: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    teamId: mongoose.Types.ObjectId;
    rank: number;
    points: number;
    week: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: mongoose.Types.ObjectId;
    teamId: mongoose.Types.ObjectId;
    rank: number;
    points: number;
    week: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    teamId: mongoose.Types.ObjectId;
    rank: number;
    points: number;
    week: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    teamId: mongoose.Types.ObjectId;
    rank: number;
    points: number;
    week: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    userId: mongoose.Types.ObjectId;
    teamId: mongoose.Types.ObjectId;
    rank: number;
    points: number;
    week: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    teamId: mongoose.Types.ObjectId;
    rank: number;
    points: number;
    week: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Workout: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    name: string;
    description: string;
    difficulty: "Advanced" | "Beginner" | "Intermediate";
    durationMinutes: number;
    focus: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
    difficulty: "Advanced" | "Beginner" | "Intermediate";
    durationMinutes: number;
    focus: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    description: string;
    difficulty: "Advanced" | "Beginner" | "Intermediate";
    durationMinutes: number;
    focus: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    description: string;
    difficulty: "Advanced" | "Beginner" | "Intermediate";
    durationMinutes: number;
    focus: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
    difficulty: "Advanced" | "Beginner" | "Intermediate";
    durationMinutes: number;
    focus: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    description: string;
    difficulty: "Advanced" | "Beginner" | "Intermediate";
    durationMinutes: number;
    focus: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    name: string;
    description: string;
    difficulty: "Advanced" | "Beginner" | "Intermediate";
    durationMinutes: number;
    focus: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    description: string;
    difficulty: "Advanced" | "Beginner" | "Intermediate";
    durationMinutes: number;
    focus: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=index.d.ts.map