// Q1. Promises – Basic

function fetchDataBasic() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

fetchDataBasic().then((data) => {
    console.log(data);
});


// Q2. Promise with Resolve / Reject

function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not Eligible");
        }
    });
}

checkAge(20)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// Q3. Promise Chaining

function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User logged in");
        }, 1000);
    });
}

function getUserDetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User details fetched");
        }, 1000);
    });
}

function getUserOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User orders fetched");
        }, 1000);
    });
}

loginUser()
    .then((result) => {
        console.log(result);
        return getUserDetails();
    })
    .then((result) => {
        console.log(result);
        return getUserOrders();
    })
    .then((result) => {
        console.log(result);
    });


// Q4. Promise.all()

const users = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Users fetched");
    }, 2000);
});

const products = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products fetched");
    }, 1000);
});

const orders = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Orders fetched");
    }, 3000);
});

Promise.all([users, products, orders])
    .then((results) => {
        console.log(results);
    });


// Q5. Convert Promise to Async / Await

function getDataBasic() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function displayData() {
    const result = await getDataBasic();
    console.log(result);
}

displayData();


// Q6. Async / Await Error Handling

function fetchDataError() {
    return Promise.reject("Unable to fetch data");
}

async function handleError() {
    try {
        const result = await fetchDataError();
        console.log(result);
    } catch (error) {
        console.log("Error: " + error);
    }
}

handleError();


// Q7. Sequential Async Operations

async function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data");
        }, 1000);
    });
}

async function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Profile data");
        }, 1000);
    });
}

async function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posts data");
        }, 1000);
    });
}

async function main() {
    const user = await getUser();
    console.log(user);

    const profile = await getProfile();
    console.log(profile);

    const posts = await getPosts();
    console.log(posts);
}

main();


// Q8. Event Loop – Predict the Output

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");


// Q9. Event Loop – Explain Execution Order

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


// Q10. Advanced – Async / Await + Event Loop

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

async function test() {
    console.log("3");

    await Promise.resolve();

    console.log("4");
}

test();

Promise.resolve().then(() => {
    console.log("5");
});

console.log("6");


// Q11. Challenge Question

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");

    setTimeout(() => {
        console.log("Timeout 2");
    }, 0);
});

async function demo() {
    console.log("Async 1");

    await Promise.resolve();

    console.log("Async 2");
}

demo();

console.log("End");