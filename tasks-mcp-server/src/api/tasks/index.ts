import { create } from './create.js';
import { find } from './find.js';
import { findOne } from './find-one.js';
import { remove } from './remove.js';
import { update } from './update.js';

export const tasksApi = {
  create, find, findOne, remove, update
}