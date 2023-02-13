import { request, gql } from "graphql-request";

const GRAPHQL_ENDPOINT = "http://localhost:9000/graphql";

export async function getCompany(id) {
  const query = gql`
    query CompanyQuery($id: ID!) {
      company(id: $id) {
        id
        name
        description
        jobs {
          id
          title
        }
      }
    }
  `;
  const variables = { id };
  const { company } = await request(GRAPHQL_ENDPOINT, query, variables);
  return company;
}

export async function getJob(id) {
  const query = gql`
    query JobQuery($id: ID!) {
      job(id: $id) {
        id
        title
        company {
          id
          name
        }
        description
      }
    }
  `;
  const variables = { id };
  const { job } = await request(GRAPHQL_ENDPOINT, query, variables);
  return job;
}

export async function getJobs() {
  const query = gql`
    query Query {
      jobs {
        id
        title
        company {
          name
        }
      }
    }
  `;
  const { jobs } = await request(GRAPHQL_ENDPOINT, query);
  return jobs;
}
