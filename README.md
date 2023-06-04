# @canalis/react-link

## Description

Canalis is an advanced `Embeddings as a Service (EaaS)` software that seamlessly orchestrates `Extract, Transform, and Load (ETL)` operations from Software as a Service (SaaS) platforms to Vector Databases. This transformation process primes the data within SaaS platforms for the optimal utilization in Large Language Model (LLM) applications, thus enhancing retrieval augmented generation (RAG), promoting cost efficiency in updating embedding vectors, and supporting integration with multiple LLM providers. To delve deeper into the capabilities of Canalis, please visit our [official website](http://www.canalis.ai).

## Overview

The `@canalis/react-link` package provides a secure and streamlined interface for end-users to grant access to their data. Acting as a crucial bridge between your application and the end-user's data, the Canalis Link component ensures transparent and consent-based data access management.

## Features

1. **React Hook:** The package is equipped with a plug-and-play React Hook, simplifying the integration of Canalis Link into your React application.
2. **Data Access:** Canalis Link serves the pivotal role of facilitating the data access authorization process, making it a vital component for any data-driven application that values user privacy and consent.
3. **Secure and Transparent:** Ensuring adherence to industry-standard security protocols, Canalis Link instills confidence in both developers and end-users about data access management.

## Installation

Install this package into any JavaScript/TypeScript project using npm (Node Package Manager).

```bash
npm install @canalis/react-link
```

## Usage

Install this package into any JavaScript/TypeScript project using npm (Node Package Manager).

Post installation, import the Canalis Link hook into your application and utilize it to enable data access authorization. Here's an example of its usage in a React component:

```ts
import { useCanalisLink } from "@canalis/react-link";

const App = () => {
  const { open } = useCanalisLink({
    onSuccess(code) {
      // Use this 'code' to exchange for an OAuth access token
      // Via API endpoint 'v1/oauth/token'
      console.log(code);
    },
    onError(error) {
      // Handle any error that may occur during the process
      console.log(error);
    },
  });

  return (
    <button
      onClick={() =>
        open({
          clientId: "<Your_Client_Id>",
          endUserOriginId: "<Your_End_User_Id>",
        })
      }
    >
      Authorize Access
    </button>
  );
};

export default App;
```

Remember to replace <b><Your_Client_Id></b> and <b><Your_End_User_Id></b> with actual values.

## Conclusion

`@canalis/react-link` offers a practical and secure way to handle data access within your application. By taking care of the complex aspects of data access authorization, Canalis Link allows developers to focus on their application's core functionalities.

For more detailed information on leveraging this package effectively, refer to the official Canalis documentation.

Happy coding!

## Support

Email us at <code>support@canalis.ai</code>
