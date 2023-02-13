import { Job, Company } from "./db.js";
export const resolvers = {
  Query: {
    jobs: () => Job.findAll(),
    job: (_parent, args) => Job.findById(args.id),
    company: (_parent, args) => Company.findById(args.id),
  },
  Job: {
    company: (parent) => Company.findById(parent.companyId),
  },
  Company: {
    jobs: async (company) => Job.findAll((job) => job.companyId === company.id),
  },
};
