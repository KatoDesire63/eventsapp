
import { Amplify } from "aws-amplify";

const awsConfig = {
  Auth: {
    region: "YOUR_REGION",
    userPoolId: "YOUR_USER_POOL_ID",
    userPoolWebClientId: "YOUR_CLIENT_ID"
  }
};

Amplify.configure(awsConfig);

export default awsConfig;
