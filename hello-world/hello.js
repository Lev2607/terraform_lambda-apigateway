/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 

// Lambda function code

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  let responseMessage = 'Hello, World!';

  if (event.queryStringParameters && event.queryStringParameters['Name']) {
    responseMessage = 'Hello, ' + event.queryStringParameters['Name'] + '!';
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
} **/

exports.handler = async (event) => {
  console.log('Event: ', event);

  let response;
  const resource = event.resource;
  const httpMethod = event.httpMethod;

  if (resource === "/say-hi" && httpMethod === "GET") {
    response = {
      statusCode: 200,
      body: JSON.stringify({ from: "/say-hi" })
    };
  } else if (resource === "/save" && httpMethod === "POST") {
    response = {
      statusCode: 200,
      body: JSON.stringify({ from: "/save" })
    };
  } else if (resource === "/remove" && httpMethod === "DELETE") {
    response = {
      statusCode: 200,
      body: JSON.stringify({ from: "/remove" })
    };
  } else {
    response = {
      statusCode: 404,
      body: JSON.stringify({ message: "Resource not found or method not supported" })
    };
  }

  return {
    statusCode: response.statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: response.body
  };
};
