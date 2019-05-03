import { graphiqlExpress } from 'graphql-server-express';

const subscriptionsUrl = __PUBLIC_URL__.replace(/^http/, 'ws') + "/graphql";

export default graphiqlExpress({
  endpointURL: __PUBLIC_URL__ + '/graphql',
  subscriptionsEndpoint: subscriptionsUrl,
  query:
   '{\n' +
   '  count {\n' +
   '    amount\n' +
   '  }\n' +
   '}'
});
