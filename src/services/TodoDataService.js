import { Todos as collection } from 'collections';
import { Todo } from 'models';

const _withPersistAfterAction = (callback) => async (...args) => { 
  await callback(...args);
  collection.persist();
}

class TodoDataService {
  collection = collection;

  getAll = () => collection.find();

  getClose = () => collection.find({ open: false });

  getOpen = () => collection.find({ open: true });

  findOne = (selector) => collection.findOne(selector);

  update = _withPersistAfterAction(
    async (_id, doc) => {
      await Todo.validate(doc);
      return collection.updateOne({ _id }, doc);
    }
  );

  remove = _withPersistAfterAction(
    (_id) => collection.remove({ _id })
  )

  insert = _withPersistAfterAction(
    async (doc) => {
      await Todo.validate(doc);
      return collection.insert(doc);
    }
  )
}

export default new TodoDataService();
