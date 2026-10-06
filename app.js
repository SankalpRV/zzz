// app.js
function add(a, b) {
    return a + b;
}

// A simple test to make sure our code works
if (add(2, 3) !== 5) {
    console.error("❌ Test Failed!");
    process.exit(1); // Tells the system something went wrong
} else {
    console.log("✅ All Tests Passed!");
    process.exit(0); // Tells the system everything is perfect
}
