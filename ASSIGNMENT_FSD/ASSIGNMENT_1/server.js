import http from "http";

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {

        res.statusCode = 200;

        res.end(`
            <html>
                <head>
                    <title>My College</title>
                </head>
                <body>
                    <h1>Welcome to My College</h1>

                    <nav>
                        <a href="/">Home</a> |
                        <a href="/home">Home Page</a> |
                        <a href="/about">About</a>
                    </nav>

                    <p>Welcome to our college website.</p>
                </body>
            </html>
        `);

    } else if (req.url === "/home") {

        res.statusCode = 200;

        res.end(`
            <html>
                <head>
                    <title>Home Page</title>
                </head>
                <body>
                    <h1>Home Page</h1>

                    <nav>
                        <a href="/">Welcome</a> |
                        <a href="/home">Home</a> |
                        <a href="/about">About</a>
                    </nav>

                    <p>This is the Home Page of our college.</p>
                </body>
            </html>
        `);

    } else if (req.url === "/about") {

        res.statusCode = 200;

        res.end(`
            <html>
                <head>
                    <title>About Department</title>
                </head>
                <body>
                    <h1>About Computer Science Department</h1>

                    <nav>
                        <a href="/">Welcome</a> |
                        <a href="/home">Home</a> |
                        <a href="/about">About</a>
                    </nav>

                    <p>
                        This is the Computer Science Department
                        of our college.
                    </p>
                </body>
            </html>
        `);

    } else {

        res.statusCode = 404;

        res.end(`
            <html>
                <head>
                    <title>404 - Not Found</title>
                </head>
                <body>
                    <h1>404 - Page Not Found</h1>

                    <nav>
                        <a href="/">Welcome</a> |
                        <a href="/home">Home</a> |
                        <a href="/about">About</a>
                    </nav>

                    <p>The requested URL does not exist.</p>
                </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});