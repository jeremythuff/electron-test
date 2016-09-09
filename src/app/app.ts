// Type-script's main entry point

function greeter(person: string) {
    return "Hello, " + person;
}

var user = "World!";

document.body.innerHTML = greeter(user);