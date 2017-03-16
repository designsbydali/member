
# giving.group subscriptions

This project handles the public facing forms and APIs used to sign up and manage
subscriptions.


## Getting started
#### Install n (https://github.com/tj/n)
Because this project is hosted in AWS Lambda, we're
limited to using node 4.3.2 runtime.
```
n 4.3.2
node --version
```

#### Configure AWS
1. [Install aws-cli.](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
2. Sign in to the [AWS managment interface](https://givinggroup.signin.aws.amazon.com/console)
3. Services->IAM->Users->(user)->Security Credentials->Create Access Key
4. make a note of the Access Key ID and Secret Access Key shown
5. back in the command line, type `aws configure`
6. enter the ID and secret from step 4, and region as `us-west-2`
7. test by typing `aws s3 ls`, and verifying there are no errors.


#### Install yarn
[Yarn](https://github.com/yarnpkg/yarn) is the preferred package manager.  Use it instead of npm.

#### Install packages
```
yarn install
```

#### Run the server
```
yarn start
```

#### Open a browser to [http://localhost:3000](http://localhost:3000)


## Contributing
Clean up any lint errors/warnings.
```
yarn run lint
```

Make sure all tests pass.
```
yarn test
```

Submit an PR!

# member
# new
