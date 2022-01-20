#[napi]
fn add(a: u32, b: u32) -> u32 {
  a + b
}

#[napi]
fn plus_100(input: u32) -> u32 {
  input + 100
}
