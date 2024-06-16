interface TestProps {
  text: string;
}
export function Test({ text }: TestProps) {
  return <h1>{text}</h1>;
}
