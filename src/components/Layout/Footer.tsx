export default function Footer() {
  return (
    <footer className="">
      <p className="text-center">
        &copy;{new Date().getFullYear()} by{" "}
        <a href="https://github.com/charukirti" target="blank_">
          Charukirti
        </a>
      </p>
    </footer>
  );
}
