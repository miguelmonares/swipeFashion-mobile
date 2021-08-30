// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Genders = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
};

const { UntitledModel, User } = initSchema(schema);

export {
  UntitledModel,
  User,
  Genders
};