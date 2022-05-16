.. _packaging-create-service:

==================
2 - Create Service
==================

For this example, we are going to create a simple Rust project that serves a static web page. 

.. code:: bash

    mkdir hello-world && cd hello-world
    cargo init
    touch src/index.html

In ``index.html`` add:

.. code:: html

    <html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
    </html>

In ``main.rs`` add:

.. code:: rust

    use hyper::service::{make_service_fn, service_fn};
    use hyper::{body::Bytes, Body, Request, Response, Server};
    use std::convert::Infallible;
    use std::net::SocketAddr;

    async fn handle(_req: Request<Body>) -> Result<Response<Body>, Infallible> {
        Ok(Response::new(Body::from(Bytes::from_static(
            include_bytes!("index.html"),
        ))))
    }

    #[tokio::main]
    async fn main() {
        // Construct our SocketAddr to listen on...
        let addr = SocketAddr::from(([0, 0, 0, 0], 80));

        // And a MakeService to handle each connection...
        let make_service = make_service_fn(|_conn| async { Ok::<_, Infallible>(service_fn(handle)) });

        // Then bind and serve...
        let server = Server::bind(&addr).serve(make_service);

        // And run forever...
        if let Err(e) = server.await {
            eprintln!("server error: {}", e);
        }
    }

Finally, in our ``Cargo.toml``, we need to add some dependencies, which will look like this:

.. code:: toml

    [dependencies]
    hyper = { version = "0.14.4", features = ["server", "http1", "http2", "tcp", "stream"] }
    tokio = { version = "1.4.0", features = ["full"] }


**That's it!** We now have the code for our service.

Let's build and run it!

.. code:: bash

    # build the project
    cargo build
    # start the executable
    target/debug/hello-world

Visit `<http://localhost:80>`_ to see your running web page!
