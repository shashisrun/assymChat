A simple end to end encrypted chat app, bassed on the principle of Assymmetric Public Private key encryption for communication.

Frontend is powered by React JS and encryption and image compression would be handled by Rust or C++ libraries compiled to WebAssembly for near native performance.

Backend would be divided in multiple parts, for authentication Java Spring Security with postgreSQL (using existing repo oneAuth) and for messaging go based non-blocking backend server using mongoDB.