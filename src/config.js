const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "buqetss",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zghare54y1.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_QTtjiN885",
    API_CLIENT_ID: "2rk6j889q4ejh05qt7vep4p32v",
    IDENTITY_POOL_ID: "us-east-1:ec4cf4d7-dcaa-4ae8-adeb-20f1c976c7d7",
  },
};
export default config;
