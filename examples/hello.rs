// PLAYGROUND_MARKER — sample Rust file for the A2A playground.

fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    println!("{}", greet("world"));
}
