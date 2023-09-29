import { Router } from 'express';
import raExpressMongoose from '../ra-mongoose/index';
import postModel from '../models/post.model';
import userModel from '../models/user.model';

const router = Router();
router.use(
  '/users',
  raExpressMongoose(userModel, {
    q: ['name', 'username'],
    allowedRegexFields: ['company'],
    useLean: false,
  })
);
router.use('/posts', raExpressMongoose(postModel, { q: ['title'] }));

export default router;
